// Este es el ejemplo del video ruso ese

//Simulando que tenemos un formulario para rellenar datos y guardarlos en un servidor

// Lo primero sera coger lo necesario del html y del formulario

const btn = dcoument.querySelector('#btn');
const formulario = dcoument.querySelector('##formulario');
const respuesta = document.querySelector('#respuesta');

// Ahora la funcion para sacar los datos del formulario con FormData ()
const getData = () => {
    const datos = new FormData(formulario);
    const datosProcesados = Object.fromEntries(datos.entries());
    formulario.reset(); // si queremos reiciniar el formulario
    return datosProcesados;
}

// Funcion para colocar los datos en el servidor
const postData = async () => {
    const newUser = getData();
    // Crea el objeto con la informacion del usuario
    try {
        // Codigo que se va a intentar
        // y en fetch usamos la ruta del servidor
        // para get no hace falta indicar el metodo pero para post si
        const response = await fetch('http://localhost:8080/users', {
            method: 'POST',
            // tipo de contenido que vamos a usar
            headers: { 'Content-Type': 'application/json' },
            // para colocar el contenido en el servidor
            body: JSON.stringify(newUser)
        });
        // si la respuesta esta bien
        if (response.ok) {
            // codigo que usa la respuesta
            const jsonResponse = await response.json();
            // asi descoponemos el objeto para sacar lo que queremos
            const { email, nombre, telefono } = jsonResponse;
            respuesta.innerHTML = `
            <ul>
            Exito se guardo la informacion
                <li>${emai})</li>
                <li>${nombre}</li>
                <li>${telefono}</li>
            </ul>       `
        }
    } catch (error) {
        console.log(error);
    }
}