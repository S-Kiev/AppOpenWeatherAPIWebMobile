import { IonButton,  IonContent, IonIcon,  IonPage,} from "@ionic/react";
import { chevronBack } from "ionicons/icons";
import { useDispatch, useSelector } from "react-redux";
import DescripcionDia from "../components/DescripcionDia";
import { getClima5Dias } from "../reducers/inicio";

const ClimaDiario = () => {

    const dispatch = useDispatch();
    const datosDia = useSelector(state => state.data.datos)
    

     //Para la pagina
     const VerProximos5Dias =(lat,lon,uni,idio)=>{
        dispatch(getClima5Dias(lat,lon,uni,idio));
    }
     
    

    return (
        <IonPage>        
            <IonContent>
                <IonButton routerLink="/Inicio" color="tertiary"  shape="round" fill="solid" size="small">
                    <IonIcon icon= {chevronBack} slot="icon-only"></IonIcon>
                    Volver
                </IonButton><br></br>
                
               <DescripcionDia datos={datosDia} VerProximos5Dias={VerProximos5Dias}/>
              
            </IonContent>
        </IonPage>

      );
      
}
 
export default ClimaDiario;