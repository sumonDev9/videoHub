
// menu toggle and sidebar
var menuIcons = document.querySelector(".fa-bars");
var sidebar = document.querySelector(".sidebar");

menuIcons.onclick = function(){
    sidebar.classList.toggle("small-sidebar");
}

// dark and light mode
let themeBtn = document.querySelector("#theme-btn");

themeBtn.onclick = () =>{
    themeBtn.classList.toggle('fa-moon');

    if(themeBtn.classList.toggle('fa-sun')){
        document.body.classList.add("active");
    }
    else{
        document.body.classList.remove('active');
    }
}







// let themeBtn =document.querySelector('#theme-btn');

// themeBtn.onclick = () =>{
//     themeBtn.classList.toggle('fa-sun');

//     if(themeBtn.classList.toggle('fa-moon')){
//         document.body.classList.add('active');
//     }
//     else{
//         document.body.classList.remove('active');
//     }
// }