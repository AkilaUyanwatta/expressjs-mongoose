const addItemResponse = {
  posInstructions: [
    // set item
    {
      action: "setItem",
      itemId: "1001000",
      quantity: 2,
      ucOrder: "12345",
      ucLineItem: 1,
      data: {
        company: "JYSK",
        location: "Aarhus",
      },
    },
    {
      action: "setDeliveryOption",
      type: "address",
      description: "Address delivery",
      reference: "addressDelivery",
    },
    {
      action: "setItem",
      itemId: "1001000",
      quantity: 1,
      ucOrder: "12345",
      ucLineItem: 2,
    },
    {
      action: "setDeliveryOption",
      type: "address",
      description: "Address delivery",
      reference: "addressDelivery",
    },
  ],
};


const addItemResponseWithNotes = {
  posInstructions: [
    ...addItemResponse.posInstructions,
    {
      action: "setTxText",
      value: "Added a note item to the basket.",
      displayOnReceipt: true,
      position: 1,
    },
  ],
};

const addItemResponseWithPrices = {
  posInstructions: [
    // set item
    {
      action: "setItem",
      itemId: "1001000",
      quantity: 2,
      maxUnitPrice: 129.5,
      ucOrder: "12345",
      ucLineItem: 1,
      data: {
        company: "JYSK",
        location: "Aarhus",
      },
    },
    {
      action: "setDeliveryOption",
      type: "address",
      description: "Address delivery",
      reference: "addressDelivery",
    },
    {
      action: "setItem",
      itemId: "1001000",
      quantity: 1,
      price: 259.0,
      maxUnitPrice: 129.5,
      ucOrder: "12345",
      ucLineItem: 2,
    },
    {
      action: "setDeliveryOption",
      type: "address",
      description: "Address delivery",
      reference: "addressDelivery",
    },
  ],
};

const addItemResponseWithOrderDespoit = {
  posInstructions: [
    // set item
    {
      action: "setItem",
      itemId: "1001000",
      quantity: 2,
      price: 259.0,
      maxUnitPrice: 129.5,
      ucOrder: "12345",
      ucLineItem: 1,
      data: {
        company: "JYSK",
        location: "Aarhus",
      },
    },
    {
      action: "setDeliveryOption",
      type: "address",
      description: "Address delivery",
      reference: "addressDelivery",
    },
    {
      action: "setItem",
      itemId: "1001000",
      quantity: 1,
      price: 259.0,
      maxUnitPrice: 129.5,
      ucOrder: "12345",
      ucLineItem: 2,
    },
    {
      action: "setDeliveryOption",
      type: "address",
      description: "Address delivery",
      reference: "addressDelivery",
    },
    {
      action: "setOrderDeposit",
      reasonId: "COD004",
    },
  ],
};

const addItemResponseWithOrderDespoitAndForceValue = {
  posInstructions: [
    // set item
    {
      action: "setItem",
      itemId: "1001000",
      quantity: 2,
      price: 259.0,
      maxUnitPrice: 129.5,
      ucOrder: "12345",
      ucLineItem: 1,
      data: {
        company: "JYSK",
        location: "Aarhus",
      },
    },
    {
      action: "setDeliveryOption",
      type: "address",
      description: "Address delivery",
      reference: "addressDelivery",
    },
    {
      action: "setItem",
      itemId: "1001000",
      quantity: 1,
      price: 259.0,
      maxUnitPrice: 129.5,
      ucOrder: "12345",
      ucLineItem: 2,
    },
    {
      action: "setDeliveryOption",
      type: "address",
      description: "Address delivery",
      reference: "addressDelivery",
    },
    {
      action: "setOrderDeposit",
      reasonId: "COD003",
      depositValue: 3750,
      forceDepositValue: true,
    },
  ],
};

const addItemResponseWithReceiptInvoiceDetails = {
  posInstructions: [
    // set item
    {
      action: "setItem",
      itemId: "1001000",
      quantity: 2,
      ucOrder: "12345",
      ucLineItem: 1,
      data: {
        company: "JYSK",
        location: "Aarhus",
      },
    },
    {
      action: "setDeliveryOption",
      type: "address",
      description: "Address delivery",
      reference: "addressDelivery",
    },
    {
      action: "setItem",
      itemId: "1001000",
      quantity: 1,
      ucOrder: "12345",
      ucLineItem: 2,
    },
    {
      action: "setDeliveryOption",
      type: "address",
      description: "Address delivery",
      reference: "addressDelivery",
    },
    {
      action: "setReceiptInvoiceDetails",
      invoiceReference: new Date().toString(),
      invoiceRequested: true,
      emailInvoice: true,
      printInvoice: true,
    },
  ],
};

const updateItemResponse = {
  posInstructions: [
    // set item - update quantity
    {
      action: "setItem",
      itemId: "888888",
      quantity: 2,
      price: 259.0,
      maxUnitPrice: 129.5,
      enactorRef: "1",
      ucOrder: "12345",
      ucLineItem: 2,
    },
    {
      action: "setDeliveryOption",
      type: "address",
      description: "Address delivery",
      reference: "addressDelivery",
    },
  ],
};

const setTxTextResponse = {
  posInstructions: [
    {
      action: "setTxText",
      value: "Test PosInstructionsSetTxTextDTO message",
      displayOnReceipt: true,
      position: 1,
    },
  ],
};

const updateSetTxTextResponse = {
  posInstructions: [
    {
      action: "setTxText",
      value: "Updated Test PosInstructionsSetTxTextDTO message",
      position: 1,
    },
  ],
};

const setCustomerResponse = {
  posInstructions: [
    {
      action: "setCustomer",
      customerId: "1",
      firstName: "John",
      lastName: "Smith",
    },
  ],
};

const voidItemResponse = {
  posInstructions: [
    {
      action: "removeItem",
      enactorRef: "1",
      reason: "IV-UK2",
    },
  ],
};

const voidItemNoReasonResponse = {
  posInstructions: [
    {
      action: "removeItem",
      enactorRef: "1",
    },
  ],
};

const userMessagesResponse = {
  posInstructions: [
    {
      action: "addUserNotification",
      userNotification: {
        severity: "INFO",
        messageText: "Hello, World",
        additionalData: {
          messageType: "ENACTOR",
          refType: "REF_TYPE",
          refId: "REF_ID-1",
        },
      },
    },
    {
      action: "addUserNotification",
      userNotification: {
        severity: "INFO",
        messageId: "NOT_ALLOWED",
        messageBase: "MFC/Common/CommonMessages",
        additionalData: {
          messageType: "ENACTOR",
          refType: "REF_TYPE",
          refId: "REF_ID-2",
        },
      },
    },
  ],
};

const setItemDataResponse = {
  posInstructions: [
    // set item
    {
      action: "setItemData",
      enactorRef: "1",
      data: {
        UC_DATA: "UPDATED_UC_DATA_VALUE",
      },
    },
  ],
};

const setItemDataWithNullValueResponse = {
  posInstructions: [
    // set item
    {
      action: "setItemData",
      enactorRef: "1",
      data: {
        UC_DATA: "",
      },
    },
  ],
};

const addItemWithPrepaidAmountResponse = {
  posInstructions: [
    {
      action: "setItem",
      itemId: "1001000",
      quantity: 2,
      price: 259.0,
      maxUnitPrice: 129.5,
      ucOrder: "12345",
      ucLineItem: 1,
      data: {
        company: "JYSK",
        location: "Aarhus",
      },
    },
    {
      action: "setDeliveryOption",
      type: "address",
      description: "Address delivery",
      reference: "addressDelivery",
    },
    {
      action: "setItem",
      itemId: "1001000",
      quantity: 1,
      price: 259.0,
      maxUnitPrice: 129.5,
      ucOrder: "12345",
      ucLineItem: 2,
    },
    {
      action: "setDeliveryOption",
      type: "address",
      description: "Address delivery",
      reference: "addressDelivery",
    },
    {
      action: "addTenderItem",
      tenderId: "CASH_DK",
      tenderAmount: 123.0,
    },
  ],
};

const addFulfilledItemResponse = {
  posInstructions: [
    {
      action: "setItem",
      itemId: "1001000",
      quantity: 2,
      price: 2590,
      maxUnitPrice: 1295,
      ucOrder: "12345",
      ucLineItem: 1,
      data: {
        company: "JYSK",
        location: "Aarhus",
      },
      fulfilledQuantity: 2,
    },
    {
      action: "setDeliveryOption",
      type: "address",
      description: "Address delivery",
      reference: "addressDelivery",
    },
    {
      action: "setItem",
      itemId: "1001000",
      quantity: 3,
      price: 3885,
      maxUnitPrice: 1295,
      ucOrder: "12345",
      ucLineItem: 2,
      data: {
        externalReference: "OriginalPrmotion",
      },
    },
    {
      action: "setDeliveryOption",
      type: "address",
      description: "Address delivery",
      reference: "addressDelivery",
    },
    {
      action: "setItem",
      itemId: "1001000",
      quantity: 1,
      price: 1295,
      maxUnitPrice: 1295,
      ucOrder: "12345",
      ucLineItem: 3,
    },
    {
      action: "setDeliveryOption",
      type: "address",
      description: "Address delivery",
      reference: "addressDelivery",
    },
  ],
};

const JYSKData1 =
{
  "posInstructions": [{
    "action": "setTxText",
    "operation": "CREATE",
    "position": "com.jysk.pos.uc.working-copy-business-key",
    "value": "ca6233b7-1fa5-4ba3-8864-cbb06506d225"
  }, {
    "action": "setTxText",
    "operation": "CREATE",
    "position": "com.jysk.pos.uc.sync-order.id",
    "value": "ca6233b7-1fa5-4ba3-8864-cbb06506d225"
  }, {
    "action": "setItem",
    "action": "setItem",
    "operation": "CREATE",
    "itemId": "2323200",
    "quantity": 1,
    "price": 12500.00,
    "ucOrder": "ca6233b7-1fa5-4ba3-8864-cbb06506d225",
    "ucLineItem": "1",
    "data": {
      "ucLineItem": "1",
      "ucLine-import-created-by-store": "D001",
      "ucOrder": "ca6233b7-1fa5-4ba3-8864-cbb06506d225",
      "ucLine-import-type": "CUSTOMER_ORDER",
      "ucLineItem-import": "1",
      "ucLine-import-request-type": "EDIT",
      "ucSalesOrder": "4300268630"
    },
    "forcePrice": false
  }, {
    "action": "setDeliveryOption",
    "operation": "CREATE",
    "type": "store",
    "reference": "locationCollectionDelivery",
    "promise": ""
  }, {
    "action": "addTenderItem",
    "operation": "CREATE",
    "tenderId": "PRE_PAYMENT_DK",
    "tenderAmount": 32800
  }, {
    "action": "addTenderItem",
    "operation": "CREATE",
    "tenderId": "UC_REFUND_DK",
    "tenderAmount": 0
  }, {
    "action": "setTxText",
    "operation": "CREATE",
    "position": "com.jysk.pos.uc.import-order.id",
    "value": "605ec61c-8a16-466a-92a6-e506fb173bb2"
  }, {
    "action": "setTxText",
    "operation": "CREATE",
    "position": "com.jysk.pos.uc.sales-order-number",
    "value": "4300268630"
  }, {
    "action": "setCustomer",
    "action": "setCustomer",
    "operation": "CREATE",
    "firstName": "karl",
    "lastName": "test",
    "customerGroupId": ""
  }, {
    "action": "setTxText",
    "operation": "CREATE",
    "position": "com.jysk.pos.uc.customer.type",
    "value": "B2C"
  }, {
    "action": "setPartyType",
    "operation": "CREATE",
    "partyType": "B2C"
  }]
}


const addSampleThanushiGoHome = {
  "posInstructions": [{
    "action": "setTxText",
    "operation": "CREATE",
    "position": "com.jysk.pos.uc.working-copy-business-key",
    "value": "0a075970-edc9-43df-93f4-46d51acaba53"
  }, {
    "action": "setTxText",
    "operation": "CREATE",
    "position": "com.jysk.pos.uc.sync-order.id",
    "value": "0a075970-edc9-43df-93f4-46d51acaba53"
  }, {
    "action": "setItem",
    "action": "setItem",
    "operation": "CREATE",
    "itemId": "1001000",
    "quantity": 1,
    "price": 22900.00,
    "ucOrder": "0a075970-edc9-43df-93f4-46d51acaba53",
    "ucLineItem": "1",
    "data": {
      "ucLineItem": "1",
      "ucLine-import-created-by-store": "D001",
      "ucOrder": "0a075970-edc9-43df-93f4-46d51acaba53",
      "ucLine-import-type": "CUSTOMER_ORDER",
      "ucLineItem-import": "1",
      "ucLine-import-request-type": "EDIT",
      "ucSalesOrder": "4300261154"
    },
    "forcePrice": false
  }, {
    "action": "setDeliveryOption",
    "operation": "CREATE",
    "type": "store",
    "reference": "locationCollectionDelivery",
    "promise": ""
  }, {
    "action": "addTenderItem",
    "action": "addTenderItem",
    "operation": "CREATE",
    "tenderId": "PRE_PAYMENT_DK",
    "tenderAmount": 21050,
    "ucTenderType": "PREPAYMENT"
  }, {
    "action": "addTenderItem",
    "action": "addTenderItem",
    "operation": "CREATE",
    "tenderId": "UC_REFUND_DK",
    "tenderAmount": 0,
    "ucTenderType": "PREPAYMENT"
  }, {
    "action": "setTxText",
    "operation": "CREATE",
    "position": "com.jysk.pos.uc.import-order.id",
    "value": "1bda7f69-8bf8-4673-8388-5f71e7dc7b6e"
  }, {
    "action": "setTxText",
    "operation": "CREATE",
    "position": "com.jysk.pos.uc.sales-order-number",
    "value": "4300261154"
  }, {
    "action": "setCustomer",
    "action": "setCustomer",
    "operation": "CREATE",
    "firstName": "fdsafas",
    "lastName": "sdf safasd fs",
    "customerGroupId": ""
  }, {
    "action": "setTxText",
    "operation": "CREATE",
    "position": "com.jysk.pos.uc.customer.type",
    "value": "B2C"
  }, {
    "action": "setPartyType",
    "operation": "CREATE",
    "partyType": "B2C"
  }]
};

const addFulfilledItemWithPrepaidAmountResponse = {
  posInstructions: [
    {
      action: "setItem",
      itemId: "1001000",
      quantity: 2,
      price: 2590,
      maxUnitPrice: 1295,
      ucOrder: "12345",
      ucLineItem: 1,
      data: {
        company: "JYSK",
        location: "Aarhus",
      },
      fulfilledQuantity: 2,
    },
    {
      action: "setDeliveryOption",
      type: "address",
      description: "Address delivery",
      reference: "addressDelivery",
    },
    {
      action: "setItem",
      itemId: "1001000",
      quantity: 3,
      price: 3885,
      maxUnitPrice: 1295,
      ucOrder: "12345",
      ucLineItem: 2,
    },
    {
      action: "setDeliveryOption",
      type: "store",
      lineNo: 3,
      description: "Store delivery",
      reference: "locationCollectionDelivery",
    },
    {
      action: "setItem",
      itemId: "1001000",
      quantity: 1,
      price: 1295,
      maxUnitPrice: 1295,
      ucOrder: "12345",
      ucLineItem: 3,
    },
    {
      action: "setDeliveryOption",
      type: "address",
      description: "Address delivery",
      reference: "addressDelivery",
    },
    {
      action: "addTenderItem",
      tenderId: "CASH_DK",
      tenderAmount: 2590,
      ucTenderType: "PREPAYMENT",
    },
  ],
};

