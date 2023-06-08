const nav = document.querySelector(".sidebare__nav")
const navBtn = document.querySelector('.sidebare__menu-btn')
const navCheck = document.querySelector('#nav--check')
const navLink = document.querySelectorAll('.sidebare__link')

navBtn.addEventListener('click', ()=> {
  nav.classList.toggle("sidebare__show-nav")
  if(!navCheck.checked) navCheck.checked = true;
  else {
    navCheck.checked = false;
  }
})

navLink.forEach(link => link.addEventListener("click", ()=> {
  nav.classList.toggle("sidebare__show-nav")
  if(!navCheck.checked) navCheck.checked = true;
  else {
    navCheck.checked = false;
  }
}))