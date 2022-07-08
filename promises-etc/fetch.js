// fetch api

fetch('luigi.json').then((response) => {
//resolve
console.log('resolved', response);
//response.json(); //this returns a promise
return response.json();
}).then(data => {
console.log(data); //gives access to data in json link
}).catch((err)=> {
//reject (only rejected in case of network connectivity problems)
console.log('rejected', err);
});
