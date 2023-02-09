import { IonButton, IonContent, IonIcon, IonPage } from "@ionic/react";
import { arrowBack } from "ionicons/icons";
import { useSelector } from "react-redux";
import Lista5Dias from "../components/Lista5Dias";

const Clima5Dias = () => {

    const Pronostico = useSelector(state=> state.data.datos5Dias);

    return ( 
        
    <IonPage>
        <IonContent>
            <IonButton routerLink="/ClimaDiario" color="tertiary" shape="round" fill="solid" size="small">
                <IonIcon icon= {arrowBack} slot="icon-only"></IonIcon>
                Volver
            </IonButton><br></br>

            <Lista5Dias datos={Pronostico}/>
        </IonContent>
    </IonPage>
    
    );
}
 
export default Clima5Dias;