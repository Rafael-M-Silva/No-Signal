const btn = document.querySelector(".section-squad .section-squad-pedding .img img")
const btnForm = document.querySelector("#btn-form")
const menu = document.querySelector(".menu")

const firstDivMenu = document.querySelector(".menu div:nth-child(1)")
const secondDivMenu = document.querySelector(".menu div:nth-child(2)")
const thirdDivMenu = document.querySelector(".menu div:nth-child(3)")

const navbar = document.querySelector("nav")
const ulNavbar = document.querySelector(".navbar ul")

// Animação de cores na seção SQUAD
const handleCores = () => {
  const sectionColor = document.querySelector(".section-squad-pedding")

  sectionColor.classList.toggle("gray-off")
}

// Reset input após o envio
const handleSubmit = (e) => {
  e.preventDefault()

  const inputName = document.querySelector("#name")
  const inputEmail = document.querySelector("#email")
  const textArea = document.querySelector("#text-area")

  if(inputName.value.length < 3 || inputEmail.value.length < 8 || textArea.value.length < 1 ){
    alert("Preencha os campos!")
    return;
  }

  alert("Formulario enviado com sucesso!")
    inputName.value = ""
    inputEmail.value = ""
    textArea.value = ""
}

// Menu open + animação do menu navbar
const animationMenu = () => {
  navbar.classList.toggle("navbar-open")
  ulNavbar.classList.toggle("menu-open")

  firstDivMenu.classList.toggle("menu-first")
  secondDivMenu.classList.toggle("menu-second")
  thirdDivMenu.classList.toggle("menu-third")
}

// Removendo o menu-open mobile quando o scroll muda
window.addEventListener("scroll", ()=> {
  navbar.classList.remove("navbar-open")
  ulNavbar.classList.remove("menu-open")

  firstDivMenu.classList.remove("menu-first")
  secondDivMenu.classList.remove("menu-second")
  thirdDivMenu.classList.remove("menu-third")
})

menu.addEventListener("click", animationMenu)
btn.addEventListener("click", handleCores)
btnForm.addEventListener("click", handleSubmit)