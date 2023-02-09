import { IonButton, IonContent, IonIcon } from "@ionic/react";
import {compassSharp} from "ionicons/icons";


const GeoComp = (props) => {

    const handleGetCurrentPosition=() => {
        props.obtenerUbicacion();
    }
    
    return (  
        <IonContent>
            <IonButton onClick={handleGetCurrentPosition} routerLink={"/ClimaDiario"} color="tertiary"  expand="block" shape="round" fill="outline" >Obtener ubicación
            <IonIcon slot="start" icon={compassSharp}/>
            </IonButton>
        </IonContent>
    );
}
 
export default GeoComp;