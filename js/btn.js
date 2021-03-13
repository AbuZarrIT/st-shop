const link = document.querySelector (".header-ul-li-link");
const popup = document.querySelector (".header__wraper");
const close = document.querySelector (".header__wraper-heder-logobox-close");

link.addEventListener ("click", function (evt) {
    evt.preventDefault();
    popup.classList.toggle("header__wraper--active");
    
});

close.addEventListener ("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("header__wraper--active");
  });

window.addEventListener("keydown", function (evt){
    if (evt.keyCode === 27){
        if (popup.classList.contains("header__wraper--active")){
            popup.classList.remove("header__wraper--active");
        }}});
