document.addEventListener("DOMContentLoaded", function () {
  const descBtn = document.getElementById("desc-btn");
  const infoBtn = document.getElementById("info-btn");
  const reviewBtn = document.getElementById("uls-btn");

  const descList = document.getElementById("deskripsi");
  const infoList = document.getElementById("info");
  const reviewList = document.getElementById("ulasan");

  // Fungsi untuk menampilkan bagian yang dipilih ketika diklik
  function showList(showToList) {
    // Menyembunyikan seluruh elemen dengan class hidden
    descList.classList.add("hidden");
    infoList.classList.add("hidden");
    reviewList.classList.add("hidden");

    // Menampilkan elemen yang dipilih ketika diklik
    showToList.classList.remove("hidden");
  }

  // Menambahkan listener untuk tombol yang diklik
  descBtn.addEventListener("click", function (e) {
    e.preventDefault();
    showList(descList);
  });

  infoBtn.addEventListener("click", function (e) {
    e.preventDefault();
    showList(infoList);
  });

  reviewBtn.addEventListener("click", function (e) {
    e.preventDefault();
    showList(reviewList);
  });
});

// Mengambil nilai form dari id reviewForm
const form = document.getElementById("reviewForm");
form.addEventListener("submit", function (e) {
  e.preventDefault();

  // Ambil nilai dari input form
  const imageInput = document.getElementById("imageInput");
  const imageUrl = URL.createObjectURL(imageInput.files[0]);
  const name = document.getElementById("nameInput").value;
  const description = document.getElementById("descInput").value;
  const rating = document.getElementById("ratingInput").value;

  // Tanggal hari ini
  const today = new Date().toLocaleDateString("en-GB");

  // Buat elemen ulasan baru
  const reviewItem = document.createElement("li");
  reviewItem.classList.add("pb-4");

  reviewItem.innerHTML = `
    <li class="pb-4 pt-4 border-b rounded-lg border-green-400">
        <div class="flex gap-4">
            <img src="${imageUrl}" alt="" class="w-20 h-20 object-cover">
            <div class="flex flex-col">
                <div class="flex items-center gap-6">
                    <h3 class="text-xl font-serif text-gray-600">${name}</h3>
                    <p>${today}</p>
                </div>
                <div class="flex pt-1">
                    ${'<img src="../image/icon/yellow.svg" alt="" class="w-4 h-4">'.repeat(
                      rating
                    )}
                    ${'<img src="../image/icon/normal.svg" alt="" class="w-4 h-4">'.repeat(
                      5 - rating
                    )}
                </div>
                <p class="text-gray-400">${description}</p>
            </div>
        </div>
    </li>
    `;

  // Menambahkan elemen baru ke dalam ulasan
  document.getElementById("reviewList").appendChild(reviewItem);

  // Mereset form setelah submit
  document.getElementById("reviewForm").reset();
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
  