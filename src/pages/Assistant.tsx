import React, { useState } from 'react';
import '../theme/Assistant/Assistant.css';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonInput, IonButton, IonText, IonButtons, IonBackButton } from '@ionic/react';
import axios from 'axios';

const Assistant: React.FC = () => {
  const [question, setQuestion] = useState<string>('');
  const [response, setResponse] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const handleQuestionChange = (event: CustomEvent) => {
    setQuestion(event.detail.value!);
  };

  const handleAsk = async () => {
    if (!question) return;

    setLoading(true);
    setResponse('');

    try {
      const result = await axios.post('/api/ask-ai', { question });
      setResponse(result.data.answer);
    } catch (error) {
      console.error('Error asking AI:', error);
      setResponse('There was an error getting a response from the AI.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/main" />
          </IonButtons>
          <IonTitle>AI Assistance</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonInput
          value={question}
          placeholder="Type your question here..."
          onIonChange={handleQuestionChange}
          clearInput
        />
        <IonButton
            expand="block"
            onClick={handleAsk}
            disabled={loading}
            style={{ backgroundColor: '#d65f1c', color: '#fff' }}
            >
            {loading ? 'Asking...' : 'Ask AI'}
            </IonButton>

        <IonText className="ion-margin-top">
          {response && (
            <div>
              <h3>Response:</h3>
              <p>{response}</p>
            </div>
          )}
        </IonText>
      </IonContent>
    </IonPage>
  );
};

export default Assistant;
