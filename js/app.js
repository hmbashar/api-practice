function loadData() {
    const url = 'https://jsonplaceholder.typicode.com/todos/1';
    fetch(url)
        .then(response => console.log(response))
        .then(data => console.log(data))

}
function loadUsers() {
    const url = 'https://jsonplaceholder.typicode.com/users';
    fetch(url)
        .then(response => response.json())
        .then(data => displayUsers(data))

}


function displayUsers(data) {
   const ul = document.getElementById('items-lists');
   for (const user of data) {
        console.log(user.name);
        const li = document.createElement('li');
        li.innerText = user.name;
        ul.appendChild(li);
   }
}



function loadPosts() {

    const url = 'https://jsonplaceholder.typicode.com/posts';
    fetch(url) 
        .then(response => response.json())
        .then (data => displayPosts(data))
}



function displayPosts (posts) {
    const postContainer = document.getElementById('load-posts-container');

    for(const post of posts) {
        console.log(post);
        const singlePost = document.createElement('div');
        singlePost.classList.add('single-post');
        singlePost.innerHTML = `
            <h6>ID: ${post.id}</h6>
            <h5>User ID: ${post.userId}</h5>
            <h2>Title: ${post.title}</h2>
            <p>Content: ${post.body}</p>
        `;
        postContainer.appendChild(singlePost);
    }

}