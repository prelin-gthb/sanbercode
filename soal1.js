const prompt = require('prompt-sync')({ sigint: true });

// Meminta user untuk memasukkan angka
const num = prompt('Masukkan sebuah angka: ');

// Mengecek apakah inputan bukan angka
if (isNaN(num)) {
    console.log('Input harus berupa angka.');
}
// Mengecek apakah angka yang dimasukkan adalah bilangan negatif
else if (Number(num) < 0) {
    console.log('Tidak bisa input bilangan negatif');
} 
// Mengecek apakah angka yang dimasukkan adalah bilangan ganjil
else if (Number(num) % 2 !== 0) {
    console.log('Tidak bisa input bilangan ganjil');
} 
// Mengecek jika angka yang diinput valid (bilangan genap & bukan bilangan negatif)
else {
    const result = Math.sqrt(Number(num)); // Menghitung akar pangkat 2 dari angka yang diinput
    console.log(`Akar pangkat 2 dari ${num} adalah ${result}`);
}
