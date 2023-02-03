import { IonButton, IonButtons, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonMenu, IonMenuButton, IonPage, IonSelect, IonSelectOption, IonTitle, IonToolbar } from '@ionic/react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Inscription: React.FC = () => {
    
  const[username,setUsername]=useState('')
  const[sexe,setSexe]=useState('')
  const[email,setEmail]=useState('')
  const[motdepasse,setMotdepasse]=useState('')
  const [message,setMessage] = useState('');

  const insert = (event :any) => {
    event.preventDefault();
    const Utilisateur={username,motdepasse,sexe,email}
    console.log(Utilisateur);
    fetch('https://encherews-production-b628.up.railway.app/Client/save',{
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(Utilisateur)
    })
    setMessage("Utilisateur inserer avec succès");
    //window.location.replace('/Login');

  };

  const inscription = (event :any) => {
    event.preventDefault();
    window.location.replace('/Inscription');
  }
  const out = (event :any) => {
    event.preventDefault();
    window.location.replace('/Login');
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
          <IonLabel onClick={out}>Login</IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel onClick={inscription}>Inscription</IonLabel>
        </IonItem>
      </IonContent>
    </IonMenu>
    <IonPage id="main-content">
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton></IonMenuButton>
          </IonButtons>
          <IonTitle>Inscription client</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
  
    <form className="ion-padding" onSubmit={insert}>
        
        <IonItem>
            <IonLabel position="floating"> Nom</IonLabel>
            <IonInput onIonChange={(e: any) => setUsername(e.target.value)} />
        </IonItem> 

        <IonItem>
          <IonSelect placeholder="Sexe" onIonChange={(e: any) => setSexe(e.target.value)}>
            <IonSelectOption value="1">Homme</IonSelectOption>
            <IonSelectOption value="0">Femme</IonSelectOption>
          </IonSelect >
        </IonItem>

        <IonItem> 
        <IonLabel position="floating">Email</IonLabel>   
         <IonInput onIonChange={(e: any) => setEmail(e.target.value)} />
        </IonItem>

        <IonItem> 
        <IonLabel position="floating">Mot de passe</IonLabel>    
        <IonInput type='password' onIonChange={(e: any) => setMotdepasse(e.target.value)} />
        </IonItem>
        {message && <p>{message}</p>}
        <IonButton className="ion-margin-top" type="submit" expand="block" >
            Inscription
        </IonButton> 
    </form>
    </IonContent>
    </IonPage>
    </>
  );
  
};
export default Inscription;

