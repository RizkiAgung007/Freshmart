document.addEventListener("DOMContentLoaded", function () {
  // Data review
  const reviews = [
    {image: "../image/avatar/anna.jpg", name: "Anna Laura", rating: 4, date: "20/04/2024", desc: "Lorem ipsum dolor sit amer container adipiciting",},
    {image: "../image/avatar/anna.jpg", name: "Anna Laura", rating: 4, date: "20/04/2024", desc: "Lorem ipsum dolor sit amer container adipiciting ipsum dolor sit amer container adipiciting",},
    {image: "../image/avatar/anna.jpg", name: "Anna Laura", rating: 4, date: "20/04/2024", desc: "Lorem ipsum dolor sit amer container adipiciting ipsum dolor sit amer container adipiciting ipsum dolor sit amer container adipiciting",},
    {image: "../image/avatar/anna.jpg", name: "Anna Laura", rating: 4, date: "20/04/2024", desc: "Lorem ipsum dolor sit amer container adipiciting ipsum dolor sit amer container adipiciting ",},
  ];

  // Mengambil elemen review-item
  const reviewItem = document.getElementById("review-item");

  // Iterasi melalui data review untuk membuat elemen <li>
  reviews.forEach((review, index) => {
    // Membuat elemen <li> baru
    const liRev = document.createElement("li");
    liRev.className = "w-[300px] bg-white shadow-lg rounded-lg";

    // Menambahkan atribut data-aos berdasarkan index
    liRev.setAttribute("data-aos", "fade-left");

    // Menambahkan delay dan durasi animasi
    const delay = 200 * index; // Menambah 200ms untuk setiap item berikutnya
    liRev.setAttribute("data-aos-delay", delay.toString());
    liRev.setAttribute("data-aos-duration", "1000");

    //   isi untuk elemen li
    liRev.innerHTML = `
    <div class="bg-green-400 flex p-2 items-center justify-between rounded-t-lg">
        <div class="flex items-center gap-4">
            <img src="${review.image}" alt="${review.name}" class="w-12 h-12 rounded-full object-cover">
            <div class="flex flex-col">
                <h1 class="text-white">${review.name}</h1>
                <p class="text-xs text-gray-400">${review.date}</p>
            </div>
        </div>
        <div class="flex gap-2">
            <img src="../image/svg/like.svg" alt="" class="w-6 h-6 cursor-pointer">
            <img src="../image/svg/dislike.svg" alt="" class="w-6 h-6 cursor-pointer">
        </div>
    </div>
    <div class="p-2 pt-3">
        <p class="text-justify">${review.desc}</p>
        <div class="rate flex pt-3 items-center">
            ${generateRating(review.rating)}
        </div>
    </div>`;

    // Menambahkan elemen li kedalam review-item
    reviewItem.appendChild(liRev);
  });

  // Membuat fungsi untuk rating
  function generateRating(rating) {
    let stars = "";
    // Melakukan looping untuk membuat bintang berdasarkan rate
    for (let i = 0; i < 5; i++) {
      stars += `<img src= "../image/icon/${
        i < rating ? "yellow" : "normal"
      }.svg" alt="star" class="w-4 h-4">`;
    }
    return stars;
  }
});
