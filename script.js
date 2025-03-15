let btnRegistrarse = document.querySelector("#btn-registrar")
let btnIiciarSesion = document.querySelector("#btn-iniciar-sesion")

btnRegistrarse.addEventListener("click", ()=>{
    document.querySelector("#registrarse").showModal()
})

btnIiciarSesion.addEventListener("click", ()=>{
    document.querySelector("#iniciar-sesion").showModal()
})