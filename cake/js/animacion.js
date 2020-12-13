
let boton = document.getElementById("yo")
let seccion2 =document.getElementById("proceso")
let seccion1=document.getElementById("desaparecer")
let seccion3=document.getElementById("pago")
let botonvolver = document.getElementById("yono")
let botonconfirmar = document.getElementById("confirmarb")
let botoncompra = document.getElementById("botonult")

boton.addEventListener("click",(e) => {
    seccion2.style.display= "unset"
    seccion1.style.display="none"
}
)

botonvolver.addEventListener("click",(e) => {
    seccion1.style.display= "unset"
    seccion2.style.display="none"
}
)

botonconfirmar.addEventListener("click",(e) => {
    seccion3.style.display= "unset"
}
)

botoncompra.addEventListener("click",(e) => {
    alert("Waffle Stop agredece su compra, esperamos volver a encontrarnos pronto!!!")
}
)