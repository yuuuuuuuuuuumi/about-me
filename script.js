window.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper(".swiper-container", {
      // ドットインジケーターの表示
    pagination: {
        el: ".swiper-pagination",
    },
      // 前後スライドボタンを表示
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
      loop: true, // ループの有効化  

      slidesPerView: 1.6, // 表示するスライドの枚数
      centeredSlides: true, // スライドを中央揃えを有効化
    effect: "coverflow",
    coverflowEffect: {
        rotate: 0, // スライドの回転角度
        stretch: 50, // スライドの間隔（px単位）
        depth: 200, // 奥行きの設定（translateをZ方向にpx単位で移動）
        modifier: 1, //
        slideShadows: true, // 先頭スライドのbox-shadowを有効化
    },
    });

})

document.addEventListener("DOMContentLoaded", function () {
  var hamburgerMenu = document.getElementById("hamburger-menu");
  var menuOverlay = document.getElementById("menu-overlay");
  var closeMenu = document.getElementById("close-menu");

  hamburgerMenu.addEventListener("click", function () {
    menuOverlay.classList.toggle("show");
    hamburgerMenu.classList.toggle("open");
  });

  closeMenu.addEventListener("click", function () {
    menuOverlay.classList.remove("show");
    hamburgerMenu.classList.remove("open");
  }); 

  // メニュー項目のリンクを設定
  var menuItems = document.querySelectorAll(".menu-items a");
  menuItems.forEach(function (item) {
    item.addEventListener("click", function () {
      // リンク先にジャンプする前にメニューを閉じる
      menuOverlay.classList.remove("show");
      hamburgerMenu.classList.remove("open");
    });
  });
});
