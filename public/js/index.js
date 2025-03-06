// Search mobile
const search_open = document.querySelector(".search-open");
const search_close = document.querySelector(".search-close");

const header_search = document.querySelector(".header-search");
const header_logo = document.querySelector(".header-logo");
const header_nav = document.querySelector(".header-nav");
const menu_open = document.querySelector(".menu-open");

const has_submenu = document.querySelectorAll(".has-submenu");
const submenu_back = document.querySelector(".submenu-back");

const menu_close = document.querySelector(".menu-close");
const isMobile = () => window.matchMedia("(max-width: 800px)").matches;

search_open.addEventListener("click", () => {
    header_search.classList.add("active");
    header_logo.style.display = "none";
    search_open.style.display = "none";
    menu_open.style.display = "none";
})

search_close.addEventListener("click", () => {
    header_search.classList.remove("active");
    header_logo.style.display = "block";
    search_open.style.display = "block";
    menu_open.style.display = "block";
})

menu_open.addEventListener("click", () => {
    header_nav.classList.add("active");
})

has_submenu.forEach((toggle) => {
    toggle.addEventListener("click", function () {
        toggle.classList.toggle("open");
        submenu_back.classList.add("active");

        const icon = toggle.querySelector(".fa-solid");
        if (icon && isMobile()) {
            icon.style.transform = toggle.classList.contains("open") ? "rotate(90deg)" : "rotate(0deg)";
        }
    });
});

submenu_back.addEventListener("click", () => {
    submenu_back.classList.remove("active");
    has_submenu.forEach((toggle) => {
        toggle.classList.remove("open");
        const icon = toggle.querySelector(".fa-solid");
        if (icon && isMobile()) {
            icon.style.transform = "rotate(0deg)";
        }
    });
});

menu_close.addEventListener("click", () => {
    header_nav.classList.remove ("active");
})


const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
      clickable: true,
    },
  });