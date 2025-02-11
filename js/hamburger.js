document.addEventListener("DOMContentLoaded", function () {
  // Toggle Sidebar
  document.querySelector(".hamburger").addEventListener("click", function () {
      document.getElementById("sidebar").classList.toggle("open");
  });

  // Toggle Sidebar Dropdown Menu
  document.querySelectorAll('.dropdown-btn').forEach(btn => {
      btn.addEventListener('click', function (e) {
          e.preventDefault();
          let submenu = this.nextElementSibling;
          let arrow = this.querySelector('.arrow');

          // ปิดเมนูอื่นก่อนเปิดใหม่
          document.querySelectorAll('.sidebar-links ul').forEach(menu => {
              if (menu !== submenu) {
                  menu.classList.remove('open');
                  let otherArrow = menu.previousElementSibling.querySelector('.arrow');
                  if (otherArrow) otherArrow.textContent = "▶";
              }
          });

          submenu.classList.toggle('open');
          arrow.textContent = submenu.classList.contains('open') ? "▼" : "▶";
      });
  });

  // Toggle User Info Dropdown
  document.querySelector(".user-info-btn").addEventListener("click", function (event) {
      event.stopPropagation();
      document.getElementById("dropdown-content").classList.toggle("show");
  });

  // ปิด dropdown ถ้าคลิกที่อื่น
  document.addEventListener("click", function (event) {
      const dropdown = document.getElementById("dropdown-content");
      if (!event.target.closest(".user-info")) {
          dropdown.classList.remove("show");
      }
  });
});
