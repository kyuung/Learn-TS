// api url
var url = 'https://jsonplaceholder.typicode.com/users/1';

// dom
var username = document.querySelector('#username');
var email = document.querySelector('#email');
var address = document.querySelector('#address');

// user data
var user = {};

/**
 * @typedef {object} Address
 * @property {string} street
 * @property {string} city
 */

/**
 * @typedef {object} User
 * @property {string} name
 * @property {string} email
 * @property {Address} address
 */

/**
 * @returns {Promise<User>}
 */

function fetchUser() {
    return axios.get(url);
}

fetchUser().then((res) => {
    res.address.city;
});

function startApp() {
    fetchUser()
        .then(function (response) {
            username.innerText = response.name;
            email.innerText = response.email;
            address.innerText = response.addres.street;
        })
        .catch(function (error) {
            console.log(error);
        });
}

startApp();
