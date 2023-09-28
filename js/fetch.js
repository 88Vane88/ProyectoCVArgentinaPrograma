fetch('https://randomuser.me/api/')
.then(response=>response.json())
.then(data=>mostrarInfo(data.results[0]))
.catch(error=>console.log(error))

const mostrarInfo=(data)=>{
  let name='';
  name += `<div>${data.name.first}</div>`

  let apellido=''
  apellido += `<div>${data.name.last}</div>`

  let edad='';
  edad += `<div>${data.dob.age}</div>`

  let pais='';
  pais += `<div>${data.location.country}</div>`

  let ciudad='';
  ciudad += `<div>${data.location.city}</div>`

  let direccion='';
  direccion += `<div>${data.location.street.name}<p>${data.location.street.number}</p></div>`

  let codPost='';
  codPost += `<div>${data.location.postcode}</div>`

  let email='';
  email += `<div>${data.email}</div>`

  let telefono='';
  telefono += `<div>${data.phone}</div>`

  let celular='';
  celular += `<div>${data.cell}</div>`
  
  document.getElementById('name').innerHTML=name
  document.getElementById('apellido').innerHTML=apellido
  document.getElementById('edad').innerHTML=edad
  document.getElementById('pais').innerHTML=pais
  document.getElementById('ciudad').innerHTML=ciudad
  document.getElementById('direccion').innerHTML=direccion
  document.getElementById('codPost').innerHTML=codPost
  document.getElementById('email').innerHTML=email
  document.getElementById('telefono').innerHTML=telefono
  document.getElementById('celular').innerHTML=celular
}

