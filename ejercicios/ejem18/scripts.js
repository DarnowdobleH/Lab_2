function Obtener() {
    fetch('https://yesno.wtf/api')
    .then(function(response) {
    // Transforma la respuesta. En este caso lo convierte a JSON
    return response.json();
    })
    .then(function(json) {
    // En este caso imprimo por consola
    console.log(json);
    let imagen = document.getElementById('imagen');
    imagen.src = json.image;
    let texto = document.getElementById('contenedorTexto');
    texto.innerHTML = json.answer;
    });
   }
   let boton = document.getElementById('boton');
   boton.addEventListener('click', Obtener);