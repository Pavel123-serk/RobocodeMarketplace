const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

let profile = document.getElementById('profile');
let produktsGrid = document.getElementById('products-grid');
let url = 'https://my-json-server.typicode.com/RobocodeSchool/marketplace';

    //User details request
    let productsRequest = new XMLHttpRequest();
    productsRequest.open('GET', `${url}/users/${id}`);
    productsRequest.responseType = 'json';
    productsRequest.onload = function() {
        let products = productsRequest.response;
        produktsGrid.innerHTML = null;
        products.forEach(p => {
            produktsGrid.innerHTML += `
                <div class="product">
                    <h2 class="product-name">${p.name}</h2>
                    <img class='product-photo' src='${p.photo_url}' alt='${p.name}'>
                    <p class="product-price">Price: </b>${p.price}</p>
                    <p class="product-description"><b>Description: </b>${p.description}</p>
                </div>
            `;
        });
    }
    productsRequest.send();    
    //                 <h3>${p.name}</h3>
    //                 <p>${p.description}</p>
    //                 <p>Price: $${p.price.toFixed(2)}</p>
    //             </div>
    //         `
    //     });
    // };
    // productsRequest.send();

    // //User details request
    // fetch(`${url}/users/${id}`)
    // .then(async function(response) {
    //     let user = await response.json();
    //     profile.innerHTML = `
    //         <h1>${user.name}</h1>
    //         <h2>${user.sirname}</h2>
    //         <img class="profile-img" src="${user.photo_url}">
    //         <p>Balance: ${user.balance}$</p>
    //     `
    // })