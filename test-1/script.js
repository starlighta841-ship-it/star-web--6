const menuOpenBtn = document.querySelector('#Open-menu_btn');
const menuCloseBtn = document.querySelector('#Close-menu_btn');
const Menu = document.querySelector('.nav-menu');
menuOpenBtn.addEventListener("click",() => {
    document.body.classList.toggle("show-mobile_menu");
});

menuCloseBtn.addEventListener("click",() => {
   menuOpenBtn.click();
});