import React, { useState } from 'react';
import '../theme/MainPage/MainPage.css';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonMenuButton, IonMenu, IonList, IonButton, IonIcon, IonSegment, IonSegmentButton, IonLabel, IonFooter, IonTabBar, IonTabButton } from '@ionic/react';
import TabItem from '../components/Table/TabItem'; // Import the reusable TabItem component
import { listOutline, carOutline, shieldOutline, cubeOutline, helpOutline, personOutline, logOutOutline, documentTextOutline, settingsOutline, paperPlaneOutline } from 'ionicons/icons'; // Import icons

const MenuPage: React.FC = () => {
  const [selectedNote, setSelectedNote] = useState<'maintenance' | 'network'>('maintenance');

  const handleMenuToggle = () => {
    // Any additional logic if needed when the menu is toggled
  };

  const handleLogout = () => {
    // Handle logout logic here
    console.log("Logging out...");
  };

  return (
    <IonPage>
      <IonMenu contentId="main-content" side="end" onIonWillOpen={handleMenuToggle}>
        <IonHeader>
          <IonToolbar className="header-toolbar">
            <IonTitle className="menu-title">Menu</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <div className="user-login">
            <TabItem label="User Login" icon={personOutline} route="/login" customClass="user-login-item" />
          </div>
          <IonList>
            <TabItem label="CHECKLIST" icon={listOutline} route="/checklists" customClass="checklist-item" />
            <TabItem label="ASSISTANT" icon={helpOutline} route="/tech-assistant" customClass="assistant-item" />
            <TabItem label="SCHEDULE" icon={cubeOutline} route="/schedule" customClass="stock-item" />
            <TabItem label="VEHICLE" icon={carOutline} route="/vehicle" customClass="vehicle-item" />
            <TabItem label="SAFETY" icon={shieldOutline} route="/safety" customClass="safety-item" />
            <TabItem label="STOCK" icon={cubeOutline} route="/stock" customClass="stock-item" />
          </IonList>
          <IonButton expand="full" fill="outline" className="logout-button" onClick={handleLogout}>
            <IonIcon icon={logOutOutline} slot="start" />
            Logout
          </IonButton>
        </IonContent>
      </IonMenu>
      
      <IonHeader>
        <IonToolbar className="header-toolbar" style={{ background: 'lightgray' }}>
          <img src="/ton.png" alt="TONTRAC Logo" className="logo" />
          <IonTitle className="main-title">TONTRAC FST</IonTitle>
          <IonMenuButton slot="end" />
        </IonToolbar>
      </IonHeader>
      
      <IonContent id="main-content" fullscreen>
        <div className="notes-tabs">
          <IonSegment value={selectedNote} onIonChange={(e) => setSelectedNote(e.detail.value as 'maintenance' | 'network')}>
            <IonSegmentButton value="updates">
              <IonLabel className="link-label">Updates</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="maintenance">
              <IonLabel className="link-label">Values</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="network">
              <IonLabel className="link-label">Notes</IonLabel>
            </IonSegmentButton>
          </IonSegment>
        </div>

        <div className="notes-section">
          {selectedNote === 'maintenance' && (
            <div>
              <h2 className="custom-h2">Maintenance Notes</h2>
              <ul>
                {/* Maintenance notes content */}
              </ul>
            </div>
          )}
          {selectedNote === 'network' && (
            <div>
              <h2 className='custom-h2'>Network Notes</h2>
              <ul>
                {/* Network notes content */}
              </ul>
            </div>
          )}
        </div>
      </IonContent>

      <IonFooter>
        <IonTabBar className="bottom-tab-bar">
          <IonTabButton tab="updates" href="/updates">
            <IonIcon icon={documentTextOutline} />
          </IonTabButton>
          <IonTabButton tab="values" href="/values">
            <IonIcon icon={settingsOutline} />
          </IonTabButton>
          <IonTabButton tab="notes" href="/notes">
            <IonIcon icon={paperPlaneOutline} />
          </IonTabButton>
        </IonTabBar>
      </IonFooter>
    </IonPage>
  );
};

export default MenuPage;