const orderTest1Response = {
  posInstructions: [
    {
      action: "setItem",
      itemId: "1",
      quantity: 2,
      price: 4000,
      ucOrder: "test_1",
      ucLineItem: 1,
    },
    {
      action: "setDeliveryOption",
      type: "address",
      description: "Address delivery",
      reference: "addressDelivery",
    },
    {
      action: "setItem",
      itemId: "2",
      quantity: 1,
      price: 5000,
      ucOrder: "test_1",
      ucLineItem: 2,
      fulfilledQuantity: 1,
    },
    {
      action: "setDeliveryOption",
      type: "address",
      description: "Address delivery",
      reference: "addressDelivery",
    },
    {
      action: "setItem",
      itemId: "3",
      quantity: 1,
      price: 2000,
      ucOrder: "test_1",
      ucLineItem: 3,
    },
    {
      action: "setDeliveryOption",
      type: "address",
      description: "Address delivery",
      reference: "addressDelivery",
    },
    {
      action: "addTenderItem",
      tenderId: "CASH_DK",
      tenderAmount: 5000,
      ucTenderType: "PREPAYMENT",
    },
  ],
};


const orderTest8Response = {
  posInstructions: [
    {
      action: "setItem",
      itemId: "1",
      quantity: 2,
      price: 4000,
      ucOrder: "test_1",
      ucLineItem: 1,
    },
    {
      action: "setDeliveryOption",
      type: "address",
      description: "Address delivery",
      reference: "addressDelivery",
    },
    {
      action: "setItem",
      itemId: "2",
      quantity: 1,
      price: 5000,
      ucOrder: "test_1",
      ucLineItem: 2,
      fulfilledQuantity: 1,
    },
    {
      action: "setDeliveryOption",
      type: "address",
      description: "Address delivery",
      reference: "addressDelivery",
    },
    {
      action: "setItem",
      itemId: "3",
      quantity: 1,
      price: 2000,
      ucOrder: "test_1",
      ucLineItem: 3,
    },
    {
      action: "setDeliveryOption",
      type: "address",
      description: "Address delivery",
      reference: "addressDelivery",
    },
    {
      action: "addTenderItem",
      tenderId: "CASH_DK",
      tenderAmount: 15000,
      ucTenderType: "PREPAYMENT",
    },
  ],
};

const orderTest9Response = {
  posInstructions: [
    {
      action: "setItem",
      itemId: "1",
      quantity: 2,
      price: 4000,
      ucOrder: "test_2",
      ucLineItem: 1,
    },
    {
      action: "setDeliveryOption",
      type: "address",
      description: "Address delivery",
      reference: "addressDelivery",
    },
    {
      action: "setItem",
      itemId: "2",
      quantity: 3,
      price: 2000,
      ucOrder: "test_2",
      ucLineItem: 2,
    },
    {
      action: "setDeliveryOption",
      type: "address",
      description: "Address delivery",
      reference: "addressDelivery",
    },
    {
      action: "setItem",
      itemId: "3",
      quantity: 1,
      price: 1000,
      ucOrder: "test_2",
      ucLineItem: 3,
    },
    {
      action: "setDeliveryOption",
      type: "address",
      description: "Address delivery",
      reference: "addressDelivery",
    },
    {
      action: "addTenderItem",
      tenderId: "CASH_DK",
      tenderAmount: 5000,
      ucTenderType: "PREPAYMENT",
    },
  ],
};

const orderTest10Response = {
  posInstructions: [
    {
      action: "setItem",
      itemId: "1",
      quantity: 2,
      price: 4000,
      ucOrder: "test_1",
      ucLineItem: 1,
    },
    {
      action: "setDeliveryOption",
      type: "store",
      description: "Store delivery",
      reference: "locationCollectionDelivery",
    },
    {
      action: "setItem",
      itemId: "2",
      quantity: 1,
      price: 5000,
      ucOrder: "test_1",
      ucLineItem: 2,
      fulfilledQuantity: 1,
    },
    {
      action: "setDeliveryOption",
      type: "store",
      description: "Store delivery",
      reference: "locationCollectionDelivery",
    },
    {
      action: "setItem",
      itemId: "3",
      quantity: 1,
      price: 2000,
      ucOrder: "test_1",
      ucLineItem: 3,
    },
    {
      action: "setDeliveryOption",
      type: "store",
      description: "Store delivery",
      reference: "locationCollectionDelivery",
    },
    {
      action: "addTenderItem",
      tenderId: "CASH_DK",
      tenderAmount: 5000,
      ucTenderType: "PREPAYMENT",
    },
  ],
};

const orderTest11Response = {
  posInstructions: [
    {
      action: "setItem",
      itemId: "10",
      quantity: 9,
      price: 9000,
      ucOrder: "test_2",
      ucLineItem: 4,
      forcePrice: true,
    },
    {
      action: "setDeliveryOption",
      type: "store",
      description: "Store delivery",
      reference: "locationCollectionDelivery",
    },
    {
      action: "setItem",
      itemId: "1",
      quantity: 5,
      price: 40000,
      ucOrder: "test_2",
      ucLineItem: 1,
    },
    {
      action: "setDeliveryOption",
      type: "address",
      description: "Address delivery",
      reference: "addressDelivery",
    },
    {
      action: "setItem",
      itemId: "2",
      quantity: 11,
      price: 2000,
      ucOrder: "test_2",
      ucLineItem: 2,
    },
    {
      action: "setDeliveryOption",
      type: "address",
      description: "Address delivery",
      reference: "addressDelivery",
    },
    {
      action: "setItem",
      itemId: "3",
      quantity: 1,
      price: 1000,
      ucOrder: "test_2",
      ucLineItem: 3,
    },
    {
      action: "setDeliveryOption",
      type: "store",
      description: "Store delivery",
      reference: "locationCollectionDelivery",
    },
    {
      action: "addTenderItem",
      tenderId: "CASH_DK",
      tenderAmount: 6000,
      ucTenderType: "PREPAYMENT",
    },
  ],
};


const orderTest11ResponseNew2 = {
  posInstructions: [
    {
      action: "setItem",
      itemId: "10",
      quantity: 9,
      price: 2000,
      ucOrder: "test_2",
      ucLineItem: 4,
    },
    {
      action: "setDeliveryOption",
      type: "store",
      description: "Store delivery",
      reference: "locationCollectionDelivery",
    },
    {
      action: "setItem",
      itemId: "1",
      quantity: 5,
      price: 4000,
      ucOrder: "test_2",
      ucLineItem: 1,
    },
    {
      action: "setDeliveryOption",
      type: "address",
      description: "Address delivery",
      reference: "addressDelivery",
    },
    {
      action: "setItem",
      itemId: "2",
      quantity: 11,
      price: 2000,
      ucOrder: "test_2",
      ucLineItem: 2,
    },
    {
      action: "setDeliveryOption",
      type: "address",
      description: "Address delivery",
      reference: "addressDelivery",
    },
    {
      action: "setItem",
      itemId: "3",
      quantity: 1,
      price: 1000,
      ucOrder: "test_2",
      ucLineItem: 3,
    },
    {
      action: "setDeliveryOption",
      type: "store",
      description: "Store delivery",
      reference: "locationCollectionDelivery",
    },

  ],
};


const orderTest12Response = {
  posInstructions: [
    {
      action: "setItem",
      itemId: "10",
      quantity: 2,
      price: 2000,
      ucOrder: "test_2",
      ucLineItem: 4,
    },
    {
      action: "setDeliveryOption",
      type: "store",
      description: "Store delivery",
      reference: "locationCollectionDelivery",
    },
    {
      action: "setItem",
      itemId: "1",
      quantity: 2,
      price: 4000,
      ucOrder: "test_2",
      ucLineItem: 1,
    },
    {
      action: "setDeliveryOption",
      type: "address",
      description: "Address delivery",
      reference: "addressDelivery",
    },
    {
      action: "setItem",
      itemId: "2",
      quantity: 3,
      price: 2000,
      ucOrder: "test_2",
      ucLineItem: 2,
    },
    {
      action: "setDeliveryOption",
      type: "address",
      description: "Address delivery",
      reference: "addressDelivery",
    },
    {
      action: "setItem",
      itemId: "3",
      quantity: 1,
      price: 1000,
      ucOrder: "test_2",
      ucLineItem: 3,
    },
    {
      action: "setDeliveryOption",
      type: "store",
      description: "Store delivery",
      reference: "locationCollectionDelivery",
    },
  ],
};

const orderTest13Response = {
  posInstructions: [
    {
      action: "setItem",
      itemId: "1",
      quantity: 2,
      ucOrder: "test_4",
      ucLineItem: 1,
    },
    {
      action: "setDeliveryOption",
      type: "address",
      description: "Address delivery",
      reference: "addressDelivery",
    },
  ],
};

const orderTest14Response = {
  posInstructions: [
    {
      action: "setItem",
      itemId: "1",
      quantity: 2,
      ucOrder: "test_4",
      ucLineItem: 1,
    },
    {
      action: "setDeliveryOption",
      type: "address",
      description: "Address delivery",
      reference: "addressDelivery",
    },
    {
      action: "setItem",
      itemId: "2",
      quantity: 2,
      price: 1500,
      ucOrder: "test_4",
      ucLineItem: 1,
    },
    {
      action: "setDeliveryOption",
      type: "address",
      description: "Address delivery",
      reference: "addressDelivery",
    },
  ],
};

// NEW responses

const orderTest16Response = {
  posInstructions: [
    {
      action: "setItem",
      itemId: "1",
      quantity: 2,
      price: 4000,
      ucOrder: "test_1",
      ucLineItem: 1,
    },
    {
      action: "setDeliveryOption",
      type: "store",
      lineNo: 1,
      description: "Store delivery",
      reference: "locationCollectionDelivery",
    },
    {
      action: "setItem",
      itemId: "2",
      quantity: 1,
      price: 5000,
      ucOrder: "test_1",
      ucLineItem: 2,
    },
    {
      action: "setDeliveryOption",
      type: "store",
      lineNo: 2,
      description: "Store delivery",
      reference: "locationCollectionDelivery",
    },
    {
      action: "setItem",
      itemId: "3",
      quantity: 1,
      price: 2000,
      ucOrder: "test_1",
      ucLineItem: 3,
    },
    {
      action: "setDeliveryOption",
      type: "store",
      lineNo: 2,
      description: "Store delivery",
      reference: "locationCollectionDelivery",
    },
    {
      action: "addTenderItem",
      tenderId: "CASH",
      tenderAmount: 10000,
      ucTenderType: "PREPAYMENT",
    },
  ],
};
const orderTest17Response =  {
  posInstructions: [
    {
      action: "setItem",
      itemId: "1",
      quantity: 2,
      price: 4000,
      ucOrder: "test_1",
      ucLineItem: 1,
    },
    {
      action: "setDeliveryOption",
      type: "store",
      lineNo: 1,
      description: "Store delivery",
      reference: "locationCollectionDelivery",
    },
    {
      action: "addTenderItem",
      tenderId: "CASH_DK",
      tenderAmount: 10000,
      ucTenderType: "PREPAYMENT",
    },
  ],
};

const orderTest1ResponseNew = {
  posInstructions: [
    {
      action: "setItem",
      itemId: "1001000",
      quantity: 2,
      price: 4000,
      ucOrder: "test_1",
      ucLineItem: 1,
    },
    {
      action: "setDeliveryOption",
      type: "address",
      description: "Address delivery",
      reference: "addressDelivery",
    },
    {
      action: "setItem",
      itemId: "1000100",
      quantity: 1,
      price: 5000,
      ucOrder: "test_1",
      ucLineItem: 2,
      fulfilledQuantity: 1,
    },
    {
      action: "setDeliveryOption",
      type: "address",
      description: "Address delivery",
      reference: "addressDelivery",
    },
    {
      action: "setItem",
      itemId: "1001001",
      quantity: 1,
      price: 2000,
      ucOrder: "test_1",
      ucLineItem: 3,
    },
    {
      action: "setDeliveryOption",
      type: "address",
      description: "Address delivery",
      reference: "addressDelivery",
    },
    {
      action: "addTenderItem",
      tenderId: "CASH_DK",
      tenderAmount: 5000,
      ucTenderType: "PREPAYMENT",
    },
  ],
};


const orderTest2ResponseNew = {
  posInstructions: [
    {
      action: "setItem",
      itemId: "1001010",
      quantity: 2,
      price: 2000,
      ucOrder: "test_2",
      ucLineItem: 4,
    },
    {
      action: "setDeliveryOption",
      type: "store",
      lineNo: 3,
      description: "Store delivery",
      reference: "locationCollectionDelivery",
    },
    {
      action: "setItem",
      itemId: "1001000",
      quantity: 2,
      price: 4000,
      ucOrder: "test_2",
      ucLineItem: 1,
    },
    {
      action: "setDeliveryOption",
      type: "address",
      description: "Address delivery",
      reference: "addressDelivery",
    },
    {
      action: "setItem",
      itemId: "1000100",
      quantity: 3,
      price: 2000,
      ucOrder: "test_2",
      ucLineItem: 2,
    },
    {
      action: "setDeliveryOption",
      type: "address",
      description: "Address delivery",
      reference: "addressDelivery",
    },
    {
      action: "setItem",
      itemId: "1001001",
      quantity: 1,
      price: 1000,
      ucOrder: "test_2",
      ucLineItem: 3,
    },
    {
      action: "setDeliveryOption",
      type: "address",
      description: "Address delivery",
      reference: "addressDelivery",
    },
    {
      action: "addTenderItem",
      tenderId: "CASH_DK",
      tenderAmount: 1500,
      ucTenderType: "PREPAYMENT",
    },
  ],
};

const orderTest3ResponseNew = {
  posInstructions: [
    {
      action: "setItem",
      itemId: "1001000",
      quantity: 2,
      price: 4000,
      ucOrder: "test_3",
      ucLineItem: 1,
    },
    {
      action: "setDeliveryOption",
      type: "address",
      description: "Address delivery",
      reference: "addressDelivery",
    },
    {
      action: "setItem",
      itemId: "1000100",
      quantity: 3,
      price: 2000,
      ucOrder: "test_3",
      ucLineItem: 2,
    },
    {
      action: "setDeliveryOption",
      type: "address",
      description: "Address delivery",
      reference: "addressDelivery",
    },
    {
      action: "setItem",
      itemId: "1001001",
      quantity: 1,
      price: 1000,
      ucOrder: "test_3",
      ucLineItem: 3,
    },
    {
      action: "setDeliveryOption",
      type: "address",
      description: "Address delivery",
      reference: "addressDelivery",
    },
  ],
};

const orderTest4ResponseNew = {
  posInstructions: [
    {
      action: "setItem",
      itemId: "1001000",
      quantity: 2,
      price: 15000,
      ucOrder: "test_4",
      ucLineItem: 1,
    },
    {
      action: "setDeliveryOption",
      type: "address",
      description: "Address delivery",
      reference: "addressDelivery",
    },
    {
      action: "addTenderItem",
      tenderId: "CASH_DK",
      tenderAmount: 1500,
      ucTenderType: "PREPAYMENT",
    },
  ],
};

const orderTest5ResponseNew = {
  posInstructions: [
    {
      action: "setItem",
      itemId: "1001000",
      quantity: 2,
      price: 15000,
      ucOrder: "test_5",
      ucLineItem: 1,
      fulfilledQuantity: 1,
    },
    {
      action: "setDeliveryOption",
      type: "address",
      description: "Address delivery",
      reference: "addressDelivery",
    },
  ],
};

const orderTest6ResponseNew = {
  posInstructions: [
    {
      action: "setItem",
      itemId: "1001000",
      quantity: 2,
      price: 1500,
      ucOrder: "test_6",
      ucLineItem: 1,
    },
    {
      action: "setDeliveryOption",
      type: "address",
      description: "Address delivery",
      reference: "addressDelivery",
    },
  ],
};

