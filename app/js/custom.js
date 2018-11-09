let contactForm = document.forms['contact-form'];
let regExpres = /^[0-9a-z_\-\.]+@[0-9a-z\-\.]+\.[a-z]{2,6}$/;
let inputs = contactForm.querySelectorAll('*:not([type="submit"])');
let formSubmitHandler = (e) => {
    (e).preventDefault();
    inputs.forEach((item) => {

        if (item.value === "" || item.validity.patternMismatch) {
            item.classList.add("invalid");

            throw new Error("Не правильні дані.");

        }

    });
};
let currentScroll = 0;
let navbar = document.querySelector('.header'),
windowScrollHandler = (ev) => {
if (window.pageYOffset > currentScroll) {
    navbar.classList.add("scrollUp");
    navbar.classList.remove("header-fixed");
} else { 
    navbar.classList.add("header-fixed");
navbar.classList.remove("scrollUp"); }
currentScroll = window.pageYOffset;
return currentScroll;
}


window.addEventListener('scroll', windowScrollHandler);
