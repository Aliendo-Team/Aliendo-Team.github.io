const hamburger_checkbox = document.querySelector('#hamburger-checkbox')
const computer_meun = document.querySelector('#computer-menu')
const mobile_meun = document.querySelector('.hamburger-icon')
const mobile_navbar = document.querySelector('.navbar')

const photo = $('#photo')


setInterval(() => {
    if(window.screen.width < 943){
       computer_meun.style.display = "none"
       mobile_meun.style.display ="block"
 
       if(hamburger_checkbox.checked){
          mobile_navbar.style.display = "flex"
       }else{
          mobile_navbar.style.display = "none"
       }
 
    }else{
       computer_meun.style.display = "flex"
       mobile_meun.style.display = "none"
       mobile_navbar.style.display = "none"
    }
 
 }, 0.5);

photo.poptrox