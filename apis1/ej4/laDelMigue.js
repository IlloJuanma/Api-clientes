document.addEventListener("DOMContentLoaded", () => {
    // funcion de elementos iniciales
    function elementos_iniciales(datos){
        for(elemento of datos){
            //creamos el elemento li
            let nueva_entrada = document.createElement("li");
        }
    }






    // Hacemos una funcion para obtener los datos
    function obten_datos(url){
        fetch("https://jsonplaceholder.typicode.com/todos")
        .then ((response) => {
            return response.json();
        })
        .then((datos) => {

        })
        .catch((err) => {

        });

    }


});