const toggles = document.querySelectorAll(".toggle-drop");

toggles.forEach((toggle) => {
  toggle.addEventListener("click", (event) => {
    event.stopPropagation(); // Mencegah klik pada tombol menutup dropdown secara langsung
    // Menutup semua dropdown yang terbuka
    document
      .querySelectorAll(".drop-down, .drop-flag, .drop-curr")
      .forEach((dropdown) => {
        dropdown.classList.add("hidden");
      });
    // Menaktifkan dropdown yang sesuai dengan tombol yang diklik
    const dropdown = toggle.querySelector("ul");
    dropdown.classList.toggle("hidden");
  });
});

// Menutup dropdown ketika mengklik di luar dropdown
document.addEventListener("click", () => {
  document
    .querySelectorAll(".drop-down, .drop-flag, .drop-curr")
    .forEach((dropdown) => {
      dropdown.classList.add("hidden");
    });
});

// Membuat slideshow Banner
document.addEventListener("DOMContentLoaded", function () {
  const image = [
    "../image/slideshow/home2-slideshow-1.jpg",
    "../image/slideshow/home2-slideshow-2.jpg",
    "../image/slideshow/home2-slideshow-3.jpg",
  ];

  let index = 0;
  const heroBanner = document.querySelector(".hero-banner");

  // Membuat fungsi untuk mengganti background
  function changeBackground() {
    heroBanner.style.opacity = 0; // Menghilangkan elemen terlebih dahulu
    setTimeout(() => {
      heroBanner.style.backgroundImage = `url('${image[index]}')`;
      heroBanner.style.opacity = 1; // Munculkan elemen kembali
      index = (index + 1) % image.length;
    }, 500); // Menunggu sebelum mengganti gambar untuk efek transisi
  }
  // Memanggil fungsi changeBackground
  changeBackground();
  // Membuat interval untuk mengganti background secara terus menerus
  setInterval(changeBackground, 3000);
});

