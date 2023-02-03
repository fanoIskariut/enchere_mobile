import { IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonMenu, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { addCircle, list } from 'ionicons/icons';
import { useState } from 'react';

const Rechargement: React.FC = () => {
    
    const [id, setIdclient] = useState('');
    const [montant, setMontant] = useState('');
    const idclient = localStorage.getItem('data');
    const [error, setError] = useState('');
    console.log(idclient);

    const add = (event :any) => {
        event.preventDefault();
        window.location.replace('/AjoutEnchere');
      }
      const out = (event :any) => {
        event.preventDefault();
        window.location.replace('/Login');
      }
      const recharge = (event :any) => {
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

    const rechargement = (event :any) => {
        event.preventDefault();
        const Demande = {idclient,montant};
        fetch('https://encherews-production-b628.up.railway.app/DemandeRechargement/save',{
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(Demande)
        })
        .then(response => {
            return response.json();
        })
        .then(data => {
            localStorage.setItem('data',JSON.stringify(data));
            window.location.replace('/Rechargement');
            setError("Ajout effectuer");
        });
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
            <IonLabel onClick={recharge}>Recharger Compte</IonLabel>
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
                    <IonTitle>Demande de rechargement</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <form className="ion-padding" onSubmit={rechargement}>
                    <IonItem>
                        <IonLabel position="floating">Montant</IonLabel>
                        <IonInput type="number" onIonChange={(e: any) => setMontant(e.target.value)}/>
                    </IonItem>
                    {error && <p>{error}</p>}
                    <IonButton className="ion-margin-top" type="submit" expand="block">Confirmer</IonButton>
                </form>
            </IonContent>
        </IonPage>
        </>
    );
};

export default Rechargement;