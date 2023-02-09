import { IonPage} from "@ionic/react";
import Searchbar from "../components/Searchbar";
import GeoComp from "../components/GeoComp";
import { useDispatch, useSelector } from "react-redux";
import {getCoordenadasAction,  printCurrentPosition} from "../reducers/inicio"


const Inicio = () => {

    const dispatch = useDispatch();

    const codPais = useSelector(state => state.setting.Pais);
    const Unidades = useSelector(state => state.setting.Unidades);
    const Idioma = useSelector(state => state.setting.Idioma);

   

    const funcionDeBusqueda =(search)=>{
        
        dispatch(getCoordenadasAction(search, codPais, Unidades, Idioma));
    }


    const funcionPosicionDispositivo = () =>{
        
        dispatch(printCurrentPosition(Unidades, Idioma));
    }

    return ( 
        <IonPage>
            <br></br>
            <Searchbar buscar={funcionDeBusqueda}/>
            <GeoComp obtenerUbicacion={funcionPosicionDispositivo}/>
        </IonPage>
     );
}
 
export default Inicio;