const orderTest7ResponseNew = {
  posInstructions: [
    {
      action: "setItem",
      itemId: "1001000",
      quantity: 2,
      price: 4000,
      ucOrder: "test_1",
      ucLineItem: 1,
    },
    {
      action: "setDeliveryOption",
      type: "address",
      description: "Address delivery",
      reference: "addressDelivery",
    },
    {
      action: "setItem",
      itemId: "1000100",
      quantity: 1,
      price: 5000,
      ucOrder: "test_1",
      ucLineItem: 2,
      fulfilledQuantity: 1,
    },
    {
      action: "setDeliveryOption",
      type: "address",
      description: "Address delivery",
      reference: "addressDelivery",
    },
    {
      action: "setItem",
      itemId: "1001001",
      quantity: 1,
      price: 2000,
      ucOrder: "test_1",
      ucLineItem: 3,
    },
    {
      action: "setDeliveryOption",
      type: "address",
      description: "Address delivery",
      reference: "addressDelivery",
    },
  ],
};


const orderTest8ResponseNew = {
  posInstructions: [
    {
      action: "setItem",
      itemId: "1001000",
      quantity: 2,
      price: 4000,
      ucOrder: "test_1",
      ucLineItem: 1,
    },
    {
      action: "setDeliveryOption",
      type: "address",
      description: "Address delivery",
      reference: "addressDelivery",
    },
    {
      action: "setItem",
      itemId: "1000100",
      quantity: 1,
      price: 5000,
      ucOrder: "test_1",
      ucLineItem: 2,
      fulfilledQuantity: 1,
    },
    {
      action: "setDeliveryOption",
      type: "address",
      description: "Address delivery",
      reference: "addressDelivery",
    },
    {
      action: "setItem",
      itemId: "1001001",
      quantity: 1,
      price: 2000,
      ucOrder: "test_1",
      ucLineItem: 3,
    },
    {
      action: "setDeliveryOption",
      type: "address",
      description: "Address delivery",
      reference: "addressDelivery",
    },
    {
      action: "addTenderItem",
      tenderId: "CASH_DK",
      tenderAmount: 15000,
      ucTenderType: "PREPAYMENT",
    },
  ],
};

const orderTest9ResponseNew = {
  posInstructions: [
    {
      action: "setItem",
      itemId: "1001000",
      quantity: 2,
      price: 4000,
      ucOrder: "test_2",
      ucLineItem: 1,
    },
    {
      action: "setDeliveryOption",
      type: "address",
      description: "Address delivery",
      reference: "addressDelivery",
    },
    {
      action: "setItem",
      itemId: "1000100",
      quantity: 3,
      price: 2000,
      ucOrder: "test_2",
      ucLineItem: 2,
    },
    {
      action: "setDeliveryOption",
      type: "address",
      description: "Address delivery",
      reference: "addressDelivery",
    },
    {
      action: "setItem",
      itemId: "1001001",
      quantity: 1,
      price: 1000,
      ucOrder: "test_2",
      ucLineItem: 3,
    },
    {
      action: "setDeliveryOption",
      type: "address",
      description: "Address delivery",
      reference: "addressDelivery",
    },
    {
      action: "addTenderItem",
      tenderId: "CASH_DK",
      tenderAmount: 5000,
      ucTenderType: "PREPAYMENT",
    },
  ],
};

const orderTest10ResponseNew = {
  posInstructions: [
    {
      action: "setItem",
      itemId: "1001000",
      quantity: 2,
      price: 4000,
      ucOrder: "test_1",
      ucLineItem: 1,
    },
    {
      action: "setDeliveryOption",
      type: "store",
      description: "Store delivery",
      reference: "locationCollectionDelivery",
    },
    {
      action: "setItem",
      itemId: "1000100",
      quantity: 1,
      price: 5000,
      ucOrder: "test_1",
      ucLineItem: 2,
      fulfilledQuantity: 1,
    },
    {
      action: "setDeliveryOption",
      type: "store",
      description: "Store delivery",
      reference: "locationCollectionDelivery",
    },
    {
      action: "setItem",
      itemId: "1001001",
      quantity: 1,
      price: 2000,
      ucOrder: "test_1",
      ucLineItem: 3,
    },
    {
      action: "setDeliveryOption",
      type: "store",
      description: "Store delivery",
      reference: "locationCollectionDelivery",
    },
    {
      action: "addTenderItem",
      tenderId: "CASH_DK",
      tenderAmount: 5000,
      ucTenderType: "PREPAYMENT",
    },
  ],
};

const orderTest11ResponseNew = {
  posInstructions: [
    {
      action: "setItem",
      itemId: "1001010",
      quantity: 9,
      price: 2000,
      ucOrder: "test_2",
      ucLineItem: 4,
    },
    {
      action: "setDeliveryOption",
      type: "store",
      description: "Store delivery",
      reference: "locationCollectionDelivery",
    },
    {
      action: "setItem",
      itemId: "1001000",
      quantity: 5,
      price: 4000,
      ucOrder: "test_2",
      ucLineItem: 1,
    },
    {
      action: "setDeliveryOption",
      type: "address",
      description: "Address delivery",
      reference: "addressDelivery",
    },
    {
      action: "setItem",
      itemId: "1000100",
      quantity: 11,
      price: 2000,
      ucOrder: "test_2",
      ucLineItem: 2,
    },
    {
      action: "setDeliveryOption",
      type: "address",
      description: "Address delivery",
      reference: "addressDelivery",
    },
    {
      action: "setItem",
      itemId: "1001001",
      quantity: 1,
      price: 1000,
      ucOrder: "test_2",
      ucLineItem: 3,
    },
    {
      action: "setDeliveryOption",
      type: "store",
      description: "Store delivery",
      reference: "locationCollectionDelivery",
    },
    {
      action: "addTenderItem",
      tenderId: "CASH_DK",
      tenderAmount: 6000,
      ucTenderType: "PREPAYMENT",
    },
  ],
};

const orderTest12ResponseNew = {
  posInstructions: [
    {
      action: "setItem",
      itemId: "1001010",
      quantity: 2,
      price: 2000,
      ucOrder: "test_2",
      ucLineItem: 4,
    },
    {
      action: "setDeliveryOption",
      type: "store",
      description: "Store delivery",
      reference: "locationCollectionDelivery",
    },
    {
      action: "setItem",
      itemId: "1001000",
      quantity: 2,
      price: 4000,
      ucOrder: "test_2",
      ucLineItem: 1,
    },
    {
      action: "setDeliveryOption",
      type: "address",
      description: "Address delivery",
      reference: "addressDelivery",
    },
    {
      action: "setItem",
      itemId: "1000100",
      quantity: 3,
      price: 2000,
      ucOrder: "test_2",
      ucLineItem: 2,
    },
    {
      action: "setDeliveryOption",
      type: "address",
      description: "Address delivery",
      reference: "addressDelivery",
    },
    {
      action: "setItem",
      itemId: "1001001",
      quantity: 1,
      price: 1000,
      ucOrder: "test_2",
      ucLineItem: 3,
    },
    {
      action: "setDeliveryOption",
      type: "store",
      description: "Store delivery",
      reference: "locationCollectionDelivery",
    },
  ],
};

const orderTest13ResponseNew = {
  posInstructions: [
    {
      action: "setItem",
      itemId: "1001000",
      quantity: 2,
      ucOrder: "test_4",
      ucLineItem: 1,
    },
    {
      action: "setDeliveryOption",
      type: "address",
      description: "Address delivery",
      reference: "addressDelivery",
    },
  ],
};

const orderTest14ResponseNew = {
  posInstructions: [
    {
      action: "setItem",
      itemId: "1001000",
      quantity: 2,
      ucOrder: "test_4",
      ucLineItem: 1,
    },
    {
      action: "setDeliveryOption",
      type: "address",
      description: "Address delivery",
      reference: "addressDelivery",
    },
    {
      action: "setItem",
      itemId: "1000100",
      quantity: 2,
      price: 1500,
      ucOrder: "test_4",
      ucLineItem: 1,
    },
    {
      action: "setDeliveryOption",
      type: "address",
      description: "Address delivery",
      reference: "addressDelivery",
    },
  ],
};

// NEW responses end

const orderTest15Response = {
  posInstructions: [
    {
      action: "setItem",
      action: "setItem",
      operation: "CREATE",
      itemId: "1001000",
      quantity: 1,
      price: 22900.00,
      ucOrder: "0a075970-edc9-43df-93f4-46d51acaba53",
      ucLineItem: "1",
      data: {
        ucLineItem: "1",
        "ucLine-import-created-by-store": "D001",
        ucOrder: "0a075970-edc9-43df-93f4-46d51acaba53",
        "ucLine-import-type": "CUSTOMER_ORDER",
        "ucLineItem-import": "1",
        "ucLine-import-request-type": "EDIT",
        ucSalesOrder: "4300261154"
      },
      forcePrice: false
    }
    , {
      "action": "setDeliveryOption",
      "operation": "CREATE",
      "type": "store",
      "reference": "locationCollectionDelivery",
      "promise": ""
    },

    // ,{
    //   action: "setDeliveryOption",
    //   type: "store",
    //   description: "Store delivery",
    //   reference: "locationCollectionDelivery",
    // },
  ],
};


const orderTest2Response = {
  posInstructions: [
    {
      action: "setItem",
      itemId: "10",
      quantity: 2,
      price: 2000,
      ucOrder: "test_2",
      ucLineItem: 4,
    },
    {
      action: "setDeliveryOption",
      type: "store",
      lineNo: 3,
      description: "Store delivery",
      reference: "locationCollectionDelivery",
    },
    {
      action: "setItem",
      itemId: "1",
      quantity: 2,
      price: 4000,
      ucOrder: "test_2",
      ucLineItem: 1,
    },
    {
      action: "setDeliveryOption",
      type: "address",
      description: "Address delivery",
      reference: "addressDelivery",
    },
    {
      action: "setItem",
      itemId: "2",
      quantity: 3,
      price: 2000,
      ucOrder: "test_2",
      ucLineItem: 2,
    },
    {
      action: "setDeliveryOption",
      type: "address",
      description: "Address delivery",
      reference: "addressDelivery",
    },
    {
      action: "setItem",
      itemId: "3",
      quantity: 1,
      price: 1000,
      ucOrder: "test_2",
      ucLineItem: 3,
    },
    {
      action: "setDeliveryOption",
      type: "address",
      description: "Address delivery",
      reference: "addressDelivery",
    },
    {
      action: "addTenderItem",
      tenderId: "CASH_DK",
      tenderAmount: 1500,
      ucTenderType: "PREPAYMENT",
    },
  ],
};

const orderTest3Response = {
  posInstructions: [
    {
      action: "setItem",
      itemId: "1",
      quantity: 2,
      price: 4000,
      ucOrder: "test_3",
      ucLineItem: 1,
    },
    {
      action: "setDeliveryOption",
      type: "address",
      description: "Address delivery",
      reference: "addressDelivery",
    },
    {
      action: "setItem",
      itemId: "2",
      quantity: 3,
      price: 2000,
      ucOrder: "test_3",
      ucLineItem: 2,
    },
    {
      action: "setDeliveryOption",
      type: "address",
      description: "Address delivery",
      reference: "addressDelivery",
    },
    {
      action: "setItem",
      itemId: "3",
      quantity: 1,
      price: 1000,
      ucOrder: "test_3",
      ucLineItem: 3,
    },
    {
      action: "setDeliveryOption",
      type: "address",
      description: "Address delivery",
      reference: "addressDelivery",
    },
  ],
};

const orderTest4Response = {
  posInstructions: [
    {
      action: "setItem",
      itemId: "1",
      quantity: 2,
      price: 15000,
      ucOrder: "test_4",
      ucLineItem: 1,
    },
    {
      action: "setDeliveryOption",
      type: "address",
      description: "Address delivery",
      reference: "addressDelivery",
    },
    {
      action: "addTenderItem",
      tenderId: "CASH_DK",
      tenderAmount: 1500,
      ucTenderType: "PREPAYMENT",
    },
  ],
};

const orderTest5Response = {
  posInstructions: [
    {
      action: "setItem",
      itemId: "1",
      quantity: 2,
      price: 15000,
      ucOrder: "test_5",
      ucLineItem: 1,
      fulfilledQuantity: 1,
    },
    {
      action: "setDeliveryOption",
      type: "address",
      description: "Address delivery",
      reference: "addressDelivery",
    },
  ],
};

const orderTest6Response = {
  posInstructions: [
    {
      action: "setItem",
      itemId: "1",
      quantity: 2,
      price: 1500,
      ucOrder: "test_6",
      ucLineItem: 1,
    },
    {
      action: "setDeliveryOption",
      type: "address",
      description: "Address delivery",
      reference: "addressDelivery",
    },
  ],
};

const orderTest7Response = {
  posInstructions: [
    {
      action: "setItem",
      itemId: "1",
      quantity: 2,
      price: 4000,
      ucOrder: "test_1",
      ucLineItem: 1,
    },
    {
      action: "setDeliveryOption",
      type: "address",
      description: "Address delivery",
      reference: "addressDelivery",
    },
    {
      action: "setItem",
      itemId: "2",
      quantity: 1,
      price: 5000,
      ucOrder: "test_1",
      ucLineItem: 2,
      fulfilledQuantity: 1,
    },
    {
      action: "setDeliveryOption",
      type: "address",
      description: "Address delivery",
      reference: "addressDelivery",
    },
    {
      action: "setItem",
      itemId: "3",
      quantity: 1,
      price: 2000,
      ucOrder: "test_1",
      ucLineItem: 3,
    },
    {
      action: "setDeliveryOption",
      type: "address",
      description: "Address delivery",
      reference: "addressDelivery",
    },
  ],
};

const completeOrderResponse = {
  posInstructions: [
    ...addItemResponse.posInstructions,
    ...setTxTextResponse.posInstructions,
    // set item
    {
      action: "setItemData",
      enactorRef: "1",
      data: {
        UC_STATUS: "COMPLETED",
      },
    },
  ],
};

const UC75 = {
  posInstructions: [
    ...addItemResponse.posInstructions,
    ...setCustomerResponse.posInstructions,
    // set item
    {
      action: "addTransactionDiscount",
      reasonId: "TD-UK2",
    },
  ],
};

const UC75_A = {
  posInstructions: [
    ...addItemResponse.posInstructions,
    ...setCustomerResponse.posInstructions,
    // set item
    {
      action: "addTransactionDiscount",
      reasonId: "TD-UK_UC75",
      discountPercentage: 0.1,
    },
  ],
};

const UC75_B = {
  posInstructions: [
    ...addItemResponse.posInstructions,
    ...setCustomerResponse.posInstructions,
    // set item
    {
      action: "addTransactionDiscount",
      reasonId: "TD-UK_UC75_AMOUNT",
      discountValue: "500",
    },
  ],
};

const UC76 = {
  posInstructions: [
    ...addItemResponse.posInstructions,
    ...setCustomerResponse.posInstructions,
    // set item
    {
      action: "addItemDiscount",
      reasonId: "ID-UK2",
      lineNumber: 2,
    },
  ],
};

const UC76_A = {
  posInstructions: [
    ...addItemResponse.posInstructions,
    ...setCustomerResponse.posInstructions,
    // set item
    {
      action: "addItemDiscount",
      reasonId: "ID-UKP",
      lineNumber: 2,
      discountValue: 1000,
    },
  ],
};

const UC76_B = {
  posInstructions: [
    ...addItemResponse.posInstructions,
    ...setCustomerResponse.posInstructions,
    // set item
    {
      action: "addItemDiscount",
      reasonId: "ID-UKPERCENT",
      lineNumber: 2,
      discountPercentage: 0.1,
    },
  ],
};

const UC67_A = {
  posInstructions: [
    ...addItemResponse.posInstructions,
    ...setCustomerResponse.posInstructions,
    // set item
    {
      action: "setOrderReference",
      orderReference: Date.now().toString(),
    },
  ],
};

