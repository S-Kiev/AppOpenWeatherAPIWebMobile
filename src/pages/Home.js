import { IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonContent,  IonIcon,  IonLabel, IonPage,  IonTabBar,  IonTabButton,  IonTabs, IonText } from '@ionic/react';
import { IonRouterOutlet } from '@ionic/react';
import { Route } from 'react-router-dom';
import Inicio from '../pages/Inicio';
import Settings from './Settings';
import ClimaDiario from './ClimaDiario';
import Clima5Dias from './Clima5Dias';
import { searchSharp, settingsSharp } from 'ionicons/icons';

const Home =() => {
  return (
    <IonPage color="primary">
      <IonContent>

      <IonCard key={Math.random()}>
                    <IonCardHeader>
                        <IonCardTitle>
                              <h1>
                                Obligatorio Desarrollo de Dispositivos Moviles
                              </h1>
                        </IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent>
                        <IonText>
                            <h2>
                                Profesor: Rodrigo Segovia
                            </h2>
                        </IonText>
                    </IonCardContent>
                    <IonCardContent>
                        <IonText>
                            <h2>
                                Integrantes: Maikol Guerisoli y<br></br>
                                Ezequiel Viera
                            </h2>
                        </IonText>
                    </IonCardContent>
      </IonCard>



      <IonTabs>
            <IonRouterOutlet>
            <Route path="/Inicio" component={Inicio}/>
            <Route path="/Settings" component={Settings}/>
            <Route path="/ClimaDiario" component={ClimaDiario}/>
            <Route path="/Clima5Dias" component={Clima5Dias}/>
            </IonRouterOutlet>
              <IonTabBar slot="bottom">
                  <IonTabButton tab="Settings" href="/Settings">
                    <IonLabel> <IonIcon icon={settingsSharp}></IonIcon>Configuraciones</IonLabel>
                  </IonTabButton>
                  <IonTabButton tab="Inicio" href="/Inicio">
                    <IonLabel> <IonIcon icon={searchSharp}></IonIcon>Buscador</IonLabel>
                  </IonTabButton>
            </IonTabBar>
      </IonTabs>  
      </IonContent>  
  
    </IonPage>
  );
};

export default Home;

