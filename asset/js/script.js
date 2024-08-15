
// menu toggle and sidebar
var menuIcons = document.querySelector(".fa-bars");
var sidebar = document.querySelector(".sidebar");
// .large-main toggle 
var main = document.querySelector(".main");

menuIcons.onclick = function(){
    sidebar.classList.toggle("small-sidebar");
    // .large-main toggle 
    main.classList.toggle("large-main");
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

// text silder
const tabBox = document.querySelector(".tab-box"),

allTabs = document.querySelectorAll(".tabsLink"),
arrowIcons = document.querySelectorAll(".sildeIcons i");
 
let isDragging = false;

const handleIcons = () => {
    let scrollVal = Math.round(tabBox.scrollLeft);
    let maxScrollableWidth = tabBox.scrollWidth - tabBox.clientWidth;

    arrowIcons[0].parentElement.style.display = scrollVal > 0 ? "flex" : "none";
    arrowIcons[1].parentElement.style.display = maxScrollableWidth > scrollVal ? "flex" : "none";
}

arrowIcons.forEach(sildeIcons => {
    sildeIcons.addEventListener("click", () =>{
        // console.log(sildeIcons.id);

        // if clicked icon is left, reduce 350 form tabbox scrolleft else add
        tabBox.scrollLeft += sildeIcons.id === "left" ? -350 : 350;
        setTimeout(() => handleIcons(), 50); // calling handleIcons after 50 milisecond
    })
});


allTabs.forEach(tabsLink => {
    tabsLink.addEventListener("click", () =>{
        tabBox.querySelector(".active").classList.remove("active");
        tabsLink.classList.add("active");

    })
});

const dragging = (e) => {
    if(!isDragging) return;
    tabBox.classList.add("dragging");
    //console.log("dragging...")
    tabBox.scrollLeft -= e.movementX;
    handleIcons();
}

 const dragStop = () =>{
    isDragging = false;
    tabBox.classList.remove("dragging");
 }

tabBox.addEventListener("mousedown", () => isDragging = true);
tabBox.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);