const JYSK_1993 = {
  posInstructions: [
    {
      action: "updateCollectionLocation",
      locationId: "0003",
    },
  ],
};

// Party type
const B2B = {
  posInstructions: [
    ...addItemResponse.posInstructions,
    ...setCustomerResponse.posInstructions,
    // set item
    {
      action: "setPartyType",
      partyType: "B2B",
    },
  ],
};

const B2C = {
  posInstructions: [
    ...addItemResponse.posInstructions,
    ...setCustomerResponse.posInstructions,
    // set item
    {
      action: "setPartyType",
      partyType: "B2C",
    },
  ],
};

const B2E = {
  posInstructions: [
    ...addItemResponse.posInstructions,
    ...setCustomerResponse.posInstructions,
    // set item
    {
      action: "setPartyType",
      partyType: "B2E",
    },
  ],
};

//  Dynamic Promotions
const JYSK_1977 = {
  posInstructions: [
    {
      action: "setItem",
      itemId: "1001000",
      quantity: 2,
      ucOrder: "12345",
      ucLineItem: 1,
      data: {
        company: "JYSK",
        location: "Aarhus",
      },
    },
    {
      action: "setDeliveryOption",
      type: "address",
      description: "Address delivery",
      reference: "addressDelivery",
    },
    ...setCustomerResponse.posInstructions,
    {
      action: "addDynamicPromotion",
      promotion: {
        promotionId: "DYNAMIC_1",
        groupKey: {
          id: "All",
          groupTypeId: "region",
          groupHierarchyId: "All",
        },
        description: "£3 off when spend £50 - DynamicPromotion",
        priority: 1,
        distributeSavingsOverAllItems: false,
        operationWithPreviousPromotions: "GROSS",
        operationWithDiscounts: "APPLIES_AFTER_ON_GROSS",
        raiseNearMissAlert: false,
        maximumTriggersPerTransaction: 0,
        transactionReward: {
          rewardType: "AMOUNT_DISCOUNT",
          rewardValue: 300.0,
          thresholdType: "VALUE",
          thresholdValue: 5000.0,
        },
        preventNegativeSavings: true,
        promotionBasketDetails: {
          showOnPrintedReceipt: true,
          showOnOperatorView: true,
        },
      },
    },
  ],
};

const JYSK_1977_REMOVE = {
  posInstructions: [
    {
      action: "removeDynamicPromotion",
      promotionId: "DYNAMIC_1",
    },
  ],
};

const JYSK_1977_CLEAR = {
  posInstructions: [
    {
      action: "clearDynamicPromotions",
    },
  ],
};

const UC87 = {
  posInstructions: [
    ...addItemResponse.posInstructions,
    ...setCustomerResponse.posInstructions,
    // set item
    {
      action: "setDeliveryOption",
      type: "address",
      lineNo: 2,
      description: "Address delivery",
      reference: "addressDelivery",
    },
    {
      action: "setDeliveryOption",
      type: "store",
      lineNo: 3,
      description: "Store delivery",
      reference: "locationCollectionDelivery",
    },
    {
      action: "setOrderDeposit",
      reasonId: "COD002",
      depositValue: 1500,
      forceDepositValue: true,
      deliveryReference: "addressDelivery",
    },
    {
      action: "setOrderDeposit",
      reasonId: "COD002",
      depositValue: 2000,
      forceDepositValue: true,
      deliveryReference: "locationCollectionDelivery",
    },
  ],
};

const JYSK_2204 = {
  posInstructions: [
    {
      action: "setItem",
      itemId: "1001000",
      quantity: 2,
      ucOrder: "12345",
      ucLineItem: 1,
      data: {
        company: "JYSK",
        location: "Aarhus",
      },
    },
    {
      action: "setDeliveryOption",
      type: "address",
      reference: "addressDelivery",
    },
  ],
};

const JYSK_2196 = {
  posInstructions: [
    {
      action: "setItem",
      itemId: "1001000",
      quantity: 2,
      ucOrder: "12345",
      ucLineItem: 1,
      data: {
        company: "JYSK",
        location: "Aarhus",
      },
    },
    {
      action: "setDeliveryOption",
      type: "address",
      reference: "addressDelivery",
    },
    {
      action: "setOrderDeposit",
      reasonId: "COD002",
      depositValue: 2000,
      forceDepositValue: true,
      deliveryReference: "addressDelivery",
      operation: "REPLACE",
    },
    {
      action: "setOrderDeposit",
      reasonId: "COD002",
      depositValue: 4000,
      forceDepositValue: true,
      deliveryReference: "addressDelivery",
      operation: "REPLACE",
    },
  ],
};

const JYSK_2348 = {
  posInstructions: [
    {
      action: "setItem",
      itemId: "1001000",
      quantity: 2,
      ucOrder: "12345",
      ucLineItem: 1,
      data: {
        company: "JYSK",
        location: "Aarhus",
      },
    },
    {
      action: "setDeliveryOption",
      type: "address",
      reference: "addressDelivery",
    },
    {
      action: "setOrderDeposit",
      reasonId: "COD002",
      depositValue: 2000,
      forceDepositValue: true,
      deliveryReference: "addressDelivery",
      operation: "UPDATE",
    },
    {
      action: "setOrderDeposit",
      reasonId: "COD002",
      depositValue: 4000,
      forceDepositValue: true,
      deliveryReference: "addressDelivery",
      operation: "UPDATE",
    },
  ],
};

const JYSK_2067 = {
  posInstructions: [
    {
      action: "setItem",
      itemId: "1",
      quantity: 1,
      ucOrder: "12345",
      ucLineItem: "1",
      data: {
        company: "JYSK",
        location: "Aarhus",
      },
    },
    {
      action: "setDeliveryOption",
      type: "address",
      description: "Address delivery",
      reference: "addressDelivery",
    },
    {
      action: "setItem",
      itemId: "2",
      quantity: 1,
      ucOrder: "12345",
      ucLineItem: "2",
      data: {
        company: "JYSK",
        location: "Aarhus",
      },
    },
    {
      action: "setDeliveryOption",
      type: "address",
      description: "Address delivery",
      reference: "addressDelivery",
    },
    {
      action: "addTenderItem",
      tenderId: "CASH_DK",
      tenderAmount: 123.0,
      ucTenderType: "PREPAYMENT",
    },
  ],
};

const JYSK_2444 = {
  posInstructions: [
    // set item
    {
      action: "setItem",
      itemId: "DF517XM-4",
      quantity: 1,
      price: 2000,
      ucOrder: "12345",
      ucLineItem: 1,
      data: {
        company: "JYSK",
        location: "Aarhus",
      },
    },
    {
      action: "setDeliveryOption",
      type: "address",
      description: "Address delivery",
      reference: "addressDelivery",
    },
    {
      action: "setOrderDeposit",
      reasonId: "COD002",
      depositValue: 2000,
      forceDepositValue: true,
      deliveryReference: "addressDelivery",
    },
  ],
};

const JYSK_2444_A = {
  posInstructions: [
    {
      action: "setItem",
      itemId: "DF517XM-4",
      quantity: 1,
      price: 2000,
      ucOrder: "12345",
      ucLineItem: 1,
      data: {
        company: "JYSK",
        location: "Aarhus",
      },
    },
    {
      action: "setItem",
      itemId: "DF517XM-4",
      quantity: 1,
      price: 4000,
      forcePrice: true,
      ucOrder: "12345",
      ucLineItem: 1,
      data: {
        company: "JYSK",
        location: "Aarhus",
      },
    },
    {
      action: "setDeliveryOption",
      type: "address",
      description: "Address delivery",
      reference: "addressDelivery",
    },
    {
      action: "setOrderDeposit",
      reasonId: "COD002",
      depositValue: 2000,
      forceDepositValue: true,
      deliveryReference: "addressDelivery",
    },
  ],
};

const JYSK_2444_B = {
  posInstructions: [
    {
      action: "setItem",
      itemId: "1001000",
      quantity: 1,
      price: 4000,
      forcePrice: true,
      ucOrder: "12345",
      ucLineItem: 1,
      data: {
        company: "JYSK",
        location: "Aarhus",
      },
    },
    {
      action: "setDeliveryOption",
      type: "address",
      description: "Address delivery",
      reference: "addressDelivery",
    },
    {
      action: "setOrderDeposit",
      reasonId: "COD002",
      depositValue: 2000,
      forceDepositValue: true,
      deliveryReference: "addressDelivery",
    },
  ],
};

const JYSK_2439 = {
  posInstructions: [
    // set item
    {
      action: "setItem",
      itemId: "1",
      quantity: 1,
      ucOrder: "12345",
      ucLineItem: 1,
      data: {
        company: "JYSK",
        location: "Aarhus",
      },
    },
    {
      action: "setDeliveryOption",
      type: "address",
      description: "Address delivery",
      reference: "addressDelivery",
    },
    {
      action: "setItem",
      itemId: "2",
      quantity: 1,
      ucOrder: "12345",
      ucLineItem: 1,
      data: {
        company: "JYSK",
        location: "Aarhus",
      },
    },
    {
      action: "setDeliveryOption",
      type: "address",
      description: "Address delivery",
      reference: "addressDelivery",
    },
    {
      action: "setOrderDeposit",
      reasonId: "COD002",
      depositValue: 2000,
      forceDepositValue: true,
      deliveryReference: "addressDelivery",
    },
  ],
};

const JYSK_2383 = {
  posInstructions: [
    {
      action: "setItem",
      operation: "CREATE",
      targetLineNumber: 0,
      itemId: "2",
      quantity: 1,
      price: 2500,
      maxUnitPrice: 2500,
      ucOrder: "0116d869-61eb-4cc5-b2e7-a948756e6806",
      ucLineItem: "2",
      data: {
        "ucLineItem-create": "2",
        ucLineItem: "2",
        "ucLine-create-type": "DROP_POINT_DELIVERY",
        ucOrder: "0116d869-61eb-4cc5-b2e7-a948756e6806",
        ucPrice: "2500",
      },
      enactorRef: "0",
    },
    {
      action: "setDeliveryOption",
      operation: "CREATE",
      deliveryReference: "addressDelivery",
      type: "address",
      reference: "addressDelivery",
    },
    {
      action: "setDeliveryAddress",
      operation: "CREATE",
      postCode: "8000",
      street1: "Nørregade 49",
      town: "Aarhus C",
      organisation: "Vingummi Nørregade",
    },
    {
      action: "setOrderDeposit",
      operation: "REPLACE",
      deliveryReference: "addressDelivery",
      reasonId: "PRE_PAYMENT",
      depositValue: 5500,
      forceDepositValue: true,
    },
    {
      action: "setTxText",
      operation: "CREATE",
      position: "com.jysk.pos.uc.current-step",
      value: "2",
      displayOnBasket: false,
      displayOnReceipt: false,
    },
  ],
};

const JYSK_2377 = {
  posInstructions: [
    {
      action: "setItem",
      itemId: "1001000",
      quantity: 2,
      ucOrder: "12345",
      ucLineItem: 1,
      data: {
        company: "JYSK",
        location: "Aarhus",
        disableModifyQuantity: "true",
      },
    },
    {
      action: "setItem",
      itemId: "1001000",
      quantity: 3,
      ucOrder: "12345",
      ucLineItem: 2,
      data: {
        company: "JYSK",
        location: "Aarhus",
      },
    },
    {
      action: "setItem",
      itemId: "1001000",
      quantity: 4,
      ucOrder: "12345",
      ucLineItem: 3,
      data: {
        company: "JYSK",
        location: "Aarhus",
        disableModifyQuantity: "true",
      },
    },
    {
      action: "setDeliveryOption",
      type: "address",
      reference: "addressDelivery",
    },
    {
      action: "setOrderDeposit",
      reasonId: "COD002",
      depositValue: 2000,
      forceDepositValue: true,
      deliveryReference: "addressDelivery",
      operation: "UPDATE",
    },
    {
      action: "setOrderDeposit",
      reasonId: "COD002",
      depositValue: 3500,
      forceDepositValue: true,
      deliveryReference: "addressDelivery",
      operation: "UPDATE",
    },
  ],
};

const UC_95 = {
  posInstructions: [
    {
      action: "setItem",
      itemId: "1",
      quantity: 1,
      ucOrder: "12345",
      ucLineItem: "1",
      data: {
        company: "JYSK",
        location: "Aarhus"
      }
    },
    {
      action: "setDeliveryOption",
      type: "address",
      reference: "addressDelivery"
    },
    {
      action: "setItem",
      itemId: "2",
      quantity: 1,
      ucOrder: "12345",
      ucLineItem: "2",
      data: {
        company: "JYSK",
        location: "Aarhus"
      }
    },
    {
      action: "setDeliveryOption",
      type: "address",
      reference: "addressDelivery"
    },
    {
      action: "addTenderItem",
      tenderId: "CASH_UK",
      tenderAmount: 123.0,
      ucTenderType: "PREPAYMENT"
    }
  ]
};

const JYSKData5 =
{
  "posInstructions" : [ {
    "action" : "setTxText",
    "operation" : "CREATE",
    "position" : "com.jysk.pos.uc.working-copy-business-key",
    "value" : "7de68177-b115-47a0-9f77-516c20d4b179"
  }, {
    "action" : "setTxText",
    "operation" : "CREATE",
    "position" : "com.jysk.pos.uc.sync-order.id",
    "value" : "7de68177-b115-47a0-9f77-516c20d4b179"
  }, {
    "action" : "setItem",
    "action" : "setItem",
    "operation" : "CREATE",
    "itemId" : "2323200",
    "quantity" : 1,
    "price" : 7800.00,
    "ucOrder" : "7de68177-b115-47a0-9f77-516c20d4b179",
    "ucLineItem" : "1",
    "data" : {
      "ucImportedOrder" : "4300337241",
      "ucLineItem" : "1",
      "ucLine-import-created-by-store" : "D001",
      "ucOrder" : "7de68177-b115-47a0-9f77-516c20d4b179",
      "ucLine-import-type" : "CUSTOMER_ORDER",
      "ucLine-import-delivery-group-id" : "1",
      "ucLineItem-import" : "1",
      "ucLine-import-request-type" : "EDIT"
    },
    "forcePrice" : false
  }, {
    "action" : "setDeliveryOption",
    "operation" : "CREATE",
    "type" : "store",
    "reference" : "locationCollectionDelivery",
    "promise" : ""
  }, {
    "action" : "setItem",
    "action" : "setItem",
    "operation" : "CREATE",
    "itemId" : "2323200",
    "quantity" : 1,
    "price" : 7800.00,
    "ucOrder" : "7de68177-b115-47a0-9f77-516c20d4b179",
    "ucLineItem" : "2",
    "data" : {
      "ucImportedOrder" : "4300337241",
      "ucLineItem" : "2",
      "ucLine-import-created-by-store" : "D001",
      "ucOrder" : "7de68177-b115-47a0-9f77-516c20d4b179",
      "ucLine-import-type" : "CUSTOMER_ORDER",
      "ucLine-import-delivery-group-id" : "1",
      "ucLineItem-import" : "2",
      "ucLine-import-request-type" : "EDIT"
    },
    "forcePrice" : false
  }, {
    "action" : "setDeliveryOption",
    "operation" : "CREATE",
    "type" : "store",
    "reference" : "locationCollectionDelivery",
    "promise" : ""
  }, {
    "action" : "addTenderItem",
    "operation" : "CREATE",
    "tenderId" : "PRE_PAYMENT_DK",
    "tenderAmount" : 9000
  }, {
    "action" : "setTxText",
    "operation" : "CREATE",
    "position" : "com.jysk.pos.uc.import-order.id",
    "value" : "5760fd2a-02c4-40d6-b54a-9ffa92ba5154"
  }, {
    "action" : "setTxText",
    "operation" : "CREATE",
    "position" : "com.jysk.pos.uc.sales-order-number",
    "value" : "4300337241"
  }, {
    "action" : "setTxText",
    "operation" : "CREATE",
    "position" : "com.jysk.pos.uc.customer.type",
    "value" : "B2C"
  }, {
    "action" : "setPartyType",
    "operation" : "CREATE",
    "partyType" : "B2C"
  }, {
    "action" : "setCustomer",
    "action" : "setCustomer",
    "operation" : "CREATE",
    "firstName" : "JYSK-3500-01",
    "lastName" : "JYSK-3500-01",
    "companyName" : " ",
    "customerGroupId" : "",
    "resetCustomerGroups" : true
  } ]
};




