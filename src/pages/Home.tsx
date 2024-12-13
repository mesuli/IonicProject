import React from 'react';
import { IonButton, IonContent, IonHeader, IonInput, IonPage, IonTitle, IonToolbar, IonRouterLink, IonGrid, IonRow, IonCol } from '@ionic/react';
import '../theme/Home/Home.css';

const Home: React.FC = () => {
  const handleLogin = () => {
    // Implement your login logic here
    console.log('Login button clicked');
  };

  return (
    <IonPage>
      <IonHeader style={{ paddingBottom: '20px' }}>
        <IonToolbar>
          <IonTitle>TONTRAC</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding" style={{ paddingTop: '60vh' }} fullscreen>
        <IonGrid className="ion-text-center ion-align-items-center" style={{ paddingTop: '30vh' }}>
          <IonRow>
            <IonCol size="12">
              <IonInput className="input-field" placeholder="Username"></IonInput>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="12">
              <IonInput className="input-field" type="password" placeholder="Password"></IonInput>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="12">
              <IonRouterLink routerLink="/Main">
                <IonButton expand="block" size="small" fill="clear" onClick={handleLogin}>Login</IonButton>
              </IonRouterLink>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Home;
