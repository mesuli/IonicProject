import React, { useState } from 'react';
import '../theme/Ckecklist/Checklist.css';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonButton, IonInput, IonButtons, IonBackButton, IonItem, IonLabel, IonListHeader } from '@ionic/react';
import CustomIonItem from '../components/IonItemComponent/IonItemComponent';

const ChecklistPage: React.FC = () => {
  const [answer, setAnswer] = useState({
    pcClean: 'yes',
    boomClean: 'yes',
    plinthMounted: 'yes',
    cablesNeat: 'yes',
    ttBoxMounted: 'yes',
    wasFunctional: 'yes',
  });

  const [name, setName] = useState('');
  const [site, setSite] = useState('');

  const handleRadioChange = (event: CustomEvent, question: string) => {
    setAnswer({
      ...answer,
      [question]: event.detail.value
    });
  };

  const handleNameChange = (event: CustomEvent) => {
    setName(event.detail.value!);
  };

  const handleSiteChange = (event: CustomEvent) => {
    setSite(event.detail.value!);
  };

  const handleSubmit = () => {
    console.log('Submitted:', { name, site, answer });
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/main" />
          </IonButtons>
          <IonTitle>Vehicle Checklist</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Vehicle Checklist</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonList>
          {/* Name and site inputs */}
          <IonItem className="ion-text-center" style={{ maxWidth: '50%', marginLeft: 'auto', marginRight: 'auto' }}>
            <IonLabel className="ion-margin-bottom" position="floating">Name</IonLabel>
            <IonInput value={name} onIonChange={handleNameChange} />
          </IonItem>
          <IonItem className="ion-text-center" style={{ maxWidth: '50%', marginLeft: 'auto', marginRight: 'auto' }}>
            <IonLabel className="ion-margin-bottom" position="floating">Site</IonLabel>
            <IonInput value={site} onIonChange={handleSiteChange} />
          </IonItem>

          {/* Main Gate section */}
          <IonListHeader>Main Gate</IonListHeader>

          <CustomIonItem
            question="Is the PC clean from dust and cables secure?"
            answer={answer.pcClean}
            onChange={(e) => handleRadioChange(e, 'pcClean')}
            questionKey="pcClean"
          />

          <CustomIonItem
            question="Boom clean and mounted on plinth?"
            answer={answer.boomClean}
            onChange={(e) => handleRadioChange(e, 'boomClean')}
            questionKey="boomClean"
          />

          <CustomIonItem
            question="Plinth mounted on the ground?"
            answer={answer.plinthMounted}
            onChange={(e) => handleRadioChange(e, 'plinthMounted')}
            questionKey="plinthMounted"
          />

          <CustomIonItem
            question="Cables neat and secure?"
            answer={answer.cablesNeat}
            onChange={(e) => handleRadioChange(e, 'cablesNeat')}
            questionKey="cablesNeat"
          />

          <CustomIonItem
            question="TT box and stand mounted?"
            answer={answer.ttBoxMounted}
            onChange={(e) => handleRadioChange(e, 'ttBoxMounted')}
            questionKey="ttBoxMounted"
          />

          <CustomIonItem
            question="WAS clean and functional?"
            answer={answer.wasFunctional}
            onChange={(e) => handleRadioChange(e, 'wasFunctional')}
            questionKey="wasFunctional"
          />

        </IonList>
        <IonButton onClick={handleSubmit}>Submit</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default ChecklistPage;