const JYSKData6 =
{
  "posInstructions" : [ {
    "action" : "setTxText",
    "operation" : "CREATE",
    "position" : "com.jysk.pos.uc.working-copy-business-key",
    "value" : "7de68177-b115-47a0-9f77-516c20d4b179"
  }, {
    "action" : "setTxText",
    "operation" : "CREATE",
    "position" : "com.jysk.pos.uc.sync-order.id",
    "value" : "7de68177-b115-47a0-9f77-516c20d4b179"
  }, {
    "action" : "setItem",
    "action" : "setItem",
    "operation" : "CREATE",
    "itemId" : "2323200",
    "quantity" : 1,
    "price" : 7800.00,
    "ucOrder" : "7de68177-b115-47a0-9f77-516c20d4b179",
    "ucLineItem" : "1",
    "data" : {
      "ucImportedOrder" : "4300337241",
      "ucLineItem" : "1",
      "ucLine-import-created-by-store" : "D001",
      "ucOrder" : "7de68177-b115-47a0-9f77-516c20d4b179",
      "ucLine-import-type" : "CUSTOMER_ORDER",
      "ucLine-import-delivery-group-id" : "1",
      "ucLineItem-import" : "1",
      "ucLine-import-request-type" : "EDIT"
    },
    "forcePrice" : false
  }, {
    "action" : "setDeliveryOption",
    "operation" : "CREATE",
    "type" : "store",
    "reference" : "locationCollectionDelivery",
    "promise" : ""
  }, {
    "action" : "setItem",
    "action" : "setItem",
    "operation" : "CREATE",
    "itemId" : "2323200",
    "quantity" : 1,
    "price" : 7800.00,
    "ucOrder" : "7de68177-b115-47a0-9f77-516c20d4b179",
    "ucLineItem" : "2",
    "data" : {
      "ucImportedOrder" : "4300337241",
      "ucLineItem" : "2",
      "ucLine-import-created-by-store" : "D001",
      "ucOrder" : "7de68177-b115-47a0-9f77-516c20d4b179",
      "ucLine-import-type" : "CUSTOMER_ORDER",
      "ucLine-import-delivery-group-id" : "1",
      "ucLineItem-import" : "2",
      "ucLine-import-request-type" : "EDIT"
    },
    "forcePrice" : false
  }, {
    "action" : "setDeliveryOption",
    "operation" : "CREATE",
    "type" : "store",
    "reference" : "locationCollectionDelivery",
    "promise" : ""
  }, {
    "action" : "addTenderItem",
    "operation" : "CREATE",
    "tenderId" : "PRE_PAYMENT_DK",
    "tenderAmount" : 30000
  }, {
    "action" : "setTxText",
    "operation" : "CREATE",
    "position" : "com.jysk.pos.uc.import-order.id",
    "value" : "5760fd2a-02c4-40d6-b54a-9ffa92ba5154"
  }, {
    "action" : "setTxText",
    "operation" : "CREATE",
    "position" : "com.jysk.pos.uc.sales-order-number",
    "value" : "4300337241"
  }, {
    "action" : "setTxText",
    "operation" : "CREATE",
    "position" : "com.jysk.pos.uc.customer.type",
    "value" : "B2C"
  }, {
    "action" : "setPartyType",
    "operation" : "CREATE",
    "partyType" : "B2C"
  }, {
    "action" : "setCustomer",
    "action" : "setCustomer",
    "operation" : "CREATE",
    "firstName" : "JYSK-3500-01",
    "lastName" : "JYSK-3500-01",
    "companyName" : " ",
    "customerGroupId" : "",
    "resetCustomerGroups" : true
  } ]
};

const collection1Response = {
  posInstructions: [
    {
      action: "addCollectionHeaderItem",
      customerOrderId: "1",
      isExternalOrder: true,
      data: {
        ucOrder: "12345"
      }
    },
    {
      action: "addCollectionItem",
      orderUnitPrice: 1250,
      orderNetPrice: 1250,
      orderTaxAmount: 250,
      orderNotes: "Test notes",
      collectionQuantity: 1,
      collectionProductId: "1",
      orderLineNumber: 1,
      itemValue: 0,
      depositDetails: {
        "@type": "depositDetails",
        "depositDetail": [
          {
            "@type": "depositDetail",
            "depositAmount": 1250,
            "depositTax": [
              {
                "@type": "taxAmount",
                "taxRateId": "DK_1",
                "taxRateKey": {
                  "taxRateId": "DK_1",
                  "effectiveDate": 1427155200000
                },
                "displayTaxCode": "Liable for Full Tax",
                "taxAmount": 2500000,
                "scale": 4,
                "taxRatePercentage": 0.25
              },

            ]
          }
        ]
      },
      data: {
        ucLineItem: "1"
      }
    },
    {
      action: "addCollectionItem",
      orderUnitPrice: 1250,
      orderNetPrice: 3750,
      orderTaxAmount: 750,
      orderNotes: "Test notes 2",
      collectionQuantity: 3,
      collectionProductId: "1001000",
      orderLineNumber: 2,
      itemValue: 1250,
      depositDetails: {
        "@type": "depositDetails",
        "depositDetail": [
          {
            "@type": "depositDetail",
            "depositAmount": 1250,
            "depositTax": [
              {
                "@type": "taxAmount",
                "taxRateId": "DK_1",
                "taxRateKey": {
                  "taxRateId": "DK_1",
                  "effectiveDate": 1427155200000
                },
                "displayTaxCode": "Liable for Full Tax",
                "taxAmount": 5000000,
                "scale": 4,
                "taxRatePercentage": 0.25
              }
            ]
          }
        ]
      },

      data: {
        ucLineItem: "2"
      }
    }
  ]
};

const collection2Response = {
  posInstructions: [
    {
      action: "addCollectionHeaderItem",
      isExternalOrder: true,
      data: {
        ucOrder: "12346"
      }
    },
    {
      action: "addCollectionItem",
      orderUnitPrice: 1250,
      orderNetPrice: 1250,
      orderTaxAmount: 250,
      orderNotes: "Test notes",
      collectionQuantity: 1,
      collectionProductId: "1",
      itemValue: 0,
      depositDetails: {
        "@type": "depositDetails",
        "depositDetail": [
          {
            "@type": "depositDetail",
            "depositAmount": 1250,
            "depositTax": [
              {
                "@type": "taxAmount",
                "taxRateId": "DK_1",
                "taxRateKey": {
                  "taxRateId": "DK_1",
                  "effectiveDate": 1427155200000
                },
                "displayTaxCode": "Liable for Full Tax",
                "taxAmount": 2500000,
                "scale": 4,
                "taxRatePercentage": 0.25
              },

            ]
          }
        ]
      },
      data: {
        ucLineItem: "1"
      }
    },
    {
      action: "addCollectionItem",
      orderUnitPrice: 1250,
      orderNetPrice: 3750,
      orderTaxAmount: 750,
      orderNotes: "Test notes 2",
      collectionQuantity: 3,
      collectionProductId: "1001000",
      itemValue: 1250,
      depositDetails: {
        "@type": "depositDetails",
        "depositDetail": [
          {
            "@type": "depositDetail",
            "depositAmount": 1250,
            "depositTax": [
              {
                "@type": "taxAmount",
                "taxRateId": "DK_1",
                "taxRateKey": {
                  "taxRateId": "DK_1",
                  "effectiveDate": 1427155200000
                },
                "displayTaxCode": "Liable for Full Tax",
                "taxAmount": 5000000,
                "scale": 4,
                "taxRatePercentage": 0.25
              }
            ]
          }
        ]
      },
      data: {
        ucLineItem: "2"
      }
    }
  ]
};



const collection3Response = {
  posInstructions: [
    {
      action: "addCollectionHeaderItem",
      customerOrderId: "1",
      isExternalOrder: true,
      data: {
        ucOrder: "12345"
      }
    },
    {
      action: "addCollectionItem",
      orderUnitPrice: 10000,
      orderNetPrice: 10000,
      orderTaxAmount: 2000,
      orderNotes: "Test notes",
      collectionQuantity: 1,
      collectionProductId: "1",
      orderLineNumber: 1,
      itemValue: 0,
      depositDetails: {
        "@type": "depositDetails",
        "depositDetail": [
          {
            "@type": "depositDetail",
            "depositAmount": 0,
            "depositTax": [
              {
                "@type": "taxAmount",
                "taxRateId": "DK_1",
                "taxRateKey": {
                  "taxRateId": "DK_1",
                  "effectiveDate": 1427155200000
                },
                "displayTaxCode": "Liable for Full Tax",
                "taxAmount": 0,
                "scale": 4,
                "taxRatePercentage": 0.20
              },

            ]
          }
        ]
      },
      data: {
        ucLineItem: "1"
      }
    },
    {
      action: "addCollectionItem",
      orderUnitPrice: 6000,
      orderNetPrice: 6000,
      orderTaxAmount: 1200,
      orderNotes: "Test notes 2",
      collectionQuantity: 1,
      collectionProductId: "2",
      orderLineNumber: 2,
      itemValue: 4000,
      depositDetails: {
        "@type": "depositDetails",
        "depositDetail": [
          {
            "@type": "depositDetail",
            "depositAmount": 2000,
            "depositTax": [
              {
                "@type": "taxAmount",
                "taxRateId": "DK_1",
                "taxRateKey": {
                  "taxRateId": "DK_1",
                  "effectiveDate": 1427155200000
                },
                "displayTaxCode": "Liable for Full Tax",
                "taxAmount": 4000,
                "scale": 1,
                "taxRatePercentage": 0.2
              }
            ]
          }
        ]
      },

      data: {
        ucLineItem: "2"
      }
    }
  ]
};




const collection4Response = {
  posInstructions: [
    {
      action: "addCollectionHeaderItem",
      customerOrderId: "1",
      isExternalOrder: true,
      data: {
        ucOrder: "12345"
      }
    },
    {
      action: "addCollectionItem",
      orderUnitPrice: 6000,
      orderNetPrice: 60000,
      orderTaxAmount: 12000,
      orderNotes: "Test notes 2",
      collectionQuantity: 10,
      collectionProductId: "2",
      orderLineNumber: 2,
      itemValue: 4000,
      depositDetails: {
        "@type": "depositDetails",
        "depositDetail": [
          {
            "@type": "depositDetail",
            "depositAmount": 2000,
            "depositTax": [
              {
                "@type": "taxAmount",
                "taxRateId": "DK_1",
                "taxRateKey": {
                  "taxRateId": "DK_1",
                  "effectiveDate": 1427155200000
                },
                "displayTaxCode": "Liable for Full Tax",
                "taxAmount": 4000,
                "scale": 1,
                "taxRatePercentage": 0.2
              }
            ]
          }
        ]
      },

      data: {
        ucLineItem: "2"
      }
    }
  ]
};


const collection5Response = {
  posInstructions: [
    {
      action: "addCollectionHeaderItem",
      customerOrderId: "1",
      isExternalOrder: true,
      data: {
        ucOrder: "C5"
      }
    },
    {
      action: "addCollectionItem",
      orderUnitPrice: 1000,
      orderNetPrice: 1000,
      orderTaxAmount: 200,
      orderNotes: "Test notes 2",
      collectionQuantity: 1,
      collectionProductId: "5",
      orderLineNumber: 2,
      itemValue: 1000,
      depositDetails: {
        "@type": "depositDetails",
        "depositDetail": [
        ]
      },
      data: {
        ucLineItem: "2"
      }
    },
    {
      action: "addCollectionItem",
      orderUnitPrice: 1000,
      orderNetPrice: 1000,
      orderTaxAmount: 200,
      orderNotes: "Test notes 2",
      collectionQuantity: 1,
      collectionProductId: "6",
      orderLineNumber: 3,
      itemValue: 1000,
      depositDetails: {
        "@type": "depositDetails",
        "depositDetail": [
        ]
      },
      data: {
        ucLineItem: "3"
      }
    },
    {
      action: "addCollectionItem",
      orderUnitPrice: 1000,
      orderNetPrice: 1000,
      orderTaxAmount: 200,
      orderNotes: "Test notes 2",
      collectionQuantity: 1,
      collectionProductId: "7",
      orderLineNumber: 4,
      itemValue: 1000,
      depositDetails: {
        "@type": "depositDetails",
        "depositDetail": [
        ]
      },
      data: {
        ucLineItem: "4"
      }
    }
  ]
};



const collection6Response = {
  posInstructions: [
    {
      action: "addCollectionHeaderItem",
      customerOrderId: "1",
      isExternalOrder: true,
      data: {
        ucOrder: "C6"
      }
    },
    {
      action: "addCollectionItem",
      orderUnitPrice: 1000,
      orderNetPrice: 2000,
      orderTaxAmount: 400,
      orderNotes: "Test notes 2",
      collectionQuantity: 3,
      collectionProductId: "5",
      orderLineNumber: 2,
      itemValue: 2000,
      depositDetails: {
        "@type": "depositDetails",
        "depositDetail": [
        ]
      },
      data: {
        ucLineItem: "2"
      }
    },
  ]
};




const collection7Response = {
  posInstructions: [
    {
      action: "addCollectionHeaderItem",
      customerOrderId: "1",
      isExternalOrder: true,
      data: {
        ucOrder: "C7"
      }
    },
    {
      action: "addCollectionItem",
      orderUnitPrice: 1000,
      orderNetPrice: 2000,
      orderTaxAmount: 400,
      orderNotes: "Test notes 2",
      collectionQuantity: 3,
      collectionProductId: "5",
      orderLineNumber: 2,
      itemValue: 1000,
      depositDetails: {
        "@type": "depositDetails",
        "depositDetail": [
        ]
      },
      data: {
        ucLineItem: "2"
      }
    },
  ]
};




const collection8Response = {
  posInstructions: [
    {
      action: "addCollectionHeaderItem",
      customerOrderId: "1",
      isExternalOrder: true,
      data: {
        ucOrder: "C8"
      }
    },
    {
      action: "addCollectionItem",
      orderUnitPrice: 1000,
      orderNetPrice: 3000,
      orderTaxAmount: 600,
      orderNotes: "Test notes 2",
      collectionQuantity: 3,
      collectionProductId: "5",
      orderLineNumber: 2,
      itemValue: 3000,
      depositDetails: {
        "@type": "depositDetails",
        "depositDetail": [
        ]
      },
      data: {
        ucLineItem: "2"
      }
    },
  ]
};

const collection9Response = {
  posInstructions: [
    {
      action: "addCollectionHeaderItem",
      customerOrderId: "1",
      isExternalOrder: true,
      data: {
        ucOrder: "C8"
      }
    },
    {
      action: "addCollectionItem",
      orderUnitPrice: 1000,
      orderNetPrice: 3000,
      orderTaxAmount: 600,
      orderNotes: "Test notes 2",
      collectionQuantity: 3,
      collectionProductId: "5",
      orderLineNumber: 2,
      itemValue: 2500,
      depositDetails: {
        "@type": "depositDetails",
        "depositDetail": [
        ]
      },
      data: {
        ucLineItem: "2"
      }
    },
  ]
};



