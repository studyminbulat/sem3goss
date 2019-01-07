'use strict';

let posts = []

const renderRow = post => { 
    const template = document.getElementById('tableRow')
    template.content.querySelector(".id").innerHTML = post.id;
    template.content.querySelector(".title").innerHTML = post.title;
    template.content.querySelector(".content").innerHTML = post.content;
    template.content.querySelector(".categories").innerHTML = post.categories;
    template.content.querySelector(".delete").setAttribute('onclick', `del(${post.id})`);
    return document.importNode(template.content, true);
}

const getAllPosts = () => {
    fetch('https://goss-minbulat.c9users.io:8080/api/posts')
      .then(response => response.json())
      .then(data => {
          posts = data
          console.log(posts)
          const table = document.getElementById('posts')
          const body = table.getElementsByTagName('tbody')[0]
          console.log(body)
          body.innerHTML = ''
          
          posts.forEach(post => {
              body.appendChild(renderRow(post))
          })
          
        //   const orderBy = (field, tbody = document.getElementsByTagName("tbody")[0]) => Array.from(tbody.rows).sort( (a, b) =>
        //         a.getElementsByClassName(field)[0].innerHTML < b.getElementsByClassName(field)[0].innerHTML ? -1 :
        //             a.getElementsByClassName(field)[0].innerHTML > b.getElementsByClassName(field)[0].innerHTML ? 1 : 0
        //     ).forEach( row => tbody.appendChild(row))
    
    
       })

      .catch( alert );
}

const del = id => {
    fetch(`https://goss-minbulat.c9users.io:8080/api/posts/${id}`, {method: 'delete'})
      .then(response => {
          console.log(response)
          getAllPosts()
      })
}

const getPostById = () => {
    const id = document.getElementById('findId').value
    fetch(`/api/posts/${id}`)
    .then(response => response.json())
    .then(data => {
        console.log('data', data)
          const post = data
          console.log(post)
         
          const table = document.getElementById('posts')
          const body = table.getElementsByTagName('tbody')[0]
          console.log(body)
          body.innerHTML = ''
          
          body.appendChild(renderRow(post))
    })
    .catch( alert )
}

const addPost = () => {
    const data = { 
        id: document.getElementById('addId').value,
        title: document.getElementById('title').value,
        content: document.getElementById('content').value,
        categories: document.getElementById('categories').value,
    }
    
    
    
    fetch(`/api/posts/`, {
        method: 'post',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
      .then(response => {
            console.log(response)
            getAllPosts()
            document.getElementById('addId').value = ''
            document.getElementById('title').value = ''
            document.getElementById('content').value = ''
            document.getElementById('categories').value = ''
      })
}

getAllPosts()