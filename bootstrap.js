window.addEventListener("load", enableMobileMenu);
window.addEventListener("resize", enableMobileMenu);

function enableMobileMenu() {
  let menu = document.querySelector(".menu"),
    links = document.querySelector(".links");
  if (window.innerWidth <= 1024) {
    menu.addEventListener("click", () => {
      menu.classList.toggle("opened");
      links.classList.toggle("show");
    });
  } else {
    if (menu.classList.contains("opened")) menu.classList.remove("opened");
    if (links.classList.contains("show")) links.classList.remove("show");
  }
}


$(".option").click(function(){
  $(".option").removeClass("active");
  $(this).addClass("active");
  
});
const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContaine$.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})

