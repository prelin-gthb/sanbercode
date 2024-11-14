const prompt = require('prompt-sync')({ sigint: true });

// Mengambil data produk dari file productData.json
const productBin = require('./productData.json');

// Meminta user inptu nama atau kode produk
const searchQuery = prompt('Cari berdasarkan Nama atau Kode Produk: ').trim();

// Variabel untuk menampung total kuantitas dan flag untuk kode produk yang unik
let totalQty = 0;
let displayedProductInfo = false;  // Flag untuk memastikan nama dan kode produk hanya ditampilkan sekali

// Pengualangan untuk mengecek data produk
productBin.data.forEach(item => {
  // Memeriksa apakah query pencarian sesuai dengan nama atau kode produk
  if (item.productName.toLowerCase().includes(searchQuery.toLowerCase()) || item.productCode.toLowerCase().includes(searchQuery.toLowerCase())) {
    
    // Menampilkan nama dan kode produk
    if (!displayedProductInfo) {
      console.log(`Nama Produk: ${item.productName}`);
      console.log(`Kode Produk: ${item.productCode}`);
      displayedProductInfo = true;  // Set flag menjadi true setelah menampilkan nama dan kode produk
    }
    
    // Menambahkan kuantitas produk ke totalQty
    totalQty += item.quantity;
  }
});

// Menampilkan hasil
if (totalQty > 0) {
  console.log(`Total kuantitas untuk produk yang dicari = ${totalQty}`);
} else {
  console.log(`Produk tidak ditemukan.`);
}
