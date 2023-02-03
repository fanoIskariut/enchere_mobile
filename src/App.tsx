import { Redirect, Route } from 'react-router-dom';
import { IonApp,IonRouterOutlet,setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Login from './pages/Login';
import AjoutEnchere from './pages/AjoutEnchere';
import Inscription from './pages/Inscription';
import Rechargement from './pages/Rechargement';
import ListeEnchere from './pages/ListeEnchere';
import Notification from './pages/Notification';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
        <IonRouterOutlet>
          <Route exact path="/Login">
            <Login />
          </Route>
          <Route exact path="/AjoutEnchere">
            <AjoutEnchere />
          </Route>
          <Route exact path="/Inscription">
            <Inscription />
          </Route>
          <Route exact path="/Rechargement">
            <Rechargement />
          </Route>
          <Route exact path="/ListeEnchere">
            <ListeEnchere />
          </Route>
          <Route exact path="/Notification">
            <Notification />
          </Route>
          <Route exact path="/">
            <Redirect to="/Login" />
          </Route>
        </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
