var importOrderResponse = require("../responses/importOrderResponses");
var express = require("express");
var router = express.Router();


// E.g. http://localhost:4000/rest/enactor/orders/cis-number?transactionId=12345678901234567890123456
var cisNumberHandler = (req, res, next) => {
  var cisNumber = {
    cisNumber: "ECIS-" + req.query.transactionId
  }
  res.json(cisNumber).end();
};
router.get("/cis-number", cisNumberHandler);

// E.g. http://localhost:4000/importOrder
router.post("/importOrder", (req, res) => {
  var message = req.body;
  var payload = message.payload;
  var uuid = payload ? payload.orderUuid : message.orderUuid;

  const errorResponse = getErrorResponse(uuid);
  if (errorResponse) {
    res.status(errorResponse).end();
  } else {
    var jsonResponse = getResponse(uuid);
    if (!jsonResponse) {
      res.status("500").end();
    } else {
      res.json(getResponse(uuid));
    }
  }
});

// E.g. http://localhost:4000/importOrder/1
// deprecated uuid is no longer passed to the url
router.post("/importOrder/:uuid", (req, res) => {
  console.log(
    `This method is deprecated. The uuid should no longer passed to the url. Use /importOrder with a post body of { "orderUuid": <uuid> } instead.`
  );
  var message = req.body;
  var authHeader = req.headers.authorization;
  var sent = Object.assign({ Authorization: authHeader });
  console.log(JSON.stringify(sent, null, 3));
  if (message.transaction) {
    var transaction = message.transaction;
    var transactionType = transaction["@type"];
    if (!transactionType) {
      console.error(
        "The import order request received a transaction which does not contain the correct type information."
      );
    }
  }
  var uuid = req.params.uuid;
  const errorResponse = getErrorResponse(uuid);
  if (errorResponse) {
    res.status(errorResponse).end();
  } else {
    var jsonResponse = getResponse(uuid);
    if (!jsonResponse) {
      res.status("500").end();
    } else {
      res.json(jsonResponse);
    }
  }
});

// E.g. http://localhost:4000/completeOrder/12345
router.post("/completeOrder/:uuid", (req, res, next) => {
  console.log(
    "Validate Order: " + req.url + " received : " + JSON.stringify(req.body)
  );
  if (req.url.endsWith("99")) {
    res.status(500).end();
  } else {
    res.status(200).end();
  }
});

//E.g. http://localhost:4000/validateOrder
router.post("/validateOrder", (req, res, next) => {
  console.log("Validate Order: " + req.url);
  // console.log(req.url + " received : " + JSON.stringify(req.body));
  function getErrorResponse(ucOrderId) {
    switch (ucOrderId) {
      case "V-304":
      case "V-404":
      case "V-500":
        return ucOrderId.substring(2, ucOrderId.length);
      default:
        return null;
    }
  }
  var responseSent = false;
  if (req.body) {
    try {
      const basketItems = req.body.transaction.basket.items;
      for (let basketItem of basketItems.filter((basketItem) => {
        const type = basketItem["@type"];
        return type != "@type': 'orderDetailsItem";
      })) {
        try {
          if (responseSent) {
            break;
          }
          const additionalData = basketItem.additionalData;
          if (additionalData) {
            const dataMap = additionalData.dataMap;
            if (dataMap) {
              const ucOrderId = dataMap.ucOrder;
              const errorResponse = getErrorResponse(ucOrderId);
              if (errorResponse) {
                res.status(errorResponse).end();
                responseSent = true;
              }
            }
          }
        } catch (e1) {
          console.error(e1);
        }
      }
    } catch (e) {
      console.error(e);
    }
    var message = req.body;
    if (message.orderChange) {
      var response = {
        posInstructions: message.orderChange.posInstructions,
      };
      res.json(response).end();
      responseSent = true;
    }
  }
  if (!responseSent) {
    res.status(200).end();
  }
});

// helper functions

function getErrorResponse(uuid) {
  if (uuid == null) {
    return "403";
  }
  switch (uuid) {
    case "304":
    case "404":
    case "500":
      return uuid;
    default:
      return null;
  }
}

