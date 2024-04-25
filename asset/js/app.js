// let searchForm = document.querySelector('.search-form');
// document.querySelector('#search-btn').onclick = () =>{
//     searchForm.classList.toggle('active');
// }
// window.onscroll = () =>{
//     searchForm.classList.remove('active');
// }

    const initslider =() =>{

const imageList = document.querySelector(".slider-wrapper .image-list");
    const slideButtons = document.querySelectorAll(".slider-wrapper .fa-solid");

//slide image according to button click
    slideButtons.forEach(button => {
button.addEventListener("click", () => {
 const direction = button.id === "prev-slide" ? -1 : 1;
const scrollAmount = imageList.clienWidth * direction
imageList.scrollBy({left: scrollAmount, behavior: "smooth" });

});
});
}

window.addEventListener("load", initslider);

if(this.scrollY > 500){
    
}