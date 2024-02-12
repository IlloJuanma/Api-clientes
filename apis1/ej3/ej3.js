document.addEventListener("DOMContentLoaded", function () {
    const boton = document.querySelector("button");
    const section2 = document.querySelectorAll("section")[1];
    const section1 = document.querySelectorAll("section")[0];
    
    const url = "https://fakestoreapi.com/products";
    
    function showImg(urlImg){
        const img = document.createElement("img");
        img.src = urlImg;
        section2.innerHTML = ""; // Esto sirve para limpiar la imagen anterior
        section2.appendChild(img);
    }
    function hideImg(){
        section2.innerHTML = "";
    }

    function createList(data) {
        const ul = document.createElement("ul");
        // iteramos sobre todos los nombres y creamos tantos li como nos haga falta
        data.forEach(elemento => {
            const li = document.createElement("li");
            li.textContent = elemento.title;

            // Agregamos el evento de mostrar la imagen en cada li
            li.addEventListener("mouseover", function(){
                showImg(elemento.image);
            });

            // Ahora lo mismo pero ocultamos
            li.addEventListener("mouseout", function(){
                hideImg();
            })

            // agregamos al padre su hijo
            ul.appendChild(li);
        })
        // fuera del bucle, agregamos al padre su hijo
        section1.appendChild(ul);
    }

    boton.addEventListener("click", function () {
        fetch(url)
            .then(res => res.json())
            .then(response => {
                // llamamos a la function
                createList(response);
            });
    });
});