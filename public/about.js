document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah form dari pengiriman secara default

    // Ambil nilai dari setiap input
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // Tampilkan di console
    console.log(`Nama: ${name}, Email: ${email}, Subject: ${subject}, Message: ${message}`);
    

    alert("pesan dikirim");

    // Melakukan reset
    document.getElementById("contact-form").reset();
});