function getResponse(uuid) {
  console.log("getResponse called " + uuid);
  switch (uuid) {
    // add an item to the basket
    case "V-304":
    case "V-404":
    case "V-500":
    case "1":
      const mergedResponse = mergeUcOrder(
        importOrderResponse.addItemResponse,
        uuid
      );
      return mergedResponse;
    // add an item(s) to the basket with a order deposit
    case "1a":
      return importOrderResponse.addItemResponseWithOrderDespoit;
    // add an item(s) to the basket with a forced value (overridden) order deposit
    case "1b":
      return importOrderResponse.addItemResponseWithOrderDespoitAndForceValue;
    // add an item(s) to the basket with force price values
    case "1c":
      return importOrderResponse.addItemResponseWithPrices;
    // add an item(s) to the basket with note items
    case "1n":
      return importOrderResponse.addItemResponseWithNotes;
    // update an existing item in the basket
    case "2":
      return importOrderResponse.updateItemResponse;
    // add a note to the basket
    case "3":
      return importOrderResponse.setTxTextResponse;
    // update an existing note in the basket
    case "4":
      return importOrderResponse.updateSetTxTextResponse;
    // set the customer's name in transaction
    case "5":
      return importOrderResponse.setCustomerResponse;
    // void item
    case "6":
      return importOrderResponse.voidItemResponse;
    // void transaction
    case "7":
      return importOrderResponse.voidItemNoReasonResponse;
    // user messages
    case "8":
      return importOrderResponse.userMessagesResponse;
    // set item data
    case "9a":
      return importOrderResponse.setItemDataResponse;
    // set item data with nulls
    case "9b":
      return importOrderResponse.setItemDataWithNullValueResponse;
    // Add tender item to basket
    case "10":
      return importOrderResponse.addItemWithPrepaidAmountResponse;
    case "11":
      return importOrderResponse.addFulfilledItemResponse;
    case "12":
      return importOrderResponse.addFulfilledItemWithPrepaidAmountResponse;
    case "13":
      return importOrderResponse.orderTest1Response;
    case "TR13":
      return importOrderResponse.orderTest1ResponseTR;
    case "13123":
      return importOrderResponse.orderTest1Response123;
    case "14":
      return importOrderResponse.orderTest2Response;
    case "15":
      return importOrderResponse.orderTest3Response;
    case "16":
      return importOrderResponse.orderTest4Response;
    case "17":
      return importOrderResponse.orderTest5Response;
    case "18":
      return importOrderResponse.orderTest6Response;
    case "19":
      return importOrderResponse.orderTest7Response;
    case "20":
      return importOrderResponse.orderTest8Response;
    case "21":
      return importOrderResponse.orderTest9Response;
    case "TR21":
      return importOrderResponse.orderTest9ResponseTR;
    case "22":
      return importOrderResponse.orderTest10Response;
    case "23":
      return importOrderResponse.orderTest11Response;
    case "TR23":
      return importOrderResponse.orderTest11ResponseTR;
    case "23_new":
      return importOrderResponse.orderTest11ResponseNew2;
    case "24":
      return importOrderResponse.orderTest12Response;
    case "25":
      return importOrderResponse.orderTest13Response;
    case "26":
      return importOrderResponse.orderTest14Response;
    case "27":
      return importOrderResponse.orderTest15Response;
    case "28":
      return importOrderResponse.addSampleThanushiGoHome;
    case "29":
      return importOrderResponse.orderTest16Response;
    case "R1":
      return importOrderResponse.orderTest17Response;
    case "30":
      return importOrderResponse.orderTest18Response;
    case "31":
      return importOrderResponse.orderTest19Response;
    case "32":
      return importOrderResponse.orderTest20Response;
    case "33":
      return importOrderResponse.orderTest21Response;
    case "TR1":
      return importOrderResponse.orderTest22Response;
    case "TR5":
      return importOrderResponse.orderTest25Response;
    case "TR6":
      return importOrderResponse.orderTest26Response;
    case "TR2":
      return importOrderResponse.orderTest23Response;
    case "TR3":
      return importOrderResponse.orderTest24Response;
    case "j1":
      return importOrderResponse.JYSKData1;
    case "j2":
      return importOrderResponse.JYSKData2;
    case "j3":
      return importOrderResponse.JYSKData3;
    case "j4":
      return importOrderResponse.JYSKData4;
    case "j5":
      return importOrderResponse.JYSKData5;
    case "j6":
      return importOrderResponse.JYSKData6;
    case "j7":
      return importOrderResponse.JYSKData7;
    case "j8":
      return importOrderResponse.JYSKData7;
    case "4207158369":
      return importOrderResponse.JYSKData4206011448;
    // New responses
    case "113":
      return importOrderResponse.orderTest1ResponseNew;
    case "114":
      return importOrderResponse.orderTest2ResponseNew;
    case "115":
      return importOrderResponse.orderTest3ResponseNew;
    case "116":
      return importOrderResponse.orderTest4ResponseNew;
    case "117":
      return importOrderResponse.orderTest5ResponseNew;
    case "118":
      return importOrderResponse.orderTest6ResponseNew;
    case "119":
      return importOrderResponse.orderTest7ResponseNew;
    case "120":
      return importOrderResponse.orderTest8ResponseNew;
    case "121":
      return importOrderResponse.orderTest9ResponseNew;
    case "122":
      return importOrderResponse.orderTest10ResponseNew;
    case "123":
      return importOrderResponse.orderTest11ResponseNew;
    case "124":
      return importOrderResponse.orderTest12ResponseNew;
    case "125":
      return importOrderResponse.orderTest13ResponseNew;
    case "126":
      return importOrderResponse.orderTest14ResponseNew;
    // New responses 
    case "UC67_A":
      return importOrderResponse.UC67_A;
    case "UC67_I":
      return importOrderResponse.UC67_I;
    case "UC75":
      return importOrderResponse.UC75;
    case "UC75_A":
      return importOrderResponse.UC75_A;
    case "UC75_B":
      return importOrderResponse.UC75_B;
    case "UC76":
      return importOrderResponse.UC76;
    case "UC76_A":
      return importOrderResponse.UC76_A;
    case "UC76_B":
      return importOrderResponse.UC76_B;
    case "FP":
      return importOrderResponse.orderTestFP;
    case "C1":
      return importOrderResponse.collection1Response
    case "C2":
      return importOrderResponse.collection2Response
    case "C3":
      return importOrderResponse.collection3Response
    case "C4":
      return importOrderResponse.collection4Response
    case "C5":
      return importOrderResponse.collection5Response
    case "C6":
      return importOrderResponse.collection6Response
    case "C7":
      return importOrderResponse.collection7Response
    case "C8":
      return importOrderResponse.collection8Response
    case "C9":
      return importOrderResponse.collection9Response

      //Set Customer
    case "SCT1":
      return importOrderResponse.SetCustomerTest1
    case "SCT2":
      return importOrderResponse.SetCustomerTest2
      //F11 responses
    case "F11C1":
      return importOrderResponse.F11collection1Response
    case "F11C2": 
      return importOrderResponse.F11collection2Response
    case "F11C3":
      return importOrderResponse.F11collection3Response 
    case "F11C4": 
      return importOrderResponse.F11collection4Response
    case "F11C5":
     return importOrderResponse.F11collection5Response  
     case "F11C6":
     return importOrderResponse.F11collection6Response 
    case "F11C7":
      return importOrderResponse.F11collection7Response
    case "F11C8":
     return importOrderResponse.F11collection8Response
    case "F11C9":
      return importOrderResponse.F11collection9Response
      case "F11C10":
    return importOrderResponse.F11collection10Response
    case "TRC1":
     return importOrderResponse.collectionTR1Response
    case "TRC0":
     return importOrderResponse.F11collection0Response
    case "TRC2":
      return importOrderResponse.tRcancelOrderResponse1
    case "TRC3":
     return importOrderResponse.tRcancelOrderResponse2
//TR - Cancel order (setReturnItem)
    case "TRCR1":
     return importOrderResponse.tRcancelOrderResponseRet1
    case "TRC4":
     return importOrderResponse.tRcancelOrderResponse3
    case "JYSK3895":
        return importOrderResponse.JYSK3895
    case "ul123":
        return importOrderResponse.addItemResponseupuli
    case "ul1234":
       return importOrderResponse.upulitest2

//forcePrice
    case "FP01":
       return importOrderResponse.forcePriceTest1
    case "FP02":
       return importOrderResponse.forcePriceTest2
    case "FP03":
       return importOrderResponse.forcePriceTest3
    case "FP04":
       return importOrderResponse.forcePriceTest4
    case "FP05":
       return importOrderResponse.forcePriceTest5
    case "FP06":
      return importOrderResponse.forcePriceTest6
    case "FP07":
      return importOrderResponse.forcePriceTest7
    default:
      const response = importOrderResponse[uuid];
      if (response) {
        return response;
      }
      console.log("Failed to find: " + uuid);
      return null;
  }
}

function mergeUcOrder(originalResponse, orderId) {
  const posInstructions = originalResponse.posInstructions.map(
    (instruction) => {
      const newInstruction = Object.assign({}, instruction);
      newInstruction.ucOrder = orderId;
      return newInstruction;
    }
  );
  return {
    posInstructions: posInstructions,
  };
}
module.exports = router;