const orderTest18Response = {
  posInstructions: [
    {
      action: "setItem",
      itemId: "1",
      quantity: 1,
      price: 4000,
      ucOrder: "test_1",
      ucLineItem: 1,
    },
    {
      action: "setItem",
      itemId: "2",
      quantity: 1,
      price: 5000,
      ucOrder: "test_1",
      ucLineItem: 2,
    },
    {
      action: "setDeliveryOption",
      type: "address",
      description: "Address delivery",
      reference: "addressDelivery",
    },
    {
      action: "setItem",
      itemId: "3",
      quantity: 1,
      price: 2000,
      ucOrder: "test_1",
      ucLineItem: 3,
    },
    {
      action: "setDeliveryOption",
      type: "address",
      description: "Address delivery",
      reference: "locationCollectionDelivery",
    },
  ],
};

const orderTest19Response = {
  posInstructions: [
    {
      action: "setItem",
      itemId: "1",
      quantity: 1,
      price: 4000,
      ucOrder: "test_1",
      ucLineItem: 1,
    },
    {
      action: "setItem",
      itemId: "2",
      quantity: 1,
      price: 5000,
      ucOrder: "test_1",
      ucLineItem: 2,
    },
    {
      action: "setDeliveryOption",
      type: "address",
      description: "Address delivery",
      reference: "addressDelivery",
    },
    {
      action: "setItem",
      itemId: "3",
      quantity: 1,
      price: 2000,
      ucOrder: "test_1",
      ucLineItem: 3,
    },
    {
      action: "setDeliveryOption",
      type: "address",
      description: "Address delivery",
      reference: "addressDelivery",
    },
  ],
};

const orderTest20Response = {
  posInstructions: [
    {
      action: "setItem",
      itemId: "1000100",
      quantity: 2,
      price: 1500,
      ucOrder: "test_4",
      ucLineItem: 1,
    },
    {
     action: "setDeliveryOption",
      type: "store",
      lineNo: 1,
      description: "Store delivery",
      reference: "locationCollectionDelivery",
    },
  ],
};

orderTest21Response = {
  posInstructions: [
    {
      action: "setItem",
      itemId: "1",
      quantity: 2,
      price: 10000,
      ucOrder: "test_1",
      ucLineItem: 1,
    },
    {
      action: "setDeliveryOption",
      type: "address",
      description: "Address delivery",
      reference: "addressDelivery",
    },
    {
      action: "setItem",
      itemId: "3",
      quantity: 1,
      price: 15000,
      ucOrder: "test_1",
      ucLineItem: 3,
    },
    {
      action: "setDeliveryOption",
      type: "address",
      description: "Address delivery",
      reference: "addressDelivery",
    },
    {
      action: "addTenderItem",
      tenderId: "CARD_DK",
      tenderAmount: 15000,
      ucTenderType: "PREPAYMENT",
    },
  ],
};




const orderTest22Response = {
  posInstructions: [
    {
      action: "setItem",
      itemId: "tr-01",
      quantity: 2,
      price: 10000,
      ucOrder: "test_4",
      ucLineItem: 1,
    },
    {
      action: "setDeliveryOption",
      type: "address",
      description: "Address delivery",
      reference: "addressDelivery",
    },
    {
      action: "addTenderItem",
      tenderId: "CASH",
      tenderAmount: 2500,
      ucTenderType: "PREPAYMENT",
    },
  ],
};
const orderTest23Response = {
  posInstructions: [
    {
      action: "setItem",
      itemId: "tr-01",
      quantity: 3,
      price: 15000,
      ucOrder: "test_5",
      ucLineItem: 1,
      fulfilledQuantity: 1,
    },
    {
      action: "setDeliveryOption",
      type: "address",
      description: "Address delivery",
      reference: "addressDelivery",
    },
  ],
};
const orderTest24Response = {
  posInstructions: [
    {
      action: "setItem",
      itemId: "tr-01",
      quantity: 2,
      price: 10000,
      ucOrder: "test_5",
      ucLineItem: 1,
    },
    {
      action: "setDeliveryOption",
      type: "store",
      lineNo: 1,
      description: "Store delivery",
      reference: "locationCollectionDelivery",
    },
  ],
}


const JYSKData2 = {
  posInstructions:  [ 
		{
			"action": "setReturnItem",
			"operation": "CREATE",
			"itemId": "3620933",
			"quantity": 2,
			"price": 149900,
			"data": {
				"ucImportedOrder": "4300330845",
				"ucLineItem": "1",
				"disableModifyQuantity": "true",
				"ucOrder": "ac973d5b-f916-464c-b1c9-3442da6d6199",
				"ucLine-import-type": "STORE_OOPUS",
				"ucLineItem-import": "1",
				"ucLine-import-request-type": "RETURN"
			},
			"returnReasonId": "IR-DK-40"
		}, {
			"action": "setTxText",
			"operation": "CREATE",
			"position": "com.jysk.pos.uc.import-order.id",
			"value": "ac973d5b-f916-464c-b1c9-3442da6d6199"
		}, {
			"action": "setTxText",
			"operation": "CREATE",
			"position": "com.jysk.pos.uc.customer.type",
			"value": "B2C"
		}, {
			"action": "setPartyType",
			"operation": "CREATE",
			"partyType": "B2C"
		}, {
			"action": "setCustomer",
			"action": "setCustomer",
			"operation": "CREATE",
			"customerId": "3002963958",
			"firstName": "John 8026",
			"lastName": "Doe 4396",
			"companyName": " ",
			"customerGroupId": "",
			"resetCustomerGroups": true
		}],
};
const JYSKData4 = {
  posInstructions:  [ 
		{
			"action": "setReturnItem",
			"operation": "CREATE",
			"itemId": "3620933",
			"quantity": 2,
			"price": 149900,
			"data": {
				"ucImportedOrder": "4300330845",
				"ucLineItem": "1",
				"disableModifyQuantity": "true",
				"ucOrder": "ac973d5b-f916-464c-b1c9-3442da6d6199",
				"ucLine-import-type": "STORE_OOPUS",
				"ucLineItem-import": "1",
				"ucLine-import-request-type": "RETURN"
			},
			"returnReasonId": "IR-DK-40"
		}, 
    {
      action: "setDeliveryOption",
      type: "address",
      description: "Address delivery",
      reference: "addressDelivery",
    },    {
			"action": "setTxText",
			"operation": "CREATE",
			"position": "com.jysk.pos.uc.import-order.id",
			"value": "ac973d5b-f916-464c-b1c9-3442da6d6199"
		}, {
			"action": "setTxText",
			"operation": "CREATE",
			"position": "com.jysk.pos.uc.customer.type",
			"value": "B2C"
		}, {
			"action": "setPartyType",
			"operation": "CREATE",
			"partyType": "B2C"
		}, {
			"action": "setCustomer",
			"action": "setCustomer",
			"operation": "CREATE",
			"customerId": "3002963958",
			"firstName": "John 8026",
			"lastName": "Doe 4396",
			"companyName": " ",
			"customerGroupId": "",
			"resetCustomerGroups": true
		}],
};

const JYSKData3 =
{
  "posInstructions" : [ {
    "action" : "setTxText",
    "operation" : "CREATE",
    "position" : "com.jysk.pos.uc.working-copy-business-key",
    "value" : "7de68177-b115-47a0-9f77-516c20d4b179"
  }, {
    "action" : "setTxText",
    "operation" : "CREATE",
    "position" : "com.jysk.pos.uc.sync-order.id",
    "value" : "7de68177-b115-47a0-9f77-516c20d4b179"
  }, {
    "action" : "setItem",
    "action" : "setItem",
    "operation" : "CREATE",
    "itemId" : "2323200",
    "quantity" : 1,
    "price" : 7800.00,
    "ucOrder" : "7de68177-b115-47a0-9f77-516c20d4b179",
    "ucLineItem" : "1",
    "data" : {
      "ucImportedOrder" : "4300337241",
      "ucLineItem" : "1",
      "ucLine-import-created-by-store" : "D001",
      "ucOrder" : "7de68177-b115-47a0-9f77-516c20d4b179",
      "ucLine-import-type" : "CUSTOMER_ORDER",
      "ucLine-import-delivery-group-id" : "1",
      "ucLineItem-import" : "1",
      "ucLine-import-request-type" : "EDIT"
    },
    "forcePrice" : false
  }, {
    "action" : "setDeliveryOption",
    "operation" : "CREATE",
    "type" : "store",
    "reference" : "locationCollectionDelivery",
    "promise" : ""
  }, {
    "action" : "setItem",
    "action" : "setItem",
    "operation" : "CREATE",
    "itemId" : "2323200",
    "quantity" : 1,
    "price" : 7800.00,
    "ucOrder" : "7de68177-b115-47a0-9f77-516c20d4b179",
    "ucLineItem" : "2",
    "data" : {
      "ucImportedOrder" : "4300337241",
      "ucLineItem" : "2",
      "ucLine-import-created-by-store" : "D001",
      "ucOrder" : "7de68177-b115-47a0-9f77-516c20d4b179",
      "ucLine-import-type" : "CUSTOMER_ORDER",
      "ucLine-import-delivery-group-id" : "1",
      "ucLineItem-import" : "2",
      "ucLine-import-request-type" : "EDIT"
    },
    "forcePrice" : false
  }, {
    "action" : "setDeliveryOption",
    "operation" : "CREATE",
    "type" : "store",
    "reference" : "locationCollectionDelivery",
    "promise" : ""
  }, {
    "action" : "addTenderItem",
    "operation" : "CREATE",
    "tenderId" : "PRE_PAYMENT_DK",
    "tenderAmount" : 15600
  }, {
    "action" : "setTxText",
    "operation" : "CREATE",
    "position" : "com.jysk.pos.uc.import-order.id",
    "value" : "5760fd2a-02c4-40d6-b54a-9ffa92ba5154"
  }, {
    "action" : "setTxText",
    "operation" : "CREATE",
    "position" : "com.jysk.pos.uc.sales-order-number",
    "value" : "4300337241"
  }, {
    "action" : "setTxText",
    "operation" : "CREATE",
    "position" : "com.jysk.pos.uc.customer.type",
    "value" : "B2C"
  }, {
    "action" : "setPartyType",
    "operation" : "CREATE",
    "partyType" : "B2C"
  }, {
    "action" : "setCustomer",
    "action" : "setCustomer",
    "operation" : "CREATE",
    "firstName" : "JYSK-3500-01",
    "lastName" : "JYSK-3500-01",
    "companyName" : " ",
    "customerGroupId" : "",
    "resetCustomerGroups" : true
  } ]
};

const JYSKData7 =
{
  "posInstructions" : [ {
    "action" : "setTxText",
    "operation" : "CREATE",
    "position" : "com.jysk.pos.uc.working-copy-business-key",
    "value" : "7de68177-b115-47a0-9f77-516c20d4b179"
  }, {
    "action" : "setTxText",
    "operation" : "CREATE",
    "position" : "com.jysk.pos.uc.sync-order.id",
    "value" : "7de68177-b115-47a0-9f77-516c20d4b179"
  }, {
    "action" : "setItem",
    "action" : "setItem",
    "operation" : "CREATE",
    "itemId" : "2323200",
    "quantity" : 1,
    "price" : 7800.00,
    "ucOrder" : "7de68177-b115-47a0-9f77-516c20d4b179",
    "ucLineItem" : "1",
    "data" : {
      "ucImportedOrder" : "4300337241",
      "ucLineItem" : "1",
      "ucLine-import-created-by-store" : "D001",
      "ucOrder" : "7de68177-b115-47a0-9f77-516c20d4b179",
      "ucLine-import-type" : "CUSTOMER_ORDER",
      "ucLine-import-delivery-group-id" : "1",
      "ucLineItem-import" : "1",
      "ucLine-import-request-type" : "EDIT"
    },
    "forcePrice" : false
  }, {
    "action" : "setDeliveryOption",
    "operation" : "CREATE",
    "type" : "store",
    "reference" : "locationCollectionDelivery",
    "promise" : ""
  }, {
    "action" : "setItem",
    "action" : "setItem",
    "operation" : "CREATE",
    "itemId" : "2323200",
    "quantity" : 1,
    "price" : 7800.00,
    "ucOrder" : "7de68177-b115-47a0-9f77-516c20d4b179",
    "ucLineItem" : "2",
    "data" : {
      "ucImportedOrder" : "4300337241",
      "ucLineItem" : "2",
      "ucLine-import-created-by-store" : "D001",
      "ucOrder" : "7de68177-b115-47a0-9f77-516c20d4b179",
      "ucLine-import-type" : "CUSTOMER_ORDER",
      "ucLine-import-delivery-group-id" : "1",
      "ucLineItem-import" : "2",
      "ucLine-import-request-type" : "EDIT"
    },
    "forcePrice" : false
  }, {
    "action" : "setDeliveryOption",
    "operation" : "CREATE",
    "type" : "store",
    "reference" : "locationCollectionDelivery",
    "promise" : ""
  }, {
    "action" : "setTxText",
    "operation" : "CREATE",
    "position" : "com.jysk.pos.uc.import-order.id",
    "value" : "5760fd2a-02c4-40d6-b54a-9ffa92ba5154"
  }, {
    "action" : "setTxText",
    "operation" : "CREATE",
    "position" : "com.jysk.pos.uc.sales-order-number",
    "value" : "4300337241"
  }, {
    "action" : "setTxText",
    "operation" : "CREATE",
    "position" : "com.jysk.pos.uc.customer.type",
    "value" : "B2C"
  }, {
    "action" : "setPartyType",
    "operation" : "CREATE",
    "partyType" : "B2C"
  }, {
    "action" : "setCustomer",
    "action" : "setCustomer",
    "operation" : "CREATE",
    "firstName" : "JYSK-3500-01",
    "lastName" : "JYSK-3500-01",
    "companyName" : " ",
    "customerGroupId" : "",
    "resetCustomerGroups" : true
  } ]
};


const JYSKData8 =
{
  "posInstructions" : [ {
    "action" : "setTxText",
    "operation" : "CREATE",
    "position" : "com.jysk.pos.uc.working-copy-business-key",
    "value" : "7de68177-b115-47a0-9f77-516c20d4b179"
  }, {
    "action" : "setTxText",
    "operation" : "CREATE",
    "position" : "com.jysk.pos.uc.sync-order.id",
    "value" : "7de68177-b115-47a0-9f77-516c20d4b179"
  }, {
    "action" : "setItem",
    "action" : "setItem",
    "operation" : "CREATE",
    "itemId" : "2323200",
    "quantity" : 1,
    "price" : 7800.00,
    "ucOrder" : "7de68177-b115-47a0-9f77-516c20d4b179",
    "ucLineItem" : "1",
    "data" : {
      "ucImportedOrder" : "4300337241",
      "ucLineItem" : "1",
      "ucLine-import-created-by-store" : "D001",
      "ucOrder" : "7de68177-b115-47a0-9f77-516c20d4b179",
      "ucLine-import-type" : "CUSTOMER_ORDER",
      "ucLine-import-delivery-group-id" : "1",
      "ucLineItem-import" : "1",
      "ucLine-import-request-type" : "EDIT"
    },
    "forcePrice" : false
  }, {
    "action" : "setDeliveryOption",
    "operation" : "CREATE",
    "type" : "store",
    "reference" : "locationCollectionDelivery",
    "promise" : ""
  }, {
    "action" : "setItem",
    "action" : "setItem",
    "operation" : "CREATE",
    "itemId" : "2323200",
    "quantity" : 1,
    "price" : 7800.00,
    "ucOrder" : "7de68177-b115-47a0-9f77-516c20d4b179",
    "ucLineItem" : "2",
    "data" : {
      "ucImportedOrder" : "4300337241",
      "ucLineItem" : "2",
      "ucLine-import-created-by-store" : "D001",
      "ucOrder" : "7de68177-b115-47a0-9f77-516c20d4b179",
      "ucLine-import-type" : "CUSTOMER_ORDER",
      "ucLine-import-delivery-group-id" : "1",
      "ucLineItem-import" : "2",
      "ucLine-import-request-type" : "EDIT"
    },
    "forcePrice" : false
  }, {
    "action" : "setDeliveryOption",
    "operation" : "CREATE",
    "type" : "store",
    "reference" : "locationCollectionDelivery",
    "promise" : ""
  }, {
    "action" : "setTxText",
    "operation" : "CREATE",
    "position" : "com.jysk.pos.uc.import-order.id",
    "value" : "5760fd2a-02c4-40d6-b54a-9ffa92ba5154"
  }, {
    "action" : "setTxText",
    "operation" : "CREATE",
    "position" : "com.jysk.pos.uc.sales-order-number",
    "value" : "4300337241"
  }, {
    "action" : "setTxText",
    "operation" : "CREATE",
    "position" : "com.jysk.pos.uc.customer.type",
    "value" : "B2C"
  }, {
    "action" : "setPartyType",
    "operation" : "CREATE",
    "partyType" : "B2C"
  }, {
    "action" : "setCustomer",
    "action" : "setCustomer",
    "operation" : "CREATE",
    "firstName" : "JYSK-3500-01",
    "lastName" : "JYSK-3500-01",
    "companyName" : " ",
    "customerGroupId" : "",
    "resetCustomerGroups" : true
  } ]
};







