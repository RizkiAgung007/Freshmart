  const blogForm = document.getElementById("review-form");
  blogForm.addEventListener("submit", function (event) {
    // Mencegah form dari pengiriman default (refresh halaman)
    event.preventDefault();

    // Mengambil nilai input dari form
    const name = document.getElementById("name").value;
    const description = document.getElementById("description").value;
    const rate = document.getElementById("rate").value;
    const imageFile = document.getElementById("image").files[0];

    // Mendapatkan elemen yang akan menampung daftar ulasan
    const reviewList = document.getElementById("review-list");

    // Mendapatkan tanggal saat ini
    const now = new Date().toLocaleDateString("en-GB"); // Format tanggal: DD/MM/YYYY

    // Membuat elemen list baru untuk ulasan
    const reviewItem = document.createElement("li");
    reviewItem.className = "flex gap-4 mb-4 pt-6"; // Menambahkan kelas CSS untuk styling

    // Membaca file gambar dan membuat URL
    let imageUrl = "";
    if (imageFile) {
      // Jika ada file gambar yang dipilih
      const reader = new FileReader();
      reader.onload = function (e) {
        // Setelah gambar dibaca, menyimpan URL gambar dalam variabel
        imageUrl = e.target.result;

        // Menambahkan konten ulasan ke elemen reviewItem setelah gambar dimuat
        reviewItem.innerHTML = `
                <img src="${imageUrl}" alt="Review Image" class="w-24 h-24 object-cover">
                <div class="flex flex-col">
                    <div class="flex gap-2 items-center">
                        <p>${name}</p>
                        <p>-</p>
                        <p class="text-xs">${now}</p>
                    </div>
                    <div class="flex">
                        ${Array.from({ length: 5 }, (_, index) => {
                          // Membuat bintang rating berdasarkan nilai rate
                          return index < rate
                            ? '<img src="../image/icon/yellow.svg" alt="" class="w-4 h-4">'
                            : '<img src="../image/icon/normal.svg" alt="" class="w-4 h-4">';
                        }).join("")}
                    </div>
                    <p class="pt-3">${description}</p>
                </div>
            `;
        reviewList.appendChild(reviewItem); // Menambahkan elemen reviewItem ke daftar ulasan
      };
      reader.readAsDataURL(imageFile); // Membaca file gambar sebagai URL data
    }

    // Menghapus data di form setelah ulasan ditambahkan
    document.getElementById("review-form").reset();
  });
