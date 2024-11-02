
// Get the header
const header = document.getElementById("header");
const navbar = document.querySelector(".navBar");

// Get the offset position of the navbar
const sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function handleScroll() {
    if (window.pageYOffset > sticky) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
}

// When the user scrolls the page, execute handleScroll
window.onscroll = function() {
    handleScroll();
};



//window.prompt("Hello!")
//window.alert("Welcome")
function updateclock(){
    const now = new Date();
    const hours =now.getHours();
    const minutes =now.getMinutes().toString().padStart(2, 0);
    const seconds =now.getSeconds().toString().padStart(2, 0);
    const timeString = `${hours}:${minutes}:${seconds}`;
    document.getElementById("clock").textContent = timeString;
}
updateclock();
setInterval(updateclock, 1000);


function updatedate(){
    const now = new Date();
    const options ={
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    };
    const formatteddate = now.toLocaleDateString('en-US', options);
    document.getElementById("date").textContent = formatteddate;
}
updatedate();
setInterval(updatedate, 1000);

window.onload = function(){
    const welcomeText = document.getElementsByClassName("header-text")
    welcomeText.style.opacity = 1;
    welcomeText.style.transform = 'TranslateY(0)' ;
  
}


