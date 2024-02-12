document.addEventListener("DOMContentLoaded", function () {
    let salida = document.getElementById("salida");
    let boton = this.querySelector("button");

    boton.addEventListener("click", function () {
        fetch("https://jsonplaceholder.typicode.com/comments")
            .then(res => res.json())
            .then(response => {
                let texto ="";
                for (let i = 0; i < response.length; i++) {
                    texto += response[i].body + "<br>";
                }
                salida.innerHTML = texto;
            });
    })
});

/* function imprime_comentarios(array){
    for(let objeto of array){
        // aqui podemos hace run console log para ver q sale
        // podemos crear otras etiquetas si fuera necesario

        // luego podemos usar un for in para recorrer el objeto por sus adentros

            for (atributo in objeto){
                if(atributo ==="name"){
                    titulo.textContent=objeto[atributo];
                    nuevo_elemento.appendChild(titulo);

                }else if(atributo == "email"){
                    email.textContent =objeto[atributo];
                    nuevo_elemento.appendChild(email);
                }
            }
            document.getElemetById("section").appendChild(nuevo_elemento);

        let parrafo = document.createElement("p");
        parrafo.textContent = objeto.body;

        document.getElementById("section").appendChild(parrafo);
    }

    function muestra_comentarios(url){
        fetch....
    }

    document.getElementByid("boton").addEventListener('click', () => {
        muestra_comentarios("http://json....");
    });

} */