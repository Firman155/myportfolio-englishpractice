// Navbar Fixed
window.onscroll = function(){
    const header = document.querySelector('header');
    const FixedNav= header.offsetTop;

    if(window.pageYOffset>FixedNav){
        header.classList.add('navbar-fixed');
    }else{
        header.classList.remove('navbar-fixed');
    }
}

// Hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});


// pesan
const contactForm = document.getElementById("contact-form");
const loader = document.querySelector(".loader");

loader.style.display = "none";


contactForm.addEventListener("submit", function(e){
    loader.style.display = "block";
    e.preventDefault();

    const url = e.target.action;
    const formData = new FormData(contactForm);

    fetch(url,{
        method: "POST",
        body: formData,
        mode: "no-cors",
    })
    .then(()=>{
        // url thank you
        loader.style.display = "none";
        window.location.href = '/thankyou.html';
    })
    .catch((e)=>alert("Error Occured"));
});
