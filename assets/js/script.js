//ALERT//
const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
const appendAlert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
}

const alertTrigger = document.getElementById('liveAlertBtn')
if (alertTrigger) {
  alertTrigger.addEventListener('click', () => {
    appendAlert('Si quieres olvidar tus problemas por un instante solo acaricia a un gatito y desaparecerán. ', 'info')
  })
}

//Probando setTimeout para entregar mensaje dentro de botón//
setTimeout(function() { alertTrigger.innerHTML = "  Adopta a un gato ¡YA! (Ahora sí, click para más info) "}, 5000);

//OBSERVADOR DE ALERT CERRADO//
alertPlaceholder.addEventListener('close.bs.alert', function(){
    console.log('Se cerró la alerta');
});

//FIN ALERT//



//POPOVER//
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

//Variable que identifica el ID del botón popover//
const myPopoverTrigger = document.getElementById('myPopover')

//OBSERVADORES DE POPOVER//
myPopoverTrigger.addEventListener('shown.bs.popover', function(event){
  console.log('Se ejecutó el popover');

})
myPopoverTrigger.addEventListener('hidden.bs.popover', function(){
  console.log('se cerró el popover');

})
myPopoverTrigger.addEventListener('hide.bs.popover', function(){
  console.log('se está cerrando el popover');

})
//FIN POPOVER//





//TOAST//
const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')

if (toastTrigger) {
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
  toastTrigger.addEventListener('click', () => {
    toastBootstrap.show()
  })
}


//OBSERVADORES DE TOAST//
liveToast.addEventListener('shown.bs.toast', function(){
  console.log('Se ejecutó el toast');

})
liveToast.addEventListener('hide.bs.toast', function(){
  console.log('Se está cerrando el toast');

})
liveToast.addEventListener('hidden.bs.toast', function(){
  console.log('Se cerró el toast');

})

//FIN TOAST//



//OFFCANVAS//
const myOffcanvas = document.getElementById('offcanvasRight')

//OBSERVADORES OFFCANVAS//
offcanvasRight.addEventListener('show.bs.offcanvas', function(event){
  console.log('Se está abriendo el offcanvas');
  

  ////PARTE 1 ACTUALIZACIÒN EN PARTE 2: SE AGREGÒ MODIFICACIÒN DE DATAS A OFFCANVAS/////
    let boton = event.relatedTarget 

    let dataModificadoUno =  boton.getAttribute('data-titulo-modificado')
    let dataModificadoDos = boton.getAttribute('data-contenido-modificado')

    document.getElementById('tituloModificado').innerText = dataModificadoUno
    document.querySelector('.offcanvas-body').innerHTML = dataModificadoDos

})
offcanvasRight.addEventListener('shown.bs.offcanvas', function(){
  console.log('Se abrió el offcanvas');
})
offcanvasRight.addEventListener('hide.bs.offcanvas', function(){
  console.log('Se está cerrando el offcanvas');
})
offcanvasRight.addEventListener('hidden.bs.offcanvas', function(){
  console.log('Se cerró el offcanvas');
})
//FIN OFFCANVAS//








// PARTE 2: MODIFICACIÒN DE ELEMENTOS MEDIANTE NUEVOS INPUT Y BOTON//

document.getElementById('actualizarData').addEventListener('click', function(){

  const nuevoTitulo = document.getElementById('inputTitulo').value;
  const nuevaDescripcion = document.getElementById('inputDescripcion').value;


 
document.getElementById('liveAlertBtn').innerText = nuevoTitulo;


document.querySelector('.toast-header').innerText = nuevoTitulo;
document.querySelector('.toast-body').innerText = nuevaDescripcion;



document.querySelector('.offcanvas-header').innerText = nuevoTitulo;
document.querySelector('.offcanvas-body').innerText = nuevaDescripcion;


});











//INTENTOS FALLIDOS//
/*
/*Generando formulario para cambiar contenido
document.getElementById('subirInfo').addEventListener('click', function(){
  let inputDato = document.getElementById('datoInfo').value;
  document.getElementById('toast-body').innerHTML = inputDato;
});

document.getElementById('actualizarData').addEventListener('click',function(){
const datoTitulo = document.getElementById('inputTitulo').value
const inputTitulo = document.getElementById('liveToastBtn').querySelector('.toast-header', datoTitulo)
});

//OBSERVADORES DE TOAST - intento cambio de info al hacer click. 1//
liveToast.addEventListener('shown.bs.toast', function(event){
  console.log('Se ejecutó el toast');

  let boton = event.liveToastBtn;// etiquetado relacionado
  let mensaje = boton.querySelector('.toast-header');
  
})


const inputTituloHtml = document.getElementById('inputTitulo');
const inputDescripcionHtml = document.getElementById('inputDescripcion');
const actualizarHtml = document.getElementById('actualizarData');



const inputTitulo = document.getElementById('inputTitulo');
const inputDescripcion = document.getElementById('inputDescripcion');
const actualizar = document.getElementById('actualizar');

actualizar.addEventListener('click', () {
  const newTitle = inputTitulo.value;
  const newDescription = inputDescripcion.value;

  document.querySelector('.toast-header').innerHTML = newTitle;

  document.querySelector('.toast-body').innerText = newDescription;
})
  Generando formulario para cambiar contenido//
document.getElementById('subirInfo').addEventListener('click', function(){
  let inputDato = document.getElementById('datoInfo').value;
  document.getElementById('toast-body').innerHTML = inputDato;
});
*/
