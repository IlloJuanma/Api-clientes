document.addEventListener("DOMContentLoaded", () => {
    const url = "https://jsonplaceholder.typicode.com";

    // // Anteriormente usando la version antigua, creamos el objeto XMLHTTPREQUEST
    // const xhr = new XMLHttpRequest();

    // // Crear funcion manejadora que usaremos luego como callback
    // function onRequestHandler() {
    //     // Comprobar la respuesta
    //     if (this.status === 200 && this.readyState === 4){
    //         // 0 = UNSET, no se ha llamado al metodo open
    //         // 1 = OPENED, se ha llamado al metodo open
    //         // 2 = HEADERS_RECEIVED, se esta llamando al metodo send()
    //         // 3 = LOADING, está cargando es decir esta recibiendo la respuesta
    //         // 4 = DONE, se ha completado la operacion
    //         const data = JSON.parse(this.response);
    //         const htmlResponse = document.querySelector("#app");
    //         console.log(data);

    //         const template = data.map(user => `<li>${user.name} ✉️ ${user.email}</li>`);
    //         htmlResponse.innerHTML = `<ul>${template}</ul>`;
    //     }
    // }
    // xhr.addEventListener('load', onRequestHandler);
    // xhr.open('GET', `${url}/users`);
    // xhr.send();

    // const htmlResponse = document.querySelector('#app');

    // fetch(`${url}/users`) // Esto devuelve una promesa
    // .then ((response) => response.json())
    // .then((data) => {
    //     const template = data.map(data => `<li>${data.name} ✉️ ${data.email}</li>`);
    //     htmlResponse.innerHTML = `<ul>${template}</ul>`;
    // });

    //Vamos hacerlo con nodos de html

    const htmlResponse = document.querySelector('#app');
    const ul = document.createElement('ul'); // Añade como un componente de react o nodos
    fetch(`${url}/users`) // Esto devuelve una promesa
    .then ((response) => response.json())
    .then((users) => {
        users.forEach(user => {
            let elemento = document.createElement('li');
            elemento.appendChild(document.createTextNode(`${user.name} ✉️ ${user.email}`));
            ul.appendChild(elemento);    
        });
        htmlResponse.appendChild(ul);
        
    });



});