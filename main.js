// fetch('https://jsonplaceholder.typicode.com/users')
// .then( resp => {
//     console.log(resp)
//     return resp.json()
// }).then( data => {
//     console.log(data)
//     console.log(typeof data)
//     console.log(data[0])
//     console.log(data[0].name)

// })

// const userList = document.querySelector('.user-list')
// function makeElement(tag, attr_n, attr_v, content) {
//     let output = document.createElement(tag);
//     (!!attr_n) && output.setAttribute(attr_n, attr_v);
//     output.textContent = content;
//     return output;
//   }

// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(resp => {
//         return resp.json();
//     })
//     .then(data => {
//         const userList = document.querySelector('.user-list');

//         data.forEach(user => {
//             const listItem = makeElement('li', null, null, null);
//             const nameElement = makeElement('span', null, null, user.name);
//             const emailElement = makeElement('span', null, null, user.email);

//             listItem.appendChild(nameElement);
//             listItem.appendChild(document.createTextNode('  :  '));
//             listItem.appendChild(emailElement);
//             userList.appendChild(listItem);
//         });
//     });

// function makeElement(tag, attr_n, attr_v, content) {
//     let output = document.createElement(tag);
//     (!!attr_n) && output.setAttribute(attr_n, attr_v);
//     output.textContent = content;
//     return output;
// }





// const userList = document.querySelector('.user-list')

//     fetch('https://jsonplaceholder.typicode.com/users')
//         .then(response => response.json())
//         .then(users => {
//             users.forEach(user => {
//                 const listItem = document.createElement('li');
//                 listItem.textContent = `${user.name} ${user.email}`;
//                 userList.appendChild(listItem);
//             });
//         })
//         .catch(error => console.error('Error fetching users:', error));


const userList = document.querySelector('.user-list');
const postInfo = document.querySelector('.post-info');

function createHTMLElement(tag, attributes, content) {
    const element = document.createElement(tag);

    if (attributes) {
        Object.keys(attributes).forEach(key => {
            element.setAttribute(key, attributes[key]);
        });
    }

    if (content) {
        element.textContent = content;
    }

    return element;
}

fetch('https://jsonplaceholder.typicode.com/users')
    .then(resp => resp.json())
    .then(data => {
        data.forEach(user => {
            const listItem = createHTMLElement('li', { 'user-id': user.id }, `Name: ${user.name} / Email: ${user.email}`);
            userList.appendChild(listItem);
        });
    })
    .then(() => {
        document.querySelector('.user-list').addEventListener('click', function (event) {
            const userId = event.target.getAttribute('user-id');

            if (userId) {
                fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
                    .then(resp => resp.json())
                    .then(posts => {
                        postInfo.innerHTML = '';
                        posts.forEach(post => {
                            const postItem = createHTMLElement('div', { class: 'post-item' });
                            const title = createHTMLElement('h2', {}, post.title);
                            const body = createHTMLElement('p', {}, post.body);

                            postItem.appendChild(title);
                            postItem.appendChild(body);
                            postInfo.appendChild(postItem);
                        });
                    });
            }
        });
    });