import { IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonContent,IonText, IonTitle } from "@ionic/react";

const Lista5Dias = (props) => {


    const mapearPronostico =()=>{
        const cards = props.datos.map(item=>{


            const asignarFecha =()=>{
                const Fecha = item.dt_txt.slice(0, -9);
                const annio = Fecha.slice(0, -6);
                const mes= Fecha.slice(5,-3);
                const dia= item.dt_txt.slice(8, -9);
                return dia + "/" + mes + "/" + annio;
            }

            const asignarHora =()=>{
                const Hora = item.dt_txt.slice(11, -3);
                return Hora;
            }

            return(
                <IonCard key={Math.random()}>
                    <IonCardHeader>
                        <IonCardTitle>Temperatura: {item.main.temp} °</IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent>
                        <IonText>
                            <h2>
                                Descripcion: {item.weather[0].description}
                            </h2>
                        </IonText>
                    </IonCardContent>
                    <IonCardContent>
                        <IonText>
                            <h2>
                                Hora: {asignarHora()}
                            </h2>
                        </IonText>
                    </IonCardContent>
                    <IonCardContent>
                        <IonText>
                            <h2>
                                Fecha: {asignarFecha()}
                            </h2>
                        </IonText>
                        <img src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} width="35%"></img>
                    </IonCardContent>
                   
                </IonCard>
            )
        })
        return cards
    }


    return (  
        <IonContent>
                <IonTitle>
                    <h1>
                         Pronostico de la Semana
                    </h1>
                </IonTitle><br></br>
                {mapearPronostico()}
        </IonContent>
    );
}
 
export default Lista5Dias;