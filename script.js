// Fungsi untuk menampilkan slide sesuai tombol yang diklik
function showSlide(slideId) {
    // Sembunyikan semua slide
    const slides = document.querySelectorAll('.slide');
    slides.forEach(slide => slide.classList.remove('active'));

    // Tampilkan slide yang dipilih
    const activeSlide = document.getElementById(slideId);
    activeSlide.classList.add('active');
}

// Fungsi untuk menampilkan overlay pada gambar yang diklik
function toggleOverlay(image, text) {
    // Temukan elemen parent dari gambar (foto-container)
    const container = image.closest('.foto-container');

    // Cari overlay di dalam container
    const overlay = container.querySelector('.overlay');

    // Jika overlay tidak aktif, tambahkan teks dan tampilkan
    if (overlay.style.opacity === '0' || overlay.style.opacity === '') {
        overlay.textContent = text;
        overlay.style.opacity = '1';
    } else {
        // Sembunyikan overlay jika sudah aktif
        overlay.style.opacity = '0';
    }
}
