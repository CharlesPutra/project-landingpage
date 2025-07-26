window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 300) {
        navbar.classList.remove("navbar-transparent");
    } else {
        navbar.classList.add("navbar-transparent");
    }
});

document.getElementById('konsulform').addEventListener('submit', function (e) {
    e.preventDefault();

    const nama = document.getElementById('nama').value;
    const nisn = document.getElementById('kontak').value;
    const ttl = document.getElementById('pesan').value;

    // Format nomor WA panitia: ganti 0 jadi 62
    const noPanitia = "6282337631513";

    const message =
        `*Konsultasi PPDB SMK 17 Muncar*\n\n` +
        `📌 *Nama:* ${nama}\n` +
        `📌 *EMAIL/NO WA:* ${kontak}\n` +
        `📌 *PESAN:* ${pesan}\n`

    const encoded = encodeURIComponent(message);
    const waLink = `https://wa.me/${noPanitia}?text=${encoded}`;

    window.open(waLink, '_blank');
});