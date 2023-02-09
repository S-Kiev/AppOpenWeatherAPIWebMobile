import axios from 'axios';
/*
OBTENER EL LENGUAJE Y LAS UNIDES DE LA STORE
*/

export const getCordenadas=(ciudad,codPais)=> {
    return axios.get(`https://api.openweathermap.org/geo/1.0/direct?q=${ciudad},${codPais}&appid=d8a5b7796cf0e7b1729554a2845d6422`)

}


export const getClima =(lat,lon,unidades,leng) => {
    return axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${unidades}&lang=${leng}&appid=d8a5b7796cf0e7b1729554a2845d6422`)
}

export const getPronostico=(lat,lon,unidades,leng) => {
    return axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=${unidades}&lang=${leng}&appid=d8a5b7796cf0e7b1729554a2845d6422`)
}
