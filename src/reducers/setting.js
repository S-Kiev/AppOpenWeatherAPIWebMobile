//constantes:
const UPDATE_IDIOMA = 'UPDATE_IDIOMA';
const UPDATE_PAIS = 'UPDATE_PAIS';
const UPDATE_UNIDADES= 'UPDATE_UNIDADES';

export const CambiarIdioma = (idioma) =>{
    return {
        type: UPDATE_IDIOMA,
        payload: idioma
    }
 }
 
 export const CambiarPais = (pais) =>{
    return {
        type: UPDATE_PAIS,
        payload: pais
    }
 }


 export const CambiarUnidades = (unidad) =>{
    return {
        type: UPDATE_UNIDADES,
        payload:unidad 
    }
 }

const UpdateIdioma = (idiomaEditado) => {
    return idiomaEditado;
};

const UpdatePais = (paisEditado) => {

    return paisEditado;
};

const UpdateUnidades = (unidadEditado) => {
    return unidadEditado;
};



const initialState = {
    Idioma : "es",
    Unidades : "metric",
    Pais : "UY",
}

export default function settingReducer (state = initialState, action){
    switch (action.type){
        case UPDATE_IDIOMA:
            return{...state, Idioma: UpdateIdioma(action.payload)}
        case UPDATE_PAIS:
            return {...state, Pais: UpdatePais(action.payload)}
        case UPDATE_UNIDADES:
            return {...state, Unidades: UpdateUnidades(action.payload)}         
        default:
            return state;
    }
}

