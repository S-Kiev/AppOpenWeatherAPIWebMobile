import { IonButton,IonContent, IonIcon, IonImg, IonLabel, IonText, IonTitle} from "@ionic/react";
import { paperPlaneSharp } from "ionicons/icons";
import { useSelector } from "react-redux";


const DescripcionDia =(props)=>{

    const Coordenadas= useSelector(state=>state.data.coord) //Para la segunda llamada
    const Unidades = useSelector(state => state.setting.Unidades);
    const Idioma = useSelector(state => state.setting.Idioma);

    const hadleVerPronostico =(lat,lon,uni,idi)=>{
        props.VerProximos5Dias(lat,lon,uni,idi);
    }

    const fecha = new Date();

    const asignarDia =()=>{
        const fecha = new Date();
        const fechaString = fecha.toDateString()
        const dia = fechaString.slice(0, -12);
        if(dia==="Sun"){
            return "Domingo"
        }else if(dia==="Mon"){
            return "Lunes"
        } else if(dia==="Tue"){
            return "Martes"
        }else if(dia==="Wed"){
            return "Miercoles"
        }else if(dia==="Thu"){
            return "Jueves"
        }else if(dia==="Fri"){
            return "Viernes"
        }else if(dia==="Sat"){
            return "Sabado"
        }else{
            return ""
        }
    }

    const asignarMes =()=>{
        const fecha = new Date();
        const fechaString = fecha.toDateString()
        const mes = fechaString.slice(4, -8);
        if(mes==="Jan"){
            return "Enero"
        } else if(mes==="Feb"){
            return "Febrero"
        }else if(mes==="Mar"){
            return "Marzo"
        }else if(mes==="Apr"){
            return "Abril"
        }else if(mes==="May"){
            return "Mayo"
        }else if(mes==="Jun"){
            return "Junio"
        }else if(mes==="Jul"){
            return "Julio"
        }else if(mes==="Aug"){
            return "Agosto"
        }else if(mes==="Sep"){
            return "Septimebre"
        }else if(mes==="Oct"){
            return "Octubre"
        }else if(mes==="Nov"){
            return "Noviembre"
        }else if(mes==="Dec"){
            return "Diciembre"
        }else{
            return ""
        }
    }

    const asignarFecha =()=>{
        const fecha = new Date();
        const fechaString = fecha.toDateString()
        const diaFecha = fechaString.slice(8, -5);
        return diaFecha;
    }



    const asignarAnio =()=>{
        const fecha = new Date();
        const annio = fecha.getFullYear();
        return annio;
    }



        
   
    return(
        <IonContent>
            <IonTitle>
                <IonText>
                    <h1>
                        Clima del {asignarDia()} {asignarFecha()} <br></br>
                        de {asignarMes()} del {asignarAnio()}
                    </h1>
                </IonText>
            </IonTitle><br></br>
            <IonLabel>
                <IonText>
                    <h2>
                       <strong> Temperatura: {props.datos.temp} ° </strong>
                    </h2><br></br>
                    <h2>
                        <strong>Descripcion: {props.datos.desc}</strong>
                    </h2>
                </IonText>
            </IonLabel>
            <IonImg src={`http://openweathermap.org/img/wn/${props.datos.icon}@2x.png`} ></IonImg>
            
            <IonButton onClick={()=>{hadleVerPronostico(Coordenadas.lat, Coordenadas.lon, Unidades,Idioma)}} color="tertiary"  expand="block" shape="round" fill="outline"  routerLink={"/Clima5Dias"}  >
                Pronostico 5 dias
                <IonIcon slot="end" icon={paperPlaneSharp} />
            </IonButton>             
        </IonContent>


    );

}

export default DescripcionDia;
