
function linkClicked(e, url){
    e.preventDefault();

    const slider = document.querySelector(".slider")
    slider.classList.remove("move-down")

    document.body.scrollTop = 0;
    setTimeout(function() {
          window.location.href = url;
    }, 1000);
};

document.addEventListener("DOMContentLoaded", () => {
    const slider = document.querySelector(".slider")
    setTimeout(function() {
        slider.classList.add("move-down")
  }, 200);

    const homePage = "/index.html"; 
    const aboutPage = "/about.html"; 
    const menuPage = "/menu.html"; 
    const reservePage = "/reserve.html"; 

    document.querySelector("#home-link").addEventListener("click", e =>{

        linkClicked(e, homePage)
    });
    document.querySelector("#about-link").addEventListener("click", e =>{
        linkClicked(e, aboutPage)
    });
    document.querySelector("#menu-link").addEventListener("click", e =>{
        linkClicked(e, menuPage)
    });
    document.querySelector("#reserve-link").addEventListener("click", e =>{
        linkClicked(e, reservePage)
    });
    document.querySelector("#faq-reserve-link").addEventListener("click", e =>{
        linkClicked(e, reservePage)
    });
    document.querySelector("#home-reserve-link").addEventListener("click", e =>{
        linkClicked(e, reservePage)
    });
})