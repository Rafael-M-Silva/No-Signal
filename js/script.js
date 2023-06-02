const btn = document.querySelector(".section-squad .section-squad-pedding .img img")
const btnForm = document.querySelector("#btn-form")
const menu = document.querySelector(".menu")

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

// Animação do menu navbar
const animationMenu = () => {
  const firstDivMenu = document.querySelector(".menu div:nth-child(1)")
  const secondDivMenu = document.querySelector(".menu div:nth-child(2)")
  const thirdDivMenu = document.querySelector(".menu div:nth-child(3)")

  firstDivMenu.classList.toggle("menu-first")
  secondDivMenu.classList.toggle("menu-second")
  thirdDivMenu.classList.toggle("menu-third")
}

menu.addEventListener("click", animationMenu)
btn.addEventListener("click", handleCores)
btnForm.addEventListener("click", handleSubmit)