const JYSKData4206011448 =
{
  "posInstructions" : 

    [
      {
        "action": "setTxText",
        "operation": "CREATE",
        "position": "com.jysk.pos.uc.working-copy-business-key",
        "value": "99bb18f5-8a5b-4019-957b-a53ce290bc52"
      },
      {
        "action": "setTxText",
        "operation": "CREATE",
        "position": "com.jysk.pos.uc.sync-order.id",
        "value": "99bb18f5-8a5b-4019-957b-a53ce290bc52"
      },
      {
        "action": "setItem",
        "operation": "CREATE",
        "itemId": "4007351",
        "quantity": 2,
        "price": 78154.00,
        "ucOrder": "99bb18f5-8a5b-4019-957b-a53ce290bc52",
        "ucLineItem": "2",
        "data": {
          "ucImportedOrder": "4207158369",
          "ucLine-sap-pricing-condition": "VKP0",
          "ucLine-promotion-reference": "VKP0_84950_",
          "ucLineItem": "2",
          "disableModifyQuantity": "true",
          "ucOrder": "99bb18f5-8a5b-4019-957b-a53ce290bc52",
          "ucLine-import-type": "DROP_POINT_DELIVERY",
          "ucLine-import-delivery-group-id": "2",
          "ucLineItem-import": "2",
          "ucLine-import-request-type": "CANCEL",
          "ucLineRequestBusinessKey": "2d0ead10-4e99-46a8-9c8f-8b5bad6927f9"
        },
        "forcePrice": true
      },
      {
        "action": "setItem",
        "operation": "CREATE",
        "itemId": "1194350",
        "quantity": 1,
        "price": 6900.00,
        "ucOrder": "99bb18f5-8a5b-4019-957b-a53ce290bc52",
        "ucLineItem": "8",
        "data": {
          "ucImportedOrder": "4207158369",
          "ucLineItem": "8",
          "disableModifyQuantity": "true",
          "ucOrder": "99bb18f5-8a5b-4019-957b-a53ce290bc52",
          "ucLine-import-type": "DROP_POINT_DELIVERY",
          "ucLine-import-delivery-group-id": "2",
          "ucLineItem-import": "8",
          "ucLine-import-request-type": "CANCEL",
          "ucLineRequestBusinessKey": "2d0ead10-4e99-46a8-9c8f-8b5bad6927f9"
        },
        "forcePrice": true
      },
      {
        "action": "setItem",
        "operation": "CREATE",
        "itemId": "9099900",
        "quantity": 1,
        "price": 15900.00,
        "ucOrder": "99bb18f5-8a5b-4019-957b-a53ce290bc52",
        "ucLineItem": "10",
        "data": {
          "ucImportedOrder": "4207158369",
          "ucLine-sap-pricing-condition": "VKP0",
          "ucLineItem": "10",
          "disableModifyQuantity": "true",
          "ucOrder": "99bb18f5-8a5b-4019-957b-a53ce290bc52",
          "ucLine-import-type": "DROP_POINT_DELIVERY",
          "ucLine-import-delivery-group-id": "2",
          "ucLineItem-import": "10",
          "ucLine-import-request-type": "CANCEL",
          "ucLineRequestBusinessKey": "2d0ead10-4e99-46a8-9c8f-8b5bad6927f9"
        },
        "forcePrice": true
      },
      {
        "action": "addTenderItem",
        "operation": "CREATE",
        "tenderId": "UC_CASH_DK",
        "tenderAmount": 179108
      },
      {
        "action": "setTxText",
        "operation": "CREATE",
        "position": "com.jysk.pos.uc.import-order.id",
        "value": "2d0ead10-4e99-46a8-9c8f-8b5bad6927f9"
      },
      {
        "action": "setTxText",
        "operation": "CREATE",
        "position": "com.jysk.pos.uc.sales-order-number",
        "value": "4207158369"
      },
      {
        "action": "setTxText",
        "operation": "CREATE",
        "position": "com.jysk.pos.uc.customer.type",
        "value": "B2B"
      },
      {
        "action": "setPartyType",
        "operation": "CREATE",
        "partyType": "B2B"
      },
      {
        "action": "setCustomer",
        "operation": "CREATE",
        "customerId": "0016020655",
        "firstName": "Westerland.DK",
        "lastName": "hghgfhgfhgf",
        "companyName": "Westerland.DK",
        "customerGroupHierarchyId": "DK_CUST_GROUPS",
        "customerGroupId": "B2B8",
        "resetCustomerGroups": true
      },
      {
        "action": "setTxText",
        "operation": "CREATE",
        "position": "com.jysk.pos.uc.order.vat",
        "value": "DK26238080"
      }
    ]



   
};


const orderTestFP = {
  posInstructions: [
    // {
    //   action: "setItem",
    //   itemId: "5",
    //   quantity: 1,
    //   price: 1100,
    //   ucOrder: "test_2",
    //   ucLineItem: 4,
    //   forcePrice: true,
    // },
    {
      action: "setItem",
      itemId: "6",
      quantity: 1,
      price: 6000,
      ucOrder: "test_2",
      ucLineItem: 4,
      forcePrice: true,
    },
    // {
    //   action: "setItem",
    //   itemId: "7",
    //   quantity: 1,
    //   price: 11000,
    //   ucOrder: "test_2",
    //   ucLineItem: 4,
    // },
  ],
};

//F11-ordercollection responses

const F11collection1Response = {
  posInstructions: [
    {
      action: "addCollectionHeaderItem",
      customerOrderId: "1",
      isExternalOrder: true,
      data: {
        ucOrder: "12345"
      }
    },
    {
      action: "addCollectionItem",
      orderUnitPrice: 5100,
      orderNetPrice: 5500,
      orderTaxAmount: 0,
      orderNotes: "Test notes",
      collectionQuantity: 1,
      collectionProductId: "TR-01",
      orderLineNumber: 1,
      itemValue: 0,
      depositDetails: {
        "@type": "depositDetails",
        "depositDetail": [
          {
            "@type": "depositDetail",
            "depositAmount": 5500,
            "depositTax": [
              {
                "@type": "taxAmount",
                "taxRateId": "TR-1",
                "taxRateKey": {
                  "taxRateId": "TR-1",
                  "effectiveDate": 1663525800000
                },
                "displayTaxCode": "18%",
                "taxAmount": 8380000,
                "scale": 4,
                "taxRatePercentage": 0.18
              },
            ],
            depositTenders: [
             {
               "@type": "depositTenderDetail",
               "tenderKey": {
                 "tenderId": "CASH_TR",
                 "groupId": {
          			"id": "All",
          			"groupTypeId": "region",
          			"groupHierarchyId": "All",
          			"groupId": "TURKEY"
        		  }
                 },
                "depositAmount": "5500"
             }
            ]
          }
        ]
      },
      adjustments : [
        {
          "@type" : "customerOrderAdjustment",
          "adjustmentNumber" : 1,
          "adjustmentType" : "DISCOUNT",
          "adjustmentDetail" : "",
          "description" : "Price Override Up",
          "voided" : false,
          "amount" : -400    		
      	}
      ],
      data: {
       ucLineItem: "1"
      }
    }
  ]
};

const F11collection2Response = {
  posInstructions: [
    {
      action: "addCollectionHeaderItem",
      customerOrderId: "1",
      isExternalOrder: true,
      data: {
        ucOrder: "12345"
      }
    },
    {
      action: "addCollectionItem",
      orderUnitPrice: 5500,
      orderNetPrice: 5500,
      orderTaxAmount: 0,
      orderNotes: "Test notes",
      collectionQuantity: 1,
      collectionProductId: "TR-01",
      orderLineNumber: 1,
      itemValue: 0,
      depositDetails: {
        "@type": "depositDetails",
        "depositDetail": [
          {
            "@type": "depositDetail",
            "depositAmount": 5500,
            "depositTax": [
              {
                "@type": "taxAmount",
                "taxRateId": "TR-1",
                "taxRateKey": {
                  "taxRateId": "TR-1",
                  "effectiveDate": 1663525800000
                },
                "displayTaxCode": "18%",
                "taxAmount": 8380000,
                "scale": 4,
                "taxRatePercentage": 0.18
              },
            ],
            depositTenders: [
             {
               "@type": "depositTenderDetail",
               "tenderKey": {
                 "tenderId": "CASH_TR",
                 "groupId": {
                      "id": "All",
                      "groupTypeId": "region",
                      "groupHierarchyId": "All",
                      "groupId": "TURKEY"
                  }
                 },
                "depositAmount": "5500"
             }
            ]
          }
        ]
      },
      adjustments : [
        {
          "@type" : "customerOrderAdjustment",
          "adjustmentNumber" : 1,
          "adjustmentType" : "PRICE_OVERRIDE",
          "adjustmentDetail" : "PO-TR1",
          "description" : "Price Override Down",
          "voided" : false,
          "amount" : -400,
          "reasonKey" : {
          	"reasonId" : "PO-TR1",
          	"regionId": {
                      "id": "All",
                      "groupTypeId": "region",
                      "groupHierarchyId": "All",
                      "groupId": "TURKEY"
                  }
          }   		
      	}
      ],
      data: {
       ucLineItem: "1"
      }
    },
    {
      action: "setCustomer",
      customerId: "1",
      firstName: "John",
      lastName: "Smith",
      customerTaxAreaId: "1234",
      initials: "A.B.C",
      title: "Mr",
      sex: "FEMALE",
      dateOfBirth: 1679649452671,
      otherNames: "Test Other Name",
      jobTitle: "Software Enginner",
      organisation: "Test Organisation",
      customerAddress : {
        countryCodeId : {
          "id" : "TR"
        },
        street1 : "Street One",
        street2 : "Street Two"
      }
    },
  ]
}

const F11collection3Response = {
  posInstructions: [
    {
      action: "addCollectionHeaderItem",
      customerOrderId: "1",
      isExternalOrder: true,
      data: {
        ucOrder: "12345"
      }
    },
    {
      action: "addCollectionItem",
      orderUnitPrice: 5500,
      orderNetPrice: 5500,
      orderTaxAmount: 0, 
      orderNotes: "Test notes",
      collectionQuantity: 1,
      collectionProductId: "TR-01",
      orderLineNumber: 1,
      itemValue: 0,
      depositDetails: {
        "@type": "depositDetails",
        "depositDetail": [
          {
            "@type": "depositDetail",
            "depositAmount": 5500,
            "depositTax": [
              {
                "@type": "taxAmount",
                "taxRateId": "TR-1",
                "taxRateKey": {
                  "taxRateId": "TR-1",
                  "effectiveDate": 1663525800000
                },
                "displayTaxCode": "18%",
                "taxAmount": 8380000,
                "scale": 4,
                "taxRatePercentage": 0.18
              },
            ],
            depositTenders: [
             {
               "@type": "depositTenderDetail",
               "tenderKey": {
                 "tenderId": "CASH_TR",
                 "groupId": {
          			"id": "All",
          			"groupTypeId": "region",
          			"groupHierarchyId": "All",
          			"groupId": "TURKEY"
        		  }
                 },
                "depositAmount": "5500"
             }
            ],  
          }
        ]
      },
      adjustments : [ 
        {
          "@type" : "customerOrderAdjustment",
          "adjustmentNumber" : 1,
          "adjustmentType" : "PRICE_OVERRIDE",
          "adjustmentDetail" : "PO-TR1",
          "description" : "Price Override Up",
          "voided" : false,
          "amount" : -500    		
      	}
      ],
      data: {
       ucLineItem: "1"
      }
    },
    {
      action: "setCustomer",
      customerId: "1",
      firstName: "John",
      lastName: "Smith",
      taxIdentification: "1234",
      initials: "A.B.C",
      title: "Mr",
      sex: "FEMALE",
      dateOfBirth: 1679649452671,
      otherNames: "Test Other Name",
      jobTitle: "Software Enginner",
      organisation: "Test Organisation",
      customerAddress : {
        countryCodeId : {
          "id" : "TR"
        },
        street1 : "Street One",
        street2 : "Street Two"
      }
    }

  ]
};

const F11collection4Response = {
  posInstructions: [
    {
      action: "addCollectionHeaderItem",
      customerOrderId: "1",
      isExternalOrder: true,
      data: {
        ucOrder: "12345"
      }
    },
    {
      action: "addCollectionItem",
      orderUnitPrice: 5500,
      orderNetPrice: 5500,
      orderTaxAmount: 0, 
      orderNotes: "Test notes",
      collectionQuantity: 1,
      collectionProductId: "TR-01",
      orderLineNumber: 1,
      itemValue: 0,
      depositDetails: {
        "@type": "depositDetails",
        "depositDetail": [
          {
            "@type": "depositDetail",
            "depositAmount": 5500,
            "depositTax": [
              {
                "@type": "taxAmount",
                "taxRateId": "TR-1",
                "taxRateKey": {
                  "taxRateId": "TR-1",
                  "effectiveDate": 1663525800000
                },
                "displayTaxCode": "18%",
                "taxAmount": 8380000,
                "scale": 4,
                "taxRatePercentage": 0.18
              },
            ],
            depositTenders: [
             {
               "@type": "depositTenderDetail",
               "tenderKey": {
                 "tenderId": "CASH_TR",
                 "groupId": {
          			"id": "All",
          			"groupTypeId": "region",
          			"groupHierarchyId": "All",
          			"groupId": "TURKEY"
        		  }
                 },
                "depositAmount": "5500"
             }
            ]
          }
        ]
      },
      adjustments : [ 
        {
          "@type" : "customerOrderAdjustment",
          "adjustmentNumber" : 1,
          "adjustmentType" : "PRICE_OVERRIDE",
          "adjustmentDetail" : "PO-TR1",
          "description" : "Price Override Down",
          "voided" : false,
          "amount" : 500  		
      	}
      ],
      data: {
       ucLineItem: "1"
      }
    },
    {
      action: "setCustomer",
      customerId: "0001",
      firstName: "Sandaru",
      lastName: "Jayasuriya",
      initials: "G S P",
      title: "Miss",
      sex: "FEMALE",
      dateOfBirth: 1679649452671,
      otherNames: "Test Other Name",
      jobTitle: "Software Enginner",
      organisation: "Enactor UK",
      customerAddress : {
        countryCodeId : {
          "id" : "TR"
        },
        street1 : "Street One",
        street2 : "Street Two"
      }
    }
  ]
};

