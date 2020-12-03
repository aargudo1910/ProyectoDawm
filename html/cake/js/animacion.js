
let boton = document.getElementById("yo")
let seccion =document.getElementById("proceso")
let seccion1=document.getElementsByClassName("shopping-cart-section")


boton.addEventListener("click",(e) => {
    seccion.style.display= "unset"
    seccion1.style.display="none"
}
)
