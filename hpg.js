const menuSelector=document.querySelector("#menu-icon");
const listViewer=document.querySelector(".navlist");
let isMenuShowing=false;

menuSelector.onclick=()=>{
    isMenuShowing=!isMenuShowing;
    menuSelector.classList.toggle('bx-x');
    listViewer.style.display=isMenuShowing?"block":"none";
    
};

