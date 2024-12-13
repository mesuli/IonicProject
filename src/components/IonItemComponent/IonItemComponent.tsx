import React from 'react';
import './IonItemComponent.css';
import { IonItem, IonLabel, IonRadioGroup, IonRadio } from '@ionic/react';

interface CustomIonItemProps {
  question: string;
  answer: string;
  onChange: (event: CustomEvent) => void;
  questionKey: string;
}

const CustomIonItem: React.FC<CustomIonItemProps> = ({ question, answer, onChange, questionKey }) => {
  return (
    <IonItem>
      <IonLabel style={{ fontSize: '12px' }}>{question}</IonLabel>
      <IonRadioGroup value={answer} onIonChange={(e) => onChange(e)}>
        <IonItem
          className={answer === 'yes' ? 'radio-yes-checked' : 'radio-yes-unchecked'}
          style={{ marginTop: 0 }}
        >
          <IonLabel>Yes</IonLabel>
          <IonRadio slot="start" value="yes" />
        </IonItem>
        <IonItem
          className={answer === 'no' ? 'radio-no-checked' : 'radio-no-unchecked'}
          style={{ marginTop: 0 }}
        >
          <IonLabel>No</IonLabel>
          <IonRadio slot="start" value="no" />
        </IonItem>
      </IonRadioGroup>
    </IonItem>
  );
};

export default CustomIonItem;
