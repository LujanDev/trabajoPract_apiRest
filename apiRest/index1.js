let get= document.getElementById("get");
const modal=document.querySelector("#modal");
const btnCerrarModal= document.querySelector("#btn-cerrar-modal");
//api para el tp: 'https://6398b453fe03352a94dbe15d.mockapi.io/api/empleados'
//mi app creada para hacer los delete: https://65399e11e3b530c8d9e88bfb.mockapi.io/api/v1/empleados

get.addEventListener("click", ()=>{
    
    fetch('https://65399e11e3b530c8d9e88bfb.mockapi.io/api/v1/empleados')
    .then(
        datos=>{ return datos.json();}
    )
    .then(
        datos=>{  
            let body= '';
            //let formulario= '';
            //let imagenForm= '';
                for(let i=0; i<datos.length;i++){
                    body+=`<tr><td>${datos[i].nombre}</td>
                    <td>${datos[i].apellido}</td><td>${datos[i].area}</td><td style="display:none">${datos[i].domicilio}</td>
                    </td><td style="display:none"><img src=${datos[i].foto}><td><button id="verData" class="verDatos">Ver datos</button></td></tr>`;
                    //<td style="display:none"><img src=${datos[i].foto}>
                    //imagenForm= `${datos[i].foto}`; 
                }    
            document.getElementById('data').innerHTML=body;
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

    //funciona
    let nombre = e.target.parentElement.parentElement.getElementsByTagName("td").item(0);
    let apellido = e.target.parentElement.parentElement.getElementsByTagName("td").item(1);
    let direccion= e.target.parentElement.parentElement.getElementsByTagName("td").item(3);
    let foto= e.target.parentElement.parentElement.getElementsByTagName("td").item(4).getElementsByTagName("img").item(0).src;
    //console.log(nombre);
    //console.log(apellido);
    //console.log(foto);
    $('#name').val(nombre.innerHTML);
    $('#lastname').val(apellido.innerHTML);
    $('#adress').val(direccion.innerHTML);
    document.getElementById('imagenFormulario').innerHTML = "<img width=100px height=100px src='" + foto + "'/>"
})

//evento para cerrar la ventana modal
$(document).on('click', '.cerrarModal', function(e){
    e.preventDefault();
    modal.close();
})

//POST
let post=document.getElementById('post');
post.addEventListener('click', ()=>{
    try{
        let namePost=document.getElementById("namePost").value;
        let lastNamePost=document.getElementById("lastNamePost").value;
        let areaPost=document.getElementById("areaPost").value;
        let adressPost=document.getElementById("adressPost").value;
        let picturePost=document.getElementById("picturePost").value;

        let data={
            nombre: namePost,
            apellido: lastNamePost,
            area: areaPost,
            domicilio: adressPost,
            foto:picturePost
        }
        fetch('https://65399e11e3b530c8d9e88bfb.mockapi.io/api/v1/empleados',{
            method: 'POST',
            body: JSON.stringify(data),
            headers:{'Content-type': 'application/json; charset=UTF-8'}
        })
        .then(datos=>{return datos.json()})
        .then(datos=>console.log(datos))
        .catch(err=>{console.log(err)});

    }catch(error){
        console.log(error);
    }
})

//GET-ONE
let getOne=document.getElementById("getOne");
getOne.addEventListener("click", ()=>{
    let id=document.getElementById("getOneId").value;
    try{
     fetch(`https://65399e11e3b530c8d9e88bfb.mockapi.io/api/v1/empleados/${id}`)
     .then(datos=>{return datos.json()})
     .then(datos=>{
        //document.getElementById("listEmpleado").innerHTML=JSON.stringify(datos);
        let datosTabla= '';      
        datosTabla+=`<tr><td>${datos.nombre}</td>
                    <td>${datos.apellido}</td><td>${datos.area}</td><td>${datos.domicilio}</td>
                    </td><td><img width="50px" height="50px" src=${datos.foto}></td></tr>`;       
        document.getElementById('consulta_empleado').innerHTML=datosTabla;
        console.log(datos)})
    .catch(err=>{console.log(err)});
    }catch(error){
        console.log(error);
    }
})

//DELETE ONE
let eliminarUno=document.getElementById("delete");
eliminarUno.addEventListener("click", ()=>{
    let id=document.getElementById("deleteOneId").value;
    try{
     fetch(`https://65399e11e3b530c8d9e88bfb.mockapi.io/api/v1/empleados/${id}`, {
        method: 'DELETE'
     })
     .then(datos=>{return datos.json()})
     .then(datos=>{
        //document.getElementById("listEmpleado").innerHTML=JSON.stringify(datos);
        console.log(datos)})
    .catch(err=>{console.log(err)});
    }catch(error){
        console.log(error);
    }
})

//PUT
let put=document.getElementById('put');
put.addEventListener('click', ()=>{
    try{
        let idPut=document.getElementById("putOneId").value;
        let namePut=document.getElementById("namePut").value;
        let lastNamePut=document.getElementById("lastNamePut").value;
        let areaPut=document.getElementById("areaPut").value;
        let adressPut=document.getElementById("adressPut").value;
        let picturePut=document.getElementById("picturePut").value;

        let data={
            nombre: namePut,
            apellido: lastNamePut,
            area: areaPut,
            domicilio: adressPut,
            foto:picturePut,
        }
        fetch(`https://65399e11e3b530c8d9e88bfb.mockapi.io/api/v1/empleados/${idPut}`,{
            method: 'PUT',
            body: JSON.stringify(data),
            headers:{'Content-type': 'application/json; charset=UTF-8'}
        })
        .then(datos=>{return datos.json()})
        .then(datos=>console.log(datos))
        .catch(err=>{console.log(err)});

    }catch(error){
        console.log(error);
    }
})