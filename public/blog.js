document.addEventListener("DOMContentLoaded", function () {
  // Data Blog list
  const blogLeft = [
    {name: "5 Makanan Sehat Untuk Menyehatkan Lambung", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi consequuntur possimus repellendus, in aperiam nihil...",},
    {name: "5 Makanan Sehat Untuk Menyehatkan Lambung", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi consequuntur possimus repellendus, in aperiam nihil...",},
    {name: "5 Makanan Sehat Untuk Menyehatkan Lambung", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi consequuntur possimus repellendus, in aperiam nihil...",},
  ];

  // Mengambil elemen ul dengan id blog-list
  const blogList = document.getElementById("blog-list");

  // Memebuat iterasi perulangan melaui list
  blogLeft.forEach((blog, index) => {
    // Membuat elemen li
    const liBlog = document.createElement("li");
    liBlog.className = "pt-4 border-b border-dashed border-green-600 pb-4";

    // Menambahkan atribut data-aos berdasarkan index
    liBlog.setAttribute("data-aos", "fade-left");

    // Menambahkan delay dan durasi animasi
    const delay = 200 * index; // Menambah 200ms untuk setiap item berikutnya
    liBlog.setAttribute("data-aos-delay", delay.toString());
    liBlog.setAttribute("data-aos-duration", "1000");

    // Isi untuk eleman li
    liBlog.innerHTML = `
        <a href="blog-detail.html" class="text-green-600">${blog.name}</a>
            <div class="flex gap-4 pt-2">
                <div class="flex gap-2 text-xs items-center">
                    <span class="material-symbols-outlined">
                        forum
                    </span>
                    <p>3 Komentar</p>
                </div>
                <div class="flex gap-2 text-xs items-center">
                    <span class="material-symbols-outlined">
                        calendar_month
                    </span>
                    <p>20, Feb 2024</p>
                </div>
            </div>
            <p class="text-sm pt-2">${blog.desc}</p>
            <a href="#" class="text-green-400 pt-2 text-sm">Read More</a>
        `;

        // Menambahkan elemen li kedalam blogLIst
        blogList.appendChild(liBlog);
  });
});

document.addEventListener("DOMContentLoaded", function() {
    // Data konten Blog
    const blogKonten = [
        {name: "5 Makanan Sehat Untuk Menyehatkan Lambung", desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non, cumque? Deleniti dicta facere minus suscipit ipsum ipsam similique nobis blanditiis quam at possimus, hic non ipsa facilis velit neque ab dolore iste ea, pariatur beatae animi eius. Saepe, blanditiis similique?"},
        {name: "5 Makanan Sehat Untuk Menyehatkan Lambung", desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non, cumque? Deleniti dicta facere minus suscipit ipsum ipsam similique nobis blanditiis quam at possimus, hic non ipsa facilis velit neque ab dolore iste ea, pariatur beatae animi eius. Saepe, blanditiis similique?"},
        {name: "5 Makanan Sehat Untuk Menyehatkan Lambung", desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non, cumque? Deleniti dicta facere minus suscipit ipsum ipsam similique nobis blanditiis quam at possimus, hic non ipsa facilis velit neque ab dolore iste ea, pariatur beatae animi eius. Saepe, blanditiis similique?"},
        {name: "5 Makanan Sehat Untuk Menyehatkan Lambung", desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non, cumque? Deleniti dicta facere minus suscipit ipsum ipsam similique nobis blanditiis quam at possimus, hic non ipsa facilis velit neque ab dolore iste ea, pariatur beatae animi eius. Saepe, blanditiis similique?"},
        {name: "5 Makanan Sehat Untuk Menyehatkan Lambung", desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non, cumque? Deleniti dicta facere minus suscipit ipsum ipsam similique nobis blanditiis quam at possimus, hic non ipsa facilis velit neque ab dolore iste ea, pariatur beatae animi eius. Saepe, blanditiis similique?"},
        {name: "5 Makanan Sehat Untuk Menyehatkan Lambung", desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non, cumque? Deleniti dicta facere minus suscipit ipsum ipsam similique nobis blanditiis quam at possimus, hic non ipsa facilis velit neque ab dolore iste ea, pariatur beatae animi eius. Saepe, blanditiis similique?"},
    ];

    // Mengambil elemen ul dengan id konten-blog
    const blogKon = document.getElementById("konten-blog");

    // Membuat iterasi perulangan melalui list
    blogKonten.forEach((blog, index) => {
        // Membuat elemen li
        const liKon = document.createElement("li");
        liKon.className = "flex gap-4 items-center pt-4 border-b border-dashed rounded-b-lg border-green-600 pb-4";

        // Menambahkan atribut data-aos berdasarkan index
        liKon.setAttribute("data-aos", "fade-left");

        // Menambahkan delay dan durasi animasi
        const delay = 200 * index; // Menambah 200ms untuk setiap item berikutnya
        liKon.setAttribute("data-aos-delay", delay.toString());
        liKon.setAttribute("data-aos-duration", "1000");

        // Isi untuk elemen li
        liKon.innerHTML = `
        <img src="../image/blog/blog-1.jpg" alt="blog 1" class="w-64 h-40 rounded-lg">
            <div class="flex flex-col">
                <a href="blog-detail.html" class="text-green-600">${blog.name}</a>
                <div class="flex gap-4 pt-2">
                    <div class="flex gap-2 text-xs items-center">
                        <span class="material-symbols-outlined">
                            forum
                        </span>
                        <p>3 Komentar</p>
                    </div>
                    <div class="flex gap-2 text-xs items-center">
                        <span class="material-symbols-outlined">
                            calendar_month
                        </span>
                        <p>20, Feb 2024</p>
                    </div>
                </div>
                <p class="text-sm pt-2">${blog.desc}</p>
                <a href="#" class="text-green-400 pt-2 text-sm">Read More</a>
            </div>
        `;

        // Menambahkan elemen li kedalam blogKon
        blogKon.appendChild(liKon);
    })    
})