import {IonSelect, IonSelectOption, IonItem, IonList } from "@ionic/react";


const Preferencias = (props) => {
    
    const asignarNombre =() => {
        if(props.select == 1){
          return "Idioma";
        } else if (props.select == 2){
          return "Paises";
        } else {
          return "Unidades";
        }
      }

    const mapearJson = () => {
        if (props.select == 1) {
            const idiomas = props.json.map(item=>{
                return(
                    <IonSelectOption value={item.Valor} key={Math.random()}>{item.Idioma}</IonSelectOption>                                     
                )
            })
            return idiomas     
        }else if (props.select == 2) {
            const paises = props.json.map(item=>{
                return(
                    <IonSelectOption value={item.Codigo} key={Math.random()}>{item.Pais}</IonSelectOption>
                )
            })
            return paises;
        } else {
            const metricas = props.json.map(item =>{
                return(
                    <IonSelectOption value={item.Unidades} key={Math.random()}>{item.Grados}</IonSelectOption>
                )
            })
            return metricas
        }
    }
    
    
    return ( 
            <IonList>
                <IonItem>
                    <IonSelect placeholder={asignarNombre()} onIonChange={(e) => {props.recibirCambios(props.select, e.detail.value)}} >
                        {mapearJson()}
                    </IonSelect>  
                </IonItem>  
            </IonList>
     );
}
 
export default Preferencias;