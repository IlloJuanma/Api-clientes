document.addEventListener("DOMContentLoaded", () => {
    const url = 'http://www.jaimeweb.es/medac/books.json';
    
    fetch(url)
        .then(response => response.json())
        .then(response => {
            console.log(response);
        });


});