const F11collection5Response = {
  posInstructions: [
    {
      action: "addCollectionHeaderItem",
      customerOrderId: "1",
      isExternalOrder: true,
      data: {
        ucOrder: "12345"
      }
    },
    {
      action: "addCollectionItem",
      orderUnitPrice: 5100,
      orderNetPrice: 4590,
      orderTaxAmount: 0, 
      orderNotes: "Test notes",
      collectionQuantity: 1,
      collectionProductId: "TR-01",
      orderLineNumber: 1,
      itemValue: 0,
      depositDetails: {
        "@type": "depositDetails",
        "depositDetail": [
          {
            "@type": "depositDetail",
            "depositAmount": 4590,
            "depositTax": [
              {
                "@type": "taxAmount",
                "taxRateId": "TR-1",
                "taxRateKey": {
                  "taxRateId": "TR-1",
                  "effectiveDate": 1663525800000
                },
                "displayTaxCode": "18%",
                "taxAmount": 8380000,
                "scale": 4,
                "taxRatePercentage": 0.18
              },
            ],
            depositTenders: [
             {
               "@type": "depositTenderDetail",
               "tenderKey": {
                 "tenderId": "CASH_TR",
                 "groupId": {
          			"id": "All",
          			"groupTypeId": "region",
          			"groupHierarchyId": "All",
          			"groupId": "TURKEY"
        		  }
                 },
                "depositAmount": "4590"
             }
            ]
          }
        ]
      },
      adjustments : [ 
        {
          "@type" : "customerOrderAdjustment",
          "adjustmentNumber" : 1,
          "adjustmentType" : "DISCOUNT",
          "adjustmentDetail" : "ID-TR1",
          "description" : "10% Item Discount (%)",
          "voided" : false,
          "amount" : -510    		
      	}
      ],
      data: {
       ucLineItem: "1"
      }
    }
  ]
};

const F11collection6Response = {
  posInstructions: [
    {
      action: "addCollectionHeaderItem",
      customerOrderId: "1",
      isExternalOrder: true,
      data: {
        ucOrder: "12345"
      }
    },
    {
      action: "addCollectionItem",
      orderUnitPrice: 5100,
      orderNetPrice: 5100,
      orderTaxAmount: 0,
      orderNotes: "Test notes",
      collectionQuantity: 1,
      collectionProductId: "TR-01",
      orderLineNumber: 1,
      itemValue: 0,
      depositDetails: {
        "@type": "depositDetails",
        "depositDetail": [
          {
            "@type": "depositDetail",
            "depositAmount": 3837,
            "depositTax": [
              {
                "@type": "taxAmount",
                "taxRateId": "TR-1",
                "taxRateKey": {
                  "taxRateId": "TR-1",
                  "effectiveDate": 1663525800000
                },
                "displayTaxCode": "18%",
                "taxAmount": 8380000,
                "scale": 4,
                "taxRatePercentage": 0.18
              },
            ],
            depositTenders: [
             {
               "@type": "depositTenderDetail",
              
 "tenderKey": {
                 "tenderId": "CASH_TR",
                 "groupId": {
                "id": "All",
                "groupTypeId": "region",
                "groupHierarchyId": "All",
                "groupId": "TURKEY"
              }
                 },
                "depositAmount": "3837"
             }
            ]
          }
        ]
      },
      adjustments : [
        {
          "@type" : "customerOrderAdjustment",
          "adjustmentNumber" : 1,
          "adjustmentType" : "PROMOTION",
          "adjustmentDetail" : "IS_09",
          "description" : "Dearest Free - Exclude MMG",
          "voided" : false,
          "amount" : -1263        
        }
      ],
      data: {
       ucLineItem: "1"
      }
    },
    {
      action: "addCollectionItem",
      orderUnitPrice: 3100,
      orderNetPrice: 15500,
      orderTaxAmount: 0,
      orderNotes: "Test notes",
      collectionQuantity: 5,
      collectionProductId: "TR-02",
      orderLineNumber: 2,
      itemValue: 0,
      depositDetails: {
        "@type": "depositDetails",
        "depositDetail": [
          {
            "@type": "depositDetail",
            "depositAmount": 11663,
            "depositTax": [
              {
                "@type": "taxAmount",
                "taxRateId": "TR-1",
                "taxRateKey": {
                  "taxRateId": "TR-1",
                  "effectiveDate": 1663525800000
                },
                "displayTaxCode": "18%",
                "taxAmount": 8380000,
                "scale": 4,
                "taxRatePercentage": 0.18
              },
            ],
            depositTenders: [
             {
               "@type": "depositTenderDetail",
               "tenderKey": {
                 "tenderId": "CASH_TR",
                 "groupId": {
                "id": "All",
                "groupTypeId": "region",
                "groupHierarchyId": "All",
                "groupId": "TURKEY"
              }
                 },
                "depositAmount": "11663"
             }
            ]
          }
        ]
      },
      adjustments : [
        {
          "@type" : "customerOrderAdjustment",
          "adjustmentNumber" : 1,
          "adjustmentType" : "PROMOTION",
          "adjustmentDetail" : "IS_09",
          "description" : "Dearest Free - Exclude MMG",
          "voided" : false,
          "amount" : -3837        
        }
      ],
      data: {
       ucLineItem: "2"
      }
    },

  ]
};

const F11collection8Response = {
  posInstructions: [
    {
      action: "addCollectionHeaderItem",
      customerOrderId: "1",
      isExternalOrder: true,
      data: {
        ucOrder: "12345"
      }
    },
    {
      action: "addCollectionItem",
      orderUnitPrice: 5100,
      orderNetPrice: 3727,
      orderTaxAmount: 0, 
      orderNotes: "Test notes",
      collectionQuantity: 1,
      collectionProductId: "TR-01",
      orderLineNumber: 1,
      itemValue: 0,
      depositDetails: {
        "@type": "depositDetails",
        "depositDetail": [
          {
            "@type": "depositDetail",
            "depositAmount": 3727,
            "depositTax": [
              {
                "@type": "taxAmount",
                "taxRateId": "TR-1",
                "taxRateKey": {
                  "taxRateId": "TR-1",
                  "effectiveDate": 1663525800000
                },
                "displayTaxCode": "18%",
                "taxAmount": 8380000,
                "scale": 4,
                "taxRatePercentage": 0.18
              },
            ],
            depositTenders: [
             {
               "@type": "depositTenderDetail",
               "tenderKey": {
                 "tenderId": "CASH_TR",
                 "groupId": {
                      "id": "All",
                      "groupTypeId": "region",
                      "groupHierarchyId": "All",
                      "groupId": "TURKEY"
                  }
                 },
                "depositAmount": "3727"
             }
            ]
          }
        ]
      },
      adjustments : [ 
         {
          "@type" : "customerOrderAdjustment",
          "adjustmentNumber" : 1,
          "adjustmentType" : "PROMOTION",
          "adjustmentDetail" : "IS_09",
          "description" : "Dearest Free - Exclude MMG",
          "voided" : false,
          "amount" : -1263        
        },
        {
          "@type" : "customerOrderAdjustment",
          "adjustmentNumber" : 2,
          "adjustmentType" : "DISCOUNT",
          "adjustmentDetail" : "ID-TR1",
          "description" : "10% Item Discount (%)",
          "voided" : false,
          "amount" : -510    		
      	}
        
      ],
      data: {
       ucLineItem: "1"
      }
    },
    {
      action: "setCustomer",
      customerId: "1",
      firstName: "John",
      lastName: "Smith",
      customerTaxAreaId: "1234",
      initials: "A.B.C",
      title: "Mr",
      sex: "FEMALE",
      dateOfBirth: 1679649452671,
      otherNames: "Test Other Name",
      jobTitle: "Software Enginner",
      organisation: "Test Organisation",
      customerAddress : {
        countryCodeId : {
          "id" : "TR"
        },
        street1 : "Street One",
        street2 : "Street Two"
      }
    }
    ]
  };
  const F11collection9Response = {
    posInstructions: [
      {
        action: "addCollectionHeaderItem",
        customerOrderId: "1",
        isExternalOrder: true,
        data: {
          ucOrder: "12345"
        }
      },
      {
        action: "addCollectionItem",
        orderUnitPrice: 5100,
        orderNetPrice: 4590,
        orderTaxAmount: 0, 
        orderNotes: "Test notes",
        collectionQuantity: 1,
        collectionProductId: "TR-01",
        orderLineNumber: 1,
        itemValue: 0,
        depositDetails: {
          "@type": "depositDetails",
          "depositDetail": [
            {
              "@type": "depositDetail",
              "depositAmount": 4590,
              "depositTax": [
                {
                  "@type": "taxAmount",
                  "taxRateId": "TR-1",
                  "taxRateKey": {
                    "taxRateId": "TR-1",
                    "effectiveDate": 1663525800000
                  },
                  "displayTaxCode": "18%",
                  "taxAmount": 8380000,
                  "scale": 4,
                  "taxRatePercentage": 0.18
                },
              ],
              depositTenders: [
               {
                 "@type": "depositTenderDetail",
                 "tenderKey": {
                   "tenderId": "CASH_TR",
                   "groupId": {
                  "id": "All",
                  "groupTypeId": "region",
                  "groupHierarchyId": "All",
                  "groupId": "TURKEY"
                }
                   },
                  "depositAmount": "4590"
               }
              ]
            }
          ]
        },
        adjustments : [ 
          {
            "@type" : "customerOrderAdjustment",
            "adjustmentNumber" : 1,
            "adjustmentType" : "DISCOUNT",
            "adjustmentDetail" : "ID-TR1",
            "description" : "10% Item Discount (%)",
            "voided" : false,
            "amount" : -510    		
          }
        ],
        data: {
         ucLineItem: "1"
        }
      }
    ]
  };
  




exports.addItemResponse = addItemResponse;
exports.addItemResponseWithPrices = addItemResponseWithPrices;
exports.addItemResponseWithOrderDespoit = addItemResponseWithOrderDespoit;
exports.addItemResponseWithOrderDespoitAndForceValue =
  addItemResponseWithOrderDespoitAndForceValue;
exports.updateItemResponse = updateItemResponse;
exports.setTxTextResponse = setTxTextResponse;
exports.updateSetTxTextResponse = updateSetTxTextResponse;
exports.setCustomerResponse = setCustomerResponse;
exports.voidItemResponse = voidItemResponse;
exports.voidItemNoReasonResponse = voidItemNoReasonResponse;
exports.userMessagesResponse = userMessagesResponse;
exports.setItemDataResponse = setItemDataResponse;
exports.setItemDataWithNullValueResponse = setItemDataWithNullValueResponse;
exports.addItemWithPrepaidAmountResponse = addItemWithPrepaidAmountResponse;
exports.addFulfilledItemResponse = addFulfilledItemResponse;
exports.addFulfilledItemWithPrepaidAmountResponse = addFulfilledItemWithPrepaidAmountResponse;
exports.orderTest1Response = orderTest1Response;
exports.orderTest2Response = orderTest2Response;
exports.orderTest3Response = orderTest3Response;
exports.orderTest4Response = orderTest4Response;
exports.orderTest5Response = orderTest5Response;
exports.orderTest6Response = orderTest6Response;
exports.orderTest7Response = orderTest7Response;
exports.orderTest8Response = orderTest8Response;
exports.orderTest9Response = orderTest9Response;
exports.orderTest10Response = orderTest10Response;
exports.orderTest11Response = orderTest11Response;
exports.orderTest11ResponseNew2 = orderTest11ResponseNew2;
exports.orderTest12Response = orderTest12Response;
exports.orderTest13Response = orderTest13Response;
exports.orderTest14Response = orderTest14Response;
exports.orderTest15Response = orderTest15Response;
exports.completeOrderResponse = completeOrderResponse;
exports.addItemResponseWithNotes = addItemResponseWithNotes;
exports.addSampleThanushiGoHome = addSampleThanushiGoHome;
exports.orderTest1ResponseNew = orderTest1ResponseNew;
exports.orderTest2ResponseNew = orderTest2ResponseNew;
exports.orderTest3ResponseNew = orderTest3ResponseNew;
exports.orderTest4ResponseNew = orderTest4ResponseNew;
exports.orderTest5ResponseNew = orderTest5ResponseNew;
exports.orderTest6ResponseNew = orderTest6ResponseNew;
exports.orderTest7ResponseNew = orderTest7ResponseNew;
exports.orderTest8ResponseNew = orderTest8ResponseNew;
exports.orderTest9ResponseNew = orderTest9ResponseNew;
exports.orderTest10ResponseNew = orderTest10ResponseNew;
exports.orderTest11ResponseNew = orderTest11ResponseNew;
exports.orderTest12ResponseNew = orderTest12ResponseNew;
exports.orderTest13ResponseNew = orderTest13ResponseNew;
exports.orderTest14ResponseNew = orderTest14ResponseNew;
exports.orderTest16Response = orderTest16Response;
exports.orderTest17Response = orderTest17Response;
exports.orderTest18Response=orderTest18Response;
exports.orderTest19Response=orderTest19Response;
exports.orderTest20Response=orderTest20Response;

exports.orderTest22Response=orderTest22Response;
exports.orderTest23Response=orderTest23Response;
exports.orderTest24Response=orderTest24Response;


// UC specific
exports.UC67_A = UC67_A;
exports.UC67_I = addItemResponseWithReceiptInvoiceDetails;

exports.UC75 = UC75;
exports.UC75_A = UC75_A;
exports.UC75_B = UC75_B;
exports.UC76 = UC76;
exports.UC76_A = UC76_A;
exports.UC76_B = UC76_B;

exports.UC87 = UC87;
exports.UC_95 = UC_95;

// ticket specific
exports.JYSK_1993 = JYSK_1993;
exports.JYSK_1977 = JYSK_1977;
exports.JYSK_1977_REMOVE = JYSK_1977_REMOVE;
exports.JYSK_1977_CLEAR = JYSK_1977_CLEAR;
exports.JYSK_2204 = JYSK_2204;
exports.JYSK_2196 = JYSK_2196;
exports.JYSK_2348 = JYSK_2348;
exports.JYSK_2067 = JYSK_2067;
exports.JYSK_2444 = JYSK_2444;
exports.JYSK_2444_A = JYSK_2444_A;
exports.JYSK_2444_B = JYSK_2444_B;
exports.JYSK_2439 = JYSK_2439;
exports.JYSK_2383 = JYSK_2383;
exports.JYSK_2377 = JYSK_2377;
exports.orderTest21Response= orderTest21Response;
exports.JYSKData2 = JYSKData2;
exports.JYSKData3 = JYSKData3;
exports.JYSKData4 = JYSKData4;
exports.JYSKData5 = JYSKData5;
exports.JYSKData6 = JYSKData6;
exports.JYSKData7 = JYSKData7;
exports.JYSKData8 = JYSKData8;
exports.JYSKData4206011448 = JYSKData4206011448;

// party type
exports.B2B = B2B;
exports.B2C = B2C;
exports.B2E = B2E;
exports.JYSKData1 = JYSKData1

// collection
exports.collection1Response = collection1Response;
exports.collection2Response = collection2Response;
exports.collection3Response = collection3Response;
exports.collection4Response = collection4Response;
exports.collection5Response = collection5Response;
exports.collection6Response = collection6Response;
exports.collection7Response = collection7Response;
exports.collection8Response = collection8Response;
exports.collection9Response = collection9Response;

exports.orderTestFP = orderTestFP;

//f11 exports
exports.F11collection1Response =  F11collection1Response;
exports.F11collection2Response =  F11collection2Response;
exports.F11collection3Response =  F11collection3Response;
exports.F11collection4Response =  F11collection4Response;
exports.F11collection5Response =  F11collection5Response;
exports.F11collection6Response =  F11collection6Response;
// exports.F11collection7Response =  F11collection7Response;
exports.F11collection8Response =  F11collection8Response;
exports.F11collection9Response =  F11collection9Response;