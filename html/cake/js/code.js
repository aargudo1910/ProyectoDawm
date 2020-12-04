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
          <div class="usuario  col-md-6  ">
              <div class="parte1 text-center "> 
              <div class=" text-right"> 
              </div>
              <h2 class="nombre"> ${nombre} ${apellido} </h2>
              </div>
              <div class="parte2"> 
              <h4 class="des"> Tweet: ${t} </h4>
              <h5 class="mrp"> Fecha: ${fecha}</h5>
              </p> 
              </div>
            </div>
        </div>`
        usuarios.innerHTML+=plantilla
        }
      })

      .then(function (){
        var input, filter,i;
        input = document.getElementById("myInput");
        input.addEventListener("input", (e)=> {
        filter = input.value.toUpperCase();
        let conttweet = document.getElementsByClassName("usuario");
        for (i = 0; i < conttweet.length; i++) {
            let textdiv =conttweet[i].getElementsByClassName("des")[0].innerHTML
            console.log(textdiv)
            if (textdiv) {
              if (textdiv.toUpperCase().indexOf(filter) > -1) {
                conttweet[i].style.display = "";
              } else {
                conttweet[i].style.display = "none";
              }
            }
          } 
        })
      }) 

      .catch(function (error){
          console.log("Error"+error.message)
      })
      ;



    };
  document.addEventListener('DOMContentLoaded', function() {
    loadUsuarios();
  })