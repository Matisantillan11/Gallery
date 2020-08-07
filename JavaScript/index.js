const images = document.querySelectorAll(".img");
const conteinerImage = document.querySelector(".conteiner-img");

const showImage = document.querySelector(".show")
const text = document.querySelector(".description")
const close = document.querySelector(".bx-x");
const conteinerMessage = document.querySelector(".message-conteiner");
const close2 = document.querySelector(".dos"); 

images.forEach(image => {
    var src = image.getAttribute("src");
    var alt = image.getAttribute("alt");
    image.addEventListener("click",()=>{ 
        addImage(src,alt);
        conteinerImage.classList.toggle("move");
    });
});

close.addEventListener("click", ()=>{
    conteinerImage.classList.toggle("move");
});

close2.addEventListener("click", ()=>{
    conteinerMessage.classList.toggle("move2");
});

const addImage = (srcImage, altImage)=>{
   showImage.src = srcImage;
   text.innerHTML = altImage;
}