const nav = document.querySelector("#Nav");
const ButtonOpen = document.querySelector("#ButtonOpen");
const ButtonClose = document.querySelector("#ButtonClose");

ButtonOpen.addEventListener("click", ()=>{
    nav.classList.add("visible");
})