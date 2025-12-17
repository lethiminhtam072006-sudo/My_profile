const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar ul li a");
const header = document.querySelector(".navbar");

window.onscroll = () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    // Điều chỉnh số 150 thành số lớn hơn (ví dụ 200) để nó bắt mục Project nhạy hơn
    if (pageYOffset >= sectionTop - 200) {
      current = section.getAttribute("id");
    }
  });

  // --- 👇 ĐOẠN QUAN TRỌNG: FIX LỖI CHO TRANG NGẮN 👇 ---
  // Kiểm tra: Nếu đã cuộn xuống gần cuối trang (còn 50px nữa là hết)
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 50) {
    current = "contact"; // Ép buộc chuyển sang Contact
  }

  // Cập nhật class 'active' cho menu
  navLinks.forEach((a) => {
    a.classList.remove("active");
    if (a.getAttribute("href").includes(current)) {
      a.classList.add("active");
    }
  });
};
