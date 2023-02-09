import { IonContent, IonIcon,IonPage, IonTitle } from '@ionic/react';
import { settings } from 'ionicons/icons';
import { useDispatch } from 'react-redux';
import Preferencias from '../components/Preferencias';
import idiomas from '../JSON/idiomas.json'
import metricas from '../JSON/metricas.json'
import paises from '../JSON/paises.json'
import {CambiarIdioma, CambiarPais, CambiarUnidades} from "../reducers/setting"



const Settings = () => {


    const dispatch = useDispatch();

    const leng = 1;
    const pais = 2;
    const unid = 3;

    const recibirCambios = (hijo ,info) => {
        if (hijo == 1){
            dispatch(CambiarIdioma(info))
        } else if (hijo == 2){
            dispatch(CambiarPais(info))
        } else if (hijo == 3) {
            dispatch(CambiarUnidades(info))
        } 
    }

    return ( 
        <IonPage>
            <IonContent>
            <br></br>
                <IonTitle><IonIcon icon={settings}></IonIcon>
                Configuraciones
                </IonTitle> 
                <br/><br/>
                <IonTitle>
                    <h2>
                        Idioma
                    </h2>
                </IonTitle>

               <Preferencias select={leng} json={idiomas} recibirCambios={recibirCambios}/>

               <IonTitle>
                        <h2>
                            Pais
                        </h2>
                </IonTitle>
               <Preferencias select={pais} json={paises} recibirCambios={recibirCambios}/>

               <IonTitle>
                        <h2>
                            Unidades
                        </h2>
                </IonTitle>
                    
               <Preferencias select={unid} json={metricas} recibirCambios={recibirCambios}/>

            </IonContent>
        </IonPage>
     );
}
 
export default Settings;