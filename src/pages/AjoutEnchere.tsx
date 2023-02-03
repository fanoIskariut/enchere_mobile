import { IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonMenu, 
  IonMenuButton, IonPage, IonSelect, IonSelectOption,IonTitle, IonToolbar } from '@ionic/react';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import ExploreContainer from '../components/ExploreContainer';
import { addCircle, list } from 'ionicons/icons';
import './Login.css';

const AjoutEnchere: React.FC = () => {

  //const [idclient,setIdclient] = useState('');
  const [nomproduit, setNomproduit] = useState('voiture');
  const [idcategorie, setIdcategorie] = useState('4');
  const [dureeenchereminute, setDureeenchereminute] = useState('00:45:00');
  const [prixmin, setPrixmin] = useState('150000');
  const history = useHistory();
  const [error, setError] = useState('');
  const [message,setMessage] = useState('');
  const [items, setItems] = useState<any[]>([]);

  let url = "https://encherews-production-b628.up.railway.app/Categorie";
  useEffect(() => {
    fetch(url,{ 
      method: "GET",
      headers: { 'Content-Type': 'application/json' }
    }).then((response)=>response.json())
    .then((json)=>setItems(json.data));
  },[]);

  const ajouter = (event :any) => {
    event.preventDefault();
    const idclient = localStorage.getItem('data');
    //console.log(idclient);
    const Produit = {idclient,nomproduit,idcategorie,dureeenchereminute,prixmin};
    //console.log(Produit);
    fetch('https://encherews-production-b628.up.railway.app/Produit/save',{
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(Produit)
    })
    setError("Ajout effectuer");
  } 

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
            <IonTitle>Ajouter une enchere</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding" fullscreen>
        <form className="ion-padding" onSubmit={ajouter}>
          <IonItem>
            <IonLabel position="floating">Nom produit</IonLabel>
            <IonInput onIonChange={(e: any) => setNomproduit(e.target.value)}/>
          </IonItem>
          <IonItem>
            <IonSelect placeholder="Categorie" onIonChange={(e: any) => setIdcategorie(e.target.value)}>
            {items.map((item) => {
              return (
                <IonSelectOption value={item.id}>{item.nomcategorie}</IonSelectOption>
              )
            })}
            </IonSelect >
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Duree (minutes)</IonLabel>
            <IonInput type='text' onIonChange={(e: any) => setDureeenchereminute(e.target.value)}/>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Prix Minimum</IonLabel>
            <IonInput type='number' onIonChange={(e: any) => setPrixmin(e.target.value)}/>
          </IonItem>
          {error && <p>{error}</p>}
          <IonButton className="ion-margin-top" type="submit" expand="block">
            Ajouter
          </IonButton>
        </form>
        </IonContent>
      </IonPage>
    </>
  );
};

export default AjoutEnchere;
