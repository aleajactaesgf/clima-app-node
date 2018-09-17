const axios = require('axios');


const getLugarLatLng = async( direccion ) => {
    
    let encodeURL = encodeURI(direccion);

    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${ encodeURL }&key=AIzaSyA-HXVa2jtkGfKtIJwisxgC46RaWqC1xuI`)

    if( resp.data.status === 'ZERO_RESULTS'){
        throw new Error(`No hay resultados para la dirección ${direccion}`);
    }
         
    let location = resp.data.results[0];
    let {lat, lng} = location.geometry.location;

    /* console.log('Direccion: ', location.formatted_address);
    console.log('lat: ', lat);
    console.log('lng: ', lng); */
        

    return {
        direccion: location.formatted_address,
        lat,
        lng
    }
}

module.exports = {
    getLugarLatLng
}


