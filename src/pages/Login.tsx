import { IonButton, IonButtons, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonMenu, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useState } from 'react';
import { useHistory } from 'react-router';
import ExploreContainer from '../components/ExploreContainer';
import './Login.css';


const Login: React.FC = () => {

  const [email, setEmail] = useState('rakoto@gmail.com');
  const [motdepasse, setMotdepasse] = useState('123');
  const history = useHistory();
  const [error, setError] = useState('');
  const [message,setMessage] = useState('');

  const login = (event :any) => {
    event.preventDefault();
    fetch('https://encherews-production-b628.up.railway.app/Client/login',{
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: email, motdepasse: motdepasse })
    })
    .then(response => {
      if (!response.ok) {
        setError('Identifiant ou mot de passe incorrect');
        throw Error(response.statusText);
      }
      return response.json();
    })
    .then(data => {
      if(data.data=="Login invalid"){
        setMessage(data.data);
        console.log(data.data);
      } else{
        localStorage.setItem('data',data.data.id);
        window.location.replace('/AjoutEnchere');
      }
    })
    .catch(error => console.log(error));
  }

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
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <form className="ion-padding" onSubmit={login}>
          <IonItem>
            <p>Email: rakoto@gmail.com </p>
            <IonLabel position="floating">Email</IonLabel>
            <IonInput onIonChange={(e: any) => setEmail(e.target.value)}/>
          </IonItem>
          <IonItem>
            <p>Password: 123</p>
            <IonLabel position="floating">Password</IonLabel>
            <IonInput type="password" onIonChange={(e :any)=> setMotdepasse(e.target.value)}/>
          </IonItem>

          {message && <p>{message}</p>}
          <IonButton className="ion-margin-top" type="submit" expand="block" onClick={login}>
            Login
          </IonButton>
        </form>
      </IonContent>
    </IonPage>
    </>
  );
};

export default Login;
