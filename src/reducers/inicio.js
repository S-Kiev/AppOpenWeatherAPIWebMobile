import { getCordenadas, getClima, getPronostico } from '../api/axios'
import { Geolocation } from '@capacitor/geolocation';

const GET_COORDENADAS = "GET_COORDENADAS";
const GET_CLIMADIA = "GET_CLIMADIA";
const GET_PRONOSTICO ="GET_PRONOSTICO";
const GET_POSICION_DISPOSITIVO = "GET_POSICION_DISPOSITIVO";





//CodPais vine de Setting, ciudad seria el serchText

export const getCoordenadasAction = (ciudad, codPais, Unidades, Idioma) => (dispatch)  => {
    getCordenadas(ciudad, codPais).then((results) => {

        if(results===[]){

        }

        const Coordenadas ={
            lat: results.data[0].lat,
            lon: results.data[0].lon
        }

        console.log(Coordenadas)
        console.log(codPais)

        dispatch({
            type: GET_COORDENADAS,
            payload: Coordenadas
        }) 

        //Guardar la ciudad de la respueta en un array del estado global

        dispatch(getClimaDia(Coordenadas.lat,Coordenadas.lon, Unidades, Idioma));
   
    })
}

//Unidades y lenguaje pedirlo al useSelector del Setting

export const getClimaDia = (lat, lon, unidades, idioma) => (dispatch)  => {
    
    getClima(lat ,lon, unidades, idioma).then((results) => {

        const Datos = {
            desc : results.data.weather[0].description,
            temp : results.data.main.temp,
            icon: results.data.weather[0].icon
        }
 
        dispatch({
            type: GET_CLIMADIA,
            payload: Datos
        }) 
    })
}


export const getClima5Dias =(lat, lon, unidades, idioma ) =>(dispatch)=>{
    getPronostico(lat, lon, unidades, idioma ).then((results)=>{

        const datos = (results.data.list); 


        dispatch({
            type: GET_PRONOSTICO,
            payload: datos
        })
    })
}

export const printCurrentPosition = (unidades,idioma )=> async (dispatch) => {  

    const geolocation = await Geolocation.getCurrentPosition();
   
    const Coordenadas={
        lat:geolocation.coords.latitude,
        lon: geolocation.coords.longitude
    }

    dispatch({
        type: GET_POSICION_DISPOSITIVO,
        payload: Coordenadas
    })
    
    //Hay que hacer dispach?

    dispatch(getClimaDia(Coordenadas.lat, Coordenadas.lon, unidades, idioma));
}


const initialState = {
    coord : {}, 
    datos : {},
    datos5Dias : []
}

export default function inicioReducer(state = initialState, action) {
    switch (action.type) {
        case GET_COORDENADAS:
            return ({...state, coord: action.payload});
        case GET_CLIMADIA:
            return ({...state, datos : action.payload});
        case  GET_PRONOSTICO:
            return ({...state, datos5Dias: action.payload});
        case GET_POSICION_DISPOSITIVO:
            return({...state, coord: action.payload})
        default:
            return state;
    }
}