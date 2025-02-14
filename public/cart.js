// Menunggu seluruh konten halaman dimuat sebelum menjalankan script
document.addEventListener("DOMContentLoaded", function () {
  let cartItems = []; // Array untuk menyimpan item yang ada di keranjang

  // Menangani klik pada tombol "Add to cart"
  let addCart = document.querySelectorAll(".add-to-cart");
  addCart.forEach((button) => {
    button.addEventListener("click", function (e) {
      e.preventDefault(); // Mencegah aksi default dari elemen tombol

      // Mencari kontainer produk terdekat dari tombol yang diklik
      const productContainer = this.closest("div[data-aos]");

      // Mengambil input kuantitas dari elemen input kuantitas
      const quantityInput = productContainer.querySelector(".quantity");
      const quantity = parseInt(quantityInput.value, 10); // Mengkonversi string menjadi integer basis 10
      if (isNaN(quantity) || quantity <= 0) return; // Mengabaikan jika kuantitas tidak valid atau nol

      // Mengambil detail item produk
      const itemName = productContainer.querySelector("h1").textContent; // Nama item
      const itemPrice = parseInt(
        productContainer
          .querySelector(".price")
          .textContent.replace("Rp. ", "")
          .replace(".", ""), // Harga item
        10
      );
      const itemImage = productContainer.querySelector("img").src; // URL gambar item

      // Mengecek apakah item sudah ada di keranjang
      const existingItem = cartItems.find((item) => item.name === itemName);

      if (existingItem) {
        // Jika item sudah ada, tambahkan kuantitasnya
        existingItem.quantity += quantity;
      } else {
        // Jika item belum ada, tambahkan item baru ke keranjang
        cartItems.push({
          name: itemName,
          price: itemPrice,
          quantity: quantity,
          image: itemImage,
        });
      }

      updateCartCount(); // Memperbarui jumlah total item di keranjang
      updateCartModal(); // Memperbarui tampilan modal keranjang
    });
  });

  // Menangani klik pada ikon keranjang
  const cartIcon = document.getElementById("cart-icon")
  cartIcon.addEventListener("click", function () {
    const cartModal = document.getElementById("cart-modal")
    cartModal.classList.remove("hidden"); // Menampilkan atau menyembunyikan modal keranjang
  });

  // Menangani klik pada tombol tutup modal keranjang
  const closeCart = document.getElementById("close-cart")
  closeCart.addEventListener("click", function () {
    const closeModal = document.getElementById("cart-modal")
    closeModal.classList.add("hidden"); // Menyembunyikan modal keranjang
  });

  // Fungsi untuk memperbarui jumlah item di ikon keranjang
  function updateCartCount() {
    const itemCount = cartItems.length;
    const cartCount = document.getElementById("cart-count")
    cartCount.textContent = itemCount;
    if (itemCount > 0) {
      const showCount =  document.getElementById("cart-count")
      showCount.classList.remove("hidden"); // Menampilkan jumlah jika ada item
    } else {
      const hideCount = document.getElementById("cart-count")
      hideCount.classList.add("hidden"); // Menyembunyikan jumlah jika tidak ada item
    }
  }

  // Fungsi untuk memperbarui tampilan modal keranjang
  function updateCartModal() {
    const cartItemsList = document.getElementById("cart-items");
    cartItemsList.innerHTML = ""; // Menghapus konten lama di modal

    let total = 0; // Variabel untuk menyimpan total harga

    cartItems.forEach((item) => {
      const totalPrice = item.price * item.quantity; // Menghitung total harga untuk item ini
      total += totalPrice; // Menambahkan total harga item ke total keseluruhan

      const listItem = document.createElement("li");
      listItem.className = "flex items-center gap-4 mb-4";
      listItem.innerHTML = `
                <img src="${item.image}" alt="${item.name}" class="w-16 h-16 object-cover">
                <div>
                    <h3 class="text-lg font-bold">${item.name}</h3>
                    <p>Price: Rp. ${item.price.toLocaleString()}</p>
                    <p>Quantity: ${item.quantity}</p>
                    <p>Total: Rp. ${totalPrice.toLocaleString()}</p>
                    <div class="flex items-center gap-2 mt-2">
                        <button class="update-quantity decrease bg-red-500 text-white px-2 py-1 rounded">-</button>
                        <span class="quantity">${item.quantity}</span>
                        <button class="update-quantity increase bg-green-500 text-black px-2 py-1 rounded">+</button>
                    </div>
                </div>
            `;
      cartItemsList.appendChild(listItem); // Menambahkan item ke dalam modal

      // Menambahkan event listener pada tombol update kuantitas
      const updateQuantity = document.querySelectorAll(".update-quantity")
      updateQuantity.forEach((button) => {
        button.addEventListener("click", function () {
          const listItem = this.closest("li");
          const itemName = listItem.querySelector("h3").textContent;
          const quantitySpan = listItem.querySelector(".quantity");
          const currentQuantity = parseInt(quantitySpan.textContent, 10);
          const isIncrease = this.classList.contains("increase");

          const item = cartItems.find((item) => item.name === itemName);

          if (isIncrease) {
            // Menambah kuantitas jika tombol '+' diklik
            item.quantity += 1;
            cartItems = cartItems.map((cartItem) =>
              cartItem.name === itemName
                ? { ...cartItem, quantity: item.quantity }
                : cartItem
            );
          } else if (item.quantity > 1) {
            // Mengurangi kuantitas jika tombol '-' diklik
            item.quantity -= 1;
            cartItems = cartItems.map((cartItem) =>
              cartItem.name === itemName
                ? { ...cartItem, quantity: item.quantity }
                : cartItem
            );
          }

          // Memperbarui kuantitas dan total di modal
          quantitySpan.textContent = item.quantity;
          updateCartModal();
          updateCartCount();
        });
      });
    });

    document.getElementById(
      "cart-total"
    ).textContent = `Total: Rp. ${total.toLocaleString()}`;
  }
});
