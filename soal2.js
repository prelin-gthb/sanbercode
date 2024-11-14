// Array data dari contoh response API
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
  };
  
// Variabel untuk menampung total quantity
let totalQty = 0;

// Pengulangan untuk memeriksa setiap item dalam array data
for (let i = 0; i < productBin.data.length; i++) {
  let item = productBin.data[i];
  
  // Memeriksa apakah productCode sesuai dengan yang dicari
  if (item.productCode === "FBR00040101") {
    totalQty += item.quantity;  // Menambahkan quantity ke variabel totalQty
  }
}
  
  // Menampilkan hasil perhitungan total Quantity
  console.log("Total Quantity untuk produk FloBrand-DressBSPink [FBR00040101] = ", totalQty);  