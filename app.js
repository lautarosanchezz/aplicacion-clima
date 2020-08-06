const axios = require('axios');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

console.log(argv.direccion);

const encodeUrl = encodeURI( argv.direccion);
console.log(encodeUrl);

const instance = axios.create({
    baseURL: `https://geocode.xyz/Hauptstr.,+57632+${encodeUrl}?json=1`,
       // headers: {'X-Custom-Header': 'foobar'}
  });

  instance.get()
        .then( resp => {
            console.log(resp.data);
        })
        .catch( err => {
            console.log('Error', err);
        });
