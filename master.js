let saturate = document.querySelector("#saturate");
let contrast = document.querySelector("#contrast");
let brightness = document.querySelector("#brightness");
let sepia = document.querySelector("#sepia");
let grayscale = document.querySelector("#grayscale");
let blur = document.querySelector("#blur");
let hueRotate = document.querySelector("#hue");
let reset = document.querySelector(".reset");
let download = document.querySelector(".download");
let upload = document.getElementById("upload");
let image = document.querySelector("img");
let canvas = document.querySelector("#canvas");
var ctx = canvas.getContext("2d");
console.log(upload);
window.onload = ()=>{
    reset.style.display = "none";
    download.style.display = "none";
    image.style.display  = "none";
}
//to upload image
upload.addEventListener("change", ()=>{
    reset.style.display = "block";
    download.style.display = "block";
    // image.style.display  = "block";
    resetFunction();
    let file = new FileReader();
    file.readAsDataURL(upload.files[0]);
    file.onload = ()=>{
        image.src = file.result;
    }
    image.onload = function(){
        canvas.width = image.width;
        canvas.height = image.height;
        ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
        image.style.display = "none";
    }
});
// tp applay filters on image
let filters = document.querySelectorAll(".filter-box input");
 applayFilters();

reset.addEventListener("click",()=>{
    resetFunction();
});
download.onclick = function(){
    download.href = canvas.toDataURL();
}
function resetFunction(){
    saturate.value = 100;
    contrast.value = 100;
    brightness.value = 100;
    sepia.value = 0;
    grayscale.value = 0;
    blur.value = 0;
    hueRotate.value = 0;
    ctx.filter = `
    saturate(${saturate.value}%)
    contrast(${contrast.value}%)
    brightness(${brightness.value}%)
    sepia(${sepia.value}%)
    grayscale(${grayscale.value}%)
    blur(${blur.value}px)
    hue-rotate(${hueRotate.value}deg)`;
    ctx.drawImage(image, 0, 0, canvas.width, canvas.height);

}
function applayFilters(){
    filters.forEach(filter =>{
        filter.addEventListener("input", ()=>{
            console.log(ctx);
            
            ctx.filter = `
            saturate(${saturate.value}%)
            contrast(${contrast.value}%)
            brightness(${brightness.value}%)
            sepia(${sepia.value}%)
            grayscale(${grayscale.value}%)
            blur(${blur.value}px)
            hue-rotate(${hueRotate.value}deg)`;
            ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
            image.style.display = "none";
        })
    })
      
}
