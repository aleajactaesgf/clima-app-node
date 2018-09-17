const axios = require('axios');

const getClima = async( lat, lng) => {

    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=d83dd048edd23c15a2b65d3dbeb189eb`)

    if( resp.data.cod !== 200 ){
        throw new Error(`Se ha producido un error con las coordenadas lat: ${lat} y lng: ${lng} -  ${resp.message}`);
    }
         
    let temp = resp.data.main.temp;
    
        

    return temp;

}

module.exports = {
    getClima
}
