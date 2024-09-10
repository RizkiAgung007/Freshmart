const add = document.querySelectorAll(".add-icon");
add.forEach((icon) => {
  icon.addEventListener("click", function () {
    // Cari ul yang berada di dalam li terdekat yang memiliki class .item
    let ulElement = this.closest(".item").querySelector(".list-cart");

    // Periksa apakah ulElement ada dan apakah saat ini terlihat
    if (ulElement) {
      if (ulElement.classList.contains("hidden")) {
        // Sembunyikan semua list-cart
        let ulLement = document.querySelectorAll(".list-cart")
        ulLement.forEach((list) => {
          list.classList.add("hidden");
          list.classList.remove("block");
        });

        // Tampilkan ul yang dipilih
        ulElement.classList.remove("hidden");
        ulElement.classList.add("block");
      } else {
        // Sembunyikan ul yang saat ini terlihat
        ulElement.classList.add("hidden");
        ulElement.classList.remove("block");
      }
    }
  });
});

// Menangani class pagination-item
const pagination = document.querySelectorAll(".pagination-item");

pagination.forEach((page) => {
  page.addEventListener("click", function (e) {
    e.preventDefault();

    // Menghapus semua class active dari semua pagination-item
    const pageLink = document.querySelectorAll(".pagination-item");
    pageLink.forEach((link) => {
      link.classList.remove("active");
    });

    // Menambahkan class active pada pagination-item yang diklik
    this.classList.add("active");
  });
});

// Menghapus class active dari semua item ketika mengklik diluar pagination-item
document.addEventListener("click", function (e) {
  if (!e.target.closest(".pagination-item")) {
    pagination.forEach((link) => {
      link.classList.remove("active");
    });
  }
});

document.addEventListener("DOMContentLoaded", function() {
  // Membuat list produk
  const products = [
    {image: "../image/product/1.jpg", name: "Jeruk Arum Manis", rate: 4, price: 80000, sale: 110000, desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi commodi quae rerum placeat incidunt illum rem praesentium deserunt repudiandae perferendis?"},
    {image: "../image/product/2.jpg", name: "Apel Mandarin", rate: 5, price: 95000, sale: 115000, desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi commodi quae rerum placeat incidunt illum rem praesentium deserunt repudiandae perferendis?"},
    {image: "../image/product/3.jpg", name: "Apel Belanda", rate: 3, price: 95000, sale: 115000, desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi commodi quae rerum placeat incidunt illum rem praesentium deserunt repudiandae perferendis?"},
    {image: "../image/product/4.jpg", name: "Jeruk Cina", rate: 4, price: 50000, sale: 90000, desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi commodi quae rerum placeat incidunt illum rem praesentium deserunt repudiandae perferendis?"},
    {image: "../image/product/5.jpg", name: "Roti Nego", rate: 4, price: 34000, sale: 42000, desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi commodi quae rerum placeat incidunt illum rem praesentium deserunt repudiandae perferendis?"},
    {image: "../image/product/6.jpg", name: "Alpukat", rate: 5, price: 90000, sale: 110000, desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi commodi quae rerum placeat incidunt illum rem praesentium deserunt repudiandae perferendis?"},
    {image: "../image/product/7.jpg", name: "Sawo Mateng", rate: 4, price: 65000, sale: 95000, desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi commodi quae rerum placeat incidunt illum rem praesentium deserunt repudiandae perferendis?"},
    {image: "../image/product/8.jpg", name: "Pisang", rate: 3, price: 95000, sale: 115000, desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi commodi quae rerum placeat incidunt illum rem praesentium deserunt repudiandae perferendis?"},
  ];

  // Mengambil elemen ul product-list
  const productList = document.getElementById("product-list");

  // Membuat elemen produk
  products.forEach((item, index) => {
    // Membuat elemen li baru
    const liProduk = document.createElement("li");
    liProduk.className = "pt-2";

    // Menambahkan atribut data-aos berdasarkan index
    liProduk.setAttribute("data-aos", "fade-left");

    // Menambahkan delay dan durasi animasi
    const delay = 100 * index; // Menambah 200ms untuk setiap item berikutnya
    liProduk.setAttribute("data-aos-delay", delay.toString());
    liProduk.setAttribute("data-aos-duration", "500");

    // Membuat isi didalam elemen li
    liProduk.innerHTML =  `
    <div class="flex gap-8 p-3">
      <img src="${item.image}" alt="" class="w-52 h-52 border rounded-lg border-green-400">
      <div class="flex flex-col">
        <h1 class="text-lg font-serif font-medium text-green-600" data-aos ="fade-left" data-aos-delay="200" data-aos-duration="1000">${item.name}</h1>
        <div class="rate flex pt-2" data-aos ="fade-left" data-aos-delay="200" data-aos-duration="1200">
          ${generateRating(item.rate)}
        </div>
        <div class="flex items-center pt-2 gap-4">
          <p class="font-normal font-serif text-lime-600" data-aos ="fade-left" data-aos-delay="200" data-aos-duration="1400">Rp. ${item.price.toLocaleString('id-ID')}</p>
          <p class="line-through font-normal font-serif text-gray-400" data-aos ="fade-left" data-aos-delay="200" data-aos-duration="1500">Rp. ${item.sale.toLocaleString('id-ID')}</p>
        </div>
        <p data-aos ="fade-left" data-aos-delay="200" data-aos-duration="1700">${item.desc}</p>
        <div class="flex gap-4 pt-3">
          <a href="#" class="flex items-center justify-center bg-green-600 hover:bg-green-400 transition-all pr-2 rounded-full" data-aos ="fade-left" data-aos-delay="200" data-aos-duration="1800">
            <img src="../image/icon/cart.png" alt="" class="w-10 h-10 p-2">
            <p class="text-white font-serif">Add to cart</p>
          </a>
          <a href="#"><img src="../image/icon/fav-white.png" alt="" class="w-10 h-10 bg-green-600 hover:bg-green-400 transition-all p-2 rounded-full" data-aos ="fade-left" data-aos-delay="200" data-aos-duration="1900"></a>
          <a href="detail.html"><img src="../image/icon/eye.png" alt="" class="w-10 h-10 bg-green-600 hover:bg-green-400 transition-all p-2 rounded-full" data-aos ="fade-left" data-aos-delay="200" data-aos-duration="2000"></a>
        </div>
      </div>
    </div>
    `;

    // Menambahkan elemen li kedalam product-list
    productList.appendChild(liProduk);
  });

// Fungsi untuk menghasilkan bintang rating
function generateRating(rate) {
  let stars = "";
  // Loop untuk membuat bintang berdasarkan rating
  for (let i = 0; i < 5; i++) {
    // Pilih gambar bintang yang sesuai berdasarkan rating menggunakan if...else
    if (i < rate) {
      stars += `<img src="../image/icon/yellow.svg" alt="Star" class="w-4 h-4">`;
    } else {
      stars += `<img src="../image/icon/normal.svg" alt="Star" class="w-4 h-4">`;
    }
  }
  return stars; // Kembalikan  rating
}
});

  
// Back to Top
document.addEventListener("DOMContentLoaded", function () {
  const backTopButtons = document.querySelectorAll(".back-to-top");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      backTopButtons.forEach(button => 
        button.classList.add("active"));
    } else {
      backTopButtons.forEach(button => 
        button.classList.remove("active"));
    }
  });
});