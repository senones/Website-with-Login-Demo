const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');

registerLink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup');
    wrapper.classList.remove('active');
});

    // Get the element with the ID "myText"
  var myText = document.getElementById("myText");

  // Set the visibility of the element to "visible"
  myText.style.visibility = "visible";

  // Set a timeout to hide the element after 3 seconds (3000 milliseconds)
  setTimeout(function() {
    myText.style.visibility = "hidden";
  }, 50000);