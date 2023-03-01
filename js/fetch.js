const url = 'https://jsonplaceholder.typicode.com/todos/1';
fetch(url)
    .then(response => console.log(response))
    .then(json => console.log(json))
