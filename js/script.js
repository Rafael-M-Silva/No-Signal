const btn = document.querySelector(".section-squad .section-squad-pedding .img img")
const btnForm = document.querySelector("#btn-form")

const handleCores = () => {
  const sectionColor = document.querySelector(".section-squad-pedding")

  sectionColor.classList.toggle("gray-off")
}


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

btn.addEventListener("click", handleCores)
btnForm.addEventListener("click", handleSubmit)