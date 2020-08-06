const axios = require('axios');

const getLugarLatLng = async( dir ) => {

    const encodeUrl = encodeURI( dir);
 
    
    const instance = axios.create({
        baseURL: `https://geocode.xyz/Hauptstr.,+57632+${encodeUrl}?json=1`,
           // headers: {'X-Custom-Header': 'foobar'}
      });
    
     const resp = await instance.get();

     if ( resp.data.matches === null ) {
         throw new error(`No hay resultados para ${dir}`);
     }
         
     const data = resp.data.standard;
     const direccion = data.city;
     const lat = resp.data.latt;
     const lng = resp.data.longt;
    
     return {
        direccion,
        lat,
        lng
    }

}

module.exports = {
getLugarLatLng

}
