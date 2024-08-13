var menuIcons = document.querySelector(".fa-bars");
var sidebar = document.querySelector(".sidebar");

menuIcons.onclick = function(){
    sidebar.classList.toggle("small-sidebar");
}