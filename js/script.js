const btnct = document.querySelector(".btncnt");
let modal = document.querySelector(".modal");
let overl = document.querySelector(".overlay");
const close = document.querySelector(".close");


btnct.addEventListener('click', () => {
  document.querySelector(".form").style.zIndex = "3";
  document.querySelector(".form").style.display = "flex";
  document.querySelector(".content_header").style.display = "none";
});


function modBox() {
  btn_contact = document.querySelector(".contact_link");
  btn_contact.addEventListener('click', () => {
    modal.style.display = "flex"
    overl.style.display = "block"
    close.style.display = "flex"
    document.querySelector(".body_overflow").style.overflow = "hidden"
  })
}
modBox();

function condi() {
  overl.addEventListener("click", () => {
    if (overl.style.display == "block") {
      modal.style.display = "none"
      overl.style.display = "none"
      close.style.display = "none"
      document.querySelector(".body_overflow").style.overflow = ""
    }
  })
}
condi();

close.onclick = function(){
  modal.style.display = "none"
  overl.style.display = "none"
  close.style.display = "none"
  document.querySelector(".body_overflow").style.overflow = ""
}