document.addEventListener("DOMContentLoaded", function () {
  // Mendapatkan referensi ke elemen tombol berdasarkan ID mereka
  const newArrBtn = document.getElementById("newarr-btn");
  const bestBtn = document.getElementById("best-btn");
  const saleBtn = document.getElementById("sale-btn");

  // Mendapatkan referensi ke elemen <ul> berdasarkan ID mereka
  const newArrList = document.getElementById("newarr");
  const bestList = document.getElementById("best");
  const saleList = document.getElementById("sale");

  // Fungsi untuk menampilkan bagian yang dipilih dan menyembunyikan bagian lainnya
  function showSection(sectionToShow) {
    // Menyembunyikan semua elemen <ul> dengan menambahkan kelas 'hidden'
    newArrList.classList.add("hidden");
    bestList.classList.add("hidden");
    saleList.classList.add("hidden");

    // Menampilkan elemen <ul> yang dipilih dengan menghapus kelas 'hidden'
    sectionToShow.classList.remove("hidden");
  }

  // Menambahkan event listener untuk tombol 'New Arrivals'
  newArrBtn.addEventListener("click", function (e) {
    e.preventDefault(); // Mencegah perilaku default dari link
    showSection(newArrList); // Menampilkan daftar 'New Arrivals'

    // Mengubah kelas latar belakang tombol untuk menandakan tombol aktif
    newArrBtn.classList.replace("bg-lime-800", "bg-lime-600");
    bestBtn.classList.replace("bg-lime-600", "bg-lime-800");
    saleBtn.classList.replace("bg-lime-600", "bg-lime-800");
  });

  // Menambahkan event listener untuk tombol 'Best Seller'
  bestBtn.addEventListener("click", function (e) {
    e.preventDefault(); // Mencegah perilaku default dari link
    showSection(bestList); // Menampilkan daftar 'Best Seller'

    // Mengubah kelas latar belakang tombol untuk menandakan tombol aktif
    bestBtn.classList.replace("bg-lime-800", "bg-lime-600");
    newArrBtn.classList.replace("bg-lime-600", "bg-lime-800");
    saleBtn.classList.replace("bg-lime-600", "bg-lime-800");
  });

  // Menambahkan event listener untuk tombol 'On Sale'
  saleBtn.addEventListener("click", function (e) {
    e.preventDefault(); // Mencegah perilaku default dari link
    showSection(saleList); // Menampilkan daftar 'On Sale'

    // Mengubah kelas latar belakang tombol untuk menandakan tombol aktif
    saleBtn.classList.replace("bg-lime-800", "bg-lime-600");
    newArrBtn.classList.replace("bg-lime-600", "bg-lime-800");
    bestBtn.classList.replace("bg-lime-600", "bg-lime-800");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Data produk untuk berbagai kategori
  const productData = {
    // Produk NewArrival
    newArrival: [
      {image: "../image/product/15.jpg", name: "Timun", rating: 5, price: 50000},
      {image: "../image/product/20.jpg", name: "Paprika Oren", rating: 3, price: 90000},
      {image: "../image/product/26.jpg", name: "Paprika Merah", rating: 4, price: 90000},
      {image: "../image/product/12.jpg", name: "Kubis", rating: 5, price: 70000},
    ],
    // Produk BestSeller
    bestSeller: [
      {image: "../image/product/12.jpg", name: "Kubis", rating: 4, price: 70000},
      {image: "../image/product/11.jpg", name: "Brokoli", rating: 4, price: 100000},
      {image: "../image/product/17.jpg", name: "Terong", rating: 4, price: 80000},
      {image: "../image/product/15.jpg", name: "Timun", rating: 4, price: 50000}
    ],
    // Produk OnSale
    onSale: [
      {image: "../image/product/41.png", name: "Cabai Rawit", rating: 3, price: 85000},
      {image: "../image/product/42.png", name: "Bawang Putih", rating: 5, price: 65000},
      {image: "../image/product/43.png", name: "Tomat", rating: 4, price: 50000},
      {image: "../image/product/44.png", name: "Bawang Merah", rating: 4, price: 65000}
    ]
  };

  // Fungsi untuk menampilkan produk ke dalam kontainer
  function displayProducts(category, products) {
    // Dapatkan elemen kontainer berdasarkan ID kategori
    const container = document.getElementById(category);

    // Iterasi melalui setiap produk dalam kategori
    products.forEach(product => {
      // Buat elemen <li> baru
      const li = document.createElement('li');
      li.className = "border rounded-lg cart-item m-2 p-4"; // Tambahkan kelas untuk styling

      // Isi HTML untuk elemen <li> dengan detail produk
      li.innerHTML = `
        <div class="flex flex-col items-center relative">
            <img src="${product.image}" alt="${product.name}" class="w-44 h-44"> <!-- Gambar produk -->
            <h1 class="pt-6 text-lime-800 text-2xl font-serif">${product.name}</h1> <!-- Nama produk -->
            <div class="rate flex pt-2">
                ${generateRating(product.rating)} <!-- Rating produk -->
            </div>
            <p class="pt-3 text-xl price text-lime-600 font-semibold font-serif">Rp. ${product.price.toLocaleString()}</p> <!-- Harga produk -->
            <div class="flex icon-hide gap-4">
                <a href="#"><img src="../image/icon/cart.png" alt="Add to cart" class="w-8 h-8 bg-lime-800 hover:bg-lime-500 rounded-full p-2"></a> <!-- Ikon tambahkan ke keranjang -->
                <a href="#"><img src="../image/icon/fav-white.png" alt="Add to favorites" class="w-8 h-8 bg-lime-800 hover:bg-lime-500 rounded-full p-2"></a> <!-- Ikon tambahkan ke favorit -->
                <a href="detail.html"><img src="../image/icon/eye.png" alt="View" class="w-8 h-8 bg-lime-800 hover:bg-lime-500 rounded-full p-2"></a> <!-- Ikon lihat detail -->
            </div>
        </div>
      `;

      // Tambahkan elemen <li> ke dalam kontainer
      container.appendChild(li);
    });
  }

  // Fungsi untuk menghasilkan bintang rating
function generateRating(rating) {
  let stars = '';
  // Loop untuk membuat bintang berdasarkan rating
  for (let i = 0; i < 5; i++) {
    // Pilih gambar bintang yang sesuai berdasarkan rating menggunakan if...else
    if (i < rating) {
      stars += `<img src="../image/icon/yellow.svg" alt="Star" class="w-4 h-4">`;
    } else {
      stars += `<img src="../image/icon/normal.svg" alt="Star" class="w-4 h-4">`;
    }
  }
  return stars; // Kembalikan  rating
}


  // Menampilkan produk di kategori masing-masing
  displayProducts('newarr', productData.newArrival); // Menampilkan produk terbaru
  displayProducts('best', productData.bestSeller);   // Menampilkan produk terlaris
  displayProducts('sale', productData.onSale);       // Menampilkan produk diskon
});

// Produk New Arrival
// Data produk yang ingin ditambahkan
const products = [
  {imgSrc: '../image/product/1.jpg', name: 'Sawo', rating: 3, price: 'Rp. 60.000'},
  {imgSrc: '../image/product/1.jpg', name: 'Sawo', rating: 4, price: 'Rp. 60.000'},
  {imgSrc: '../image/product/1.jpg', name: 'Sawo', rating: 5, price: 'Rp. 60.000'},
  {imgSrc: '../image/product/1.jpg', name: 'Sawo', rating: 3, price: 'Rp. 60.000'},
  // Tambahkan lebih banyak produk jika diperlukan
];

// Ambil elemen ul
const productList = document.getElementById('produk-list');

// Iterasi Melalui data products
products.forEach((prod, index) => {
  // Membuat elemen li baru
  const liPro = document.createElement("li");
  liPro.className = "cart-item border border-black border-dashed group";

  // Menambahkan atribut data-aos berdarkan index
  liPro.setAttribute("data-aos", "fade-up");

  // Menambahkan delay dan durasi animasi
  const delay = 200 * index; // Menambah 200ms untuk setiap item berikutnya
  liPro.setAttribute("data-aos-delay", delay.toString());
  liPro.setAttribute("data-aos-duration", "1000");

  liPro.innerHTML = `
  <div class="flex items-start relative">
    <img src="${prod.imgSrc}" alt="" class="w-28 h-28 pr-4">
      <div class="flex justify-between w-full">
        <div>
          <h1 class="font-semibold font-serif text-2xl pb-2 pt-2">${prod.name}</h1>
            <div class="flex pb-2 rate">
            ${generateRating(prod.rating)}
            </div>
            <p class="text-lime-800 font-serif text-xl">${prod.price}</p>
        </div>
        <div class="gap-2 mt-2 mr-2 icon-right">
          <a href="#"><img src="../image/icon/cart.png" alt="" class="w-8 h-8 bg-lime-800 hover:bg-lime-500 rounded-full p-2"></a>
          <a href="#"><img src="../image/icon/fav-white.png" alt="" class="w-8 h-8 bg-lime-800 hover:bg-lime-500 rounded-full p-2"></a>
          <a href="detail.html"><img src="../image/icon/eye.png" alt="" class="w-8 h-8 bg-lime-800 hover:bg-lime-500 rounded-full p-2"></a>
        </div>
      </div>
  </div>
  `;

  // Menambahkan liPro kedalam productList
  productList.appendChild(liPro)
})

function generateRating(rating) {
  let star = "";
  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      // Jika i kurang dari rating, gunakan bintang kuning
      star += `<img src="../image/icon/yellow.svg" alt="star" class="w-4 h-4">`;
    } else {
      // Jika i sama dengan atau lebih besar dari rating, gunakan bintang normal
      star += `<img src="../image/icon/normal.svg" alt="star" class="w-4 h-4">`;
    }
  }
  return star;
}
// Tambahkan produk ke dalam ul
products.forEach(product => {
  productList.innerHTML += createProductItem(product);
});


// Back To Top Functionality
document.addEventListener("DOMContentLoaded", function () {
  const backTopButtons = document.querySelectorAll (".back-to-top");

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


