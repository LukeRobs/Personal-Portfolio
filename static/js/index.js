let sideBar = document.getElementById("sidebar")
let closeBtn = document.getElementById("btn")
let searchBtn = document.getElementById("bx-search")

closeBtn.addEventListener("click", ()=>{
    sideBar.classList.toggle("open");
    menuBtnChange();
});

searchBtn.addEventListener("click", ()=>{
    sideBar.classList.toggle("open");
    menuBtnChange();
});

function menuBtnChange() {
    if(sideBar.classList.contains("open")){
        closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");
    }else{
        closeBtn.classList.replace("bx-menu-alt-right", "bx-menu");
    }
}