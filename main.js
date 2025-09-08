onload = () =>{
    document.body.classList.remove("container");
};
// Setelah semua selesai, tampilkan pesan
const afterFlowers = document.getElementById('afterFlowers');
const nextBtn = document.getElementById('nextBtn');
const greeting = afterFlowers.querySelector('.greeting');
const surat = afterFlowers.querySelector('.surat');

function showMessage() {
  afterFlowers.classList.add('show'); // tampilkan overlay
}

// Tunggu sampai animasi bunga selesai (perkiraan sekitar 5 detik)
setTimeout(() => {
  showMessage();
}, 5000); // Sesuaikan waktunya dengan durasi animasi bunga

// Event klik tombol Next
nextBtn.addEventListener('click', () => {
    greeting.classList.add('hidden');
    surat.classList.remove('hidden'); // tampilkan isi surat
    nextBtn.style.display = 'none'; // tambahkan ini
  });
 
const topBox = document.getElementById('topBox');

nextBtn.addEventListener('click', () => {
  // Sembunyikan bagian atas
  topBox.classList.add('hidden');
  // Tampilkan surat
  surat.classList.remove('hidden');
  // Hilangkan tombol Next agar tidak bisa diklik lagi
  nextBtn.style.display = 'none';
});
