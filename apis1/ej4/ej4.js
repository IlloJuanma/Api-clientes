document.addEventListener("DOMContentLoaded", function () {
    // Url de la api
    const url = "https://jsonplaceholder.typicode.com/todos";
    const section = document.querySelector("section");


    function createTask(data) {
        const ul = document.createElement("ul");
        ul.setAttribute("id", "tareas");
        data.forEach(element => {
            const li = document.createElement("li");
            li.innerHTML = `<strong>Title: ${element.title} <br> Completed: ${element.completed} <hr>`;

            // Cambiar estado
            li.addEventListener("click", () => {
                element.completed = !element.completed;
                // Actualizar lista
                li.innerHTML = `<strong>Title: ${element.title} <br> Completed: ${element.completed} <hr>`;
            });

            ul.appendChild(li);
        });
        section.appendChild(ul);
    }

    fetch(url)
        .then(res => res.json())
        .then(response => {
            createTask(response);
        });


});