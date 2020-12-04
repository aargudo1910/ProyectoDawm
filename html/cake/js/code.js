let loadUsuarios =  () => {
    fetch("./datos.json")
      .then(function (resultado) {
        return resultado.json();
      })
      .then(function (lista) {
        let usuarios=document.getElementById("usuarios")
        for (let user of lista) {
        let nombre=user.Nombre
        let apellido=user.Apellido
        let t=user.Tweet
        let fecha=user.Fecha
          let plantilla = `
          <div class="usuario  col-md-6 mx-auto ">
              <div class="parte1 text-center "> 
              <div class=" text-right"> 
              </div>
              <h2 class="nombre"> ${nombre} ${apellido} </h2>
              </div>
              <div class="parte2"> 
              <h4 class="mat"> Tweet: ${t} </h4>
              <h5 class="mrp"> Fecha: ${fecha}</h5>
              </p> 
              </div>
            </div>
        </div>`
        usuarios.innerHTML+=plantilla
        }
      })

      .then(function (){
        var boton,i,j ;
        boton = document.getElementsByClassName("bt");
        let contenido = document.getElementsByClassName("usuario");
       for (i=0;i<boton.length;i++) {  
       let contenidocard=contenido[i];
       boton[i].addEventListener("click", (e)=> { 
       contenidocard.style.display = "none";
      })
    }
     
    })

      .catch(function (error){
          console.log("Error"+error.message)
      })
      ;



    };
  document.addEventListener('DOMContentLoaded', function() {
    loadUsuarios();
  })