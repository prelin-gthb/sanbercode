## **QA Automation Course Assignment: Basic Javascript**

This repository was created to fulfill the QA Automation Course assignment from [Sanbercode](sanbercode.id). It contains two JavaScript programs, each addressing specific tasks as described below.

### **Contents**
1. [soal1.js - Square Root Calculator](#1.-soal1.js---Square-Root-Calculator)
2. [soal2.js - Product Quantity Checker](#1.-soal2.js---Product-Quantity-Checker)

---

#### **1. soal1.js - Square Root Calculator**

This program calculates the square root of a given number with the following conditions:
- If the user inputs a negative number, the program returns an error message: "Tidak bisa input bilangan negatif" or "Cannot input a negative number".
- If the user inputs an odd number, the program returns an error message: "Tidak bisa input bilangan ganjil" or "Cannot input an odd number".

#### **2. soal2.js - Product Quantity Checker**

This program is designed to check the total quantity of a specific product, identified by its `productCode`, across multiple `storageIds` based on this example of an API response below. This API response is saved in the `productData.json` file.

```javascript
let productBin = {
  "requestId": null,
  "data": [
    {
      "id": 100000057465,
      "storageId": 10000008207,
      "code": "A01-01-01-A",
      "productId": 110000081009,
      "productName": "FloBrand-DressBSPink",
      "productCode": "FBR00040101",
      "quantity": 76,
      "createdTime": "2021-12-21T13:54:48Z",
    },
    {
      "id": 100000057466,
      "storageId": 10000002181,
      "code": "A01-01-01-B",
      "productId": 110000081009,
      "productName": "FloBrand-DressBSPink",
      "productCode": "FBR00040101",
      "quantity": 71,
      "createdTime": "2021-12-21T13:54:48Z",
    },
    {
      "id": 100000065224,
      "storageId": 10000008884,
      "code": "Tgt00-A-A-01",
      "productId": 110000081009,
      "productName": "FloBrand-DressBSPink",
      "productCode": "FBR00040101",
      "quantity": 10,
      "createdTime": "2022-02-08T10:35:19Z",
    }
  ],
  "message": "success"
}
