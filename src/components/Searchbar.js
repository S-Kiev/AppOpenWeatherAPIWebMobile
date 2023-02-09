import { IonButton, IonContent,IonIcon,IonSearchbar, IonTitle } from "@ionic/react";
import { paperPlaneSharp } from "ionicons/icons";
import { useState } from "react";

const Searchbar = (props) => {
    const [searchText, setSearchText] = useState('');

    const handleBuscar = () => {
        props.buscar(searchText);
    }
   
    return (  
        <IonContent>
                <IonTitle>
                    <h1>
                        Buscador
                    </h1>
                </IonTitle><br></br>
            <IonSearchbar value={searchText} onIonChange={(e)=>{setSearchText(e.target.value)}} placeholder="Ingrese ciudad..."/><br></br>
            <IonButton onClick={handleBuscar} routerLink={"/ClimaDiario"} color="tertiary"  expand="block" shape="round" fill="outline">Buscar <IonIcon slot="end" icon={paperPlaneSharp} />
            </IonButton> 
        </IonContent>
    );
}
 
export default Searchbar;
