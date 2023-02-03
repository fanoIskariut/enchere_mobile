import { IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonMenu, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { stringify } from 'querystring';
import { useEffect, useState } from 'react';
import { addCircle, list } from 'ionicons/icons';
import ExploreContainer from '../components/ExploreContainer';
import './Login.css';

const Notification: React.FC = () => {

  const [items, setItems] = useState<any[]>([]);
  const idclient = localStorage.getItem('data');
  let url = "https://encherews-production-b628.up.railway.app/Produitclientvita/"+idclient;
  useEffect(() => {
    fetch(url,{ 
      method: "GET",
      headers: { 'Content-Type': 'application/json' }
    }).then((response)=>response.json())
    .then((json)=>setItems(json.data));
  },[]);

  const add = (event :any) => {
    event.preventDefault();
    window.location.replace('/AjoutEnchere');
  }
  const out = (event :any) => {
    event.preventDefault();
    window.location.replace('/Login');
  }
  const rechargement = (event :any) => {
    event.preventDefault();
    window.location.replace('/Rechargement');
  }
  const liste = (event :any) => {
    event.preventDefault();
    window.location.replace('/ListeEnchere');
  }
  const notif = (event :any) => {
    event.preventDefault();
    window.location.replace('/Notification');
  }

  return (
    <>
    <IonMenu contentId="main-content">
        <IonHeader>
          <IonToolbar>
            <IonTitle>Enchere Menu</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <IonItem>
            <IonIcon icon={addCircle} /> 
            <IonLabel onClick={add}>Ajout Enchere</IonLabel>
          </IonItem>
          <IonItem>
            <IonIcon icon={list} /> 
            <IonLabel onClick={liste}>Liste enchere</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel onClick={notif}>Notifications</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel onClick={rechargement}>Recharger Compte</IonLabel>
          </IonItem>
          <IonButton className="ion-margin-top" type="submit" expand="block" onClick={out}>
            Log Out
          </IonButton>
        </IonContent>
      </IonMenu>
    <IonPage id="main-content">
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton></IonMenuButton>
          </IonButtons>
          <IonTitle>Notifications</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
      {items.map((item) => {
        return (
          <IonCard>
            <IonCardHeader>
              <IonCardTitle>Produit: {item.nomproduit}</IonCardTitle>
              <IonCardTitle>Prixmin: {item.prixmin}</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              Categorie: {item.nomcategorie}   
            </IonCardContent>
            <IonCardContent>
              Date d'enchere: {item.dateenchere}
            </IonCardContent>
          </IonCard>
        )
      })}
      </IonContent>
    </IonPage>
    </>
  );
};

export default Notification;
