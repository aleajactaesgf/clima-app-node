
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion:{
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }

}).argv;

// console.log( argv );

let getInfo = async ( direccion ) =>{

    try {
        let coors = await lugar.getLugarLatLng( direccion);
        let temp = await clima.getClima( coors.lat, coors.lng);

        return `La temperatura en ${coors.direccion} es de ${temp}`;

    } catch (e) {
        return `No se puedo determinar la temperatura en ${direccion}`;
    }

    
}

getInfo( argv.direccion )
    .then( mensaje => console.log( mensaje ))
    .catch( e => console.log( e ))

/* lugar.getLugarLatLng( argv.direccion)
    .then( resp => {
        console.log('Direccion: ', resp.direccion);
        console.log('lat: ', resp.lat);
        console.log('lng: ', resp.lng);
    })
    .catch(e => console.log(e)); 

clima.getClima( 39.28636849999999, -5.6997136)
    .then( temp => console.log(temp))
    .catch(e => console.log(e)); */
