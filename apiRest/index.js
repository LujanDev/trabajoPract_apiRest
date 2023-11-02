let get= document.getElementById("get");
const modal=document.querySelector("#modal");
const btnCerrarModal= document.querySelector("#btn-cerrar-modal");


get.addEventListener("click", ()=>{
    
    fetch('https://6398b453fe03352a94dbe15d.mockapi.io/api/empleados')
    .then(
        datos=>{
            return datos.json();
        }
    )
    .then(
        datos=>{  
            let body= '';
            let formulario= '';
                for(let i=0; i<datos.length;i++){
                    body+=`<tr><td>${datos[i].nombre}</td>
                    <td>${datos[i].apellido}</td><td>${datos[i].area}</td>
                    <td><button id="verData" class="verDatos">Ver datos</button></td></tr>`
                    formulario=`${datos[i].domicilio}`  
                }
            document.getElementById('data').innerHTML=body;
            document.getElementById('adress').innerHTML=formulario;
            })
    
    .catch(
        err=>{console.log(err);}
    );
})

//función para llenar los input de la ventana modal
const inputs=document.querySelectorAll('input');
let contador=0;


//función para agregar un evento al botón verDatos
$(document).on('click', '.verDatos', function(e){
    e.preventDefault();
    console.log('click en botón ver datos');
    modal.showModal();

    //fetch----->agregar dinamicamente un input y obtener con fetch el dato domicilio

    //funciona
    let nombre = e.target.parentElement.parentElement.getElementsByTagName("td").item(0);
    let apellido = e.target.parentElement.parentElement.getElementsByTagName("td").item(1);
    //let nombre= $('#data tr').find('td').eq(0).text();
    //let apellido=$('#data tr').find('td').eq(1).text();
    console.log(nombre);
    console.log(apellido);
    $('#name').val(nombre.innerHTML);
    $('#lastname').val(apellido.innerHTML);
           
})

//evento para cerrar la ventana modal
$(document).on('click', '.cerrarModal', function(e){
    e.preventDefault();
    modal.close();
})


/**fetch('https://6398b453fe03352a94dbe15d.mockapi.io/api/empleados')
    .then(
        datos=>{return datos.json();}
    )
    .then(
        datos=>{  
            let formulario= '';
                for(let i=0; i<datos.length;i++){
                    if(i=0){
                    formulario=`${datos[i].domicilio}`  
                    console.log(formulario);
                    }
                }
            $('#adress').innerHTML=formulario;
            })
    .catch(
        err=>{console.log(err);}
        ); */




