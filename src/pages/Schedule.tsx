import React, { useState } from 'react';
import { IonBackButton, IonButtons, IonContent, IonHeader, IonPage, IonSelect, IonSelectOption, IonTitle, IonToolbar } from '@ionic/react';
import '../theme/Schedule/Schedule.css';

const Schedule: React.FC = () => {
  const [selectedSite, setSelectedSite] = useState<string | undefined>();
  const [activeShift, setActiveShift] = useState<any>(null);
  const [followingShift, setFollowingShift] = useState<any>(null);

  const sites = ['Site 1', 'Site 2', 'Site 3']; // Replace with your actual site data

  const handleSiteChange = (event: CustomEvent) => {
    const site = event.detail.value;
    setSelectedSite(site);
    
    // Mock shift data - replace with actual data fetching logic
    if (site) {
      setActiveShift({
        startDate: '2024-08-28',
        startTime: '08:00 AM',
        endDate: '2024-08-28',
        endTime: '04:00 PM',
      });
      setFollowingShift({
        startDate: '2024-08-29',
        startTime: '08:00 AM',
        endDate: '2024-08-29',
        endTime: '04:00 PM',
      });
    } else {
      setActiveShift(null);
      setFollowingShift(null);
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/main" />
          </IonButtons>
          <IonTitle>SCHEDULE</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent id="main-content" fullscreen>
        <div className="centered-content">
          <h2>SCHEDULE FOR THE WEEK</h2>
          <IonSelect
            value={selectedSite}
            placeholder="SELECT SITE" /* Added placeholder text */
            onIonChange={handleSiteChange}
            className="site-select"
          >
            {sites.map(site => (
              <IonSelectOption key={site} value={site}>
                {site}
              </IonSelectOption>
            ))}
          </IonSelect>

          {activeShift && (
            <div className="shift-info show">
              <h2>Active Shift</h2>
              <p>Site: {selectedSite}</p>
              <p>Start Date: {activeShift.startDate}</p>
              <p>Start Time: {activeShift.startTime}</p>
              <p>End Date: {activeShift.endDate}</p>
              <p>End Time: {activeShift.endTime}</p>
            </div>
          )}

          {followingShift ? (
            <div className="shift-info show">
              <h2>Following Shift</h2>
              <p>Site: {selectedSite}</p>
              <p>Start Date: {followingShift.startDate}</p>
              <p>Start Time: {followingShift.startTime}</p>
              <p>End Date: {followingShift.endDate}</p>
              <p>End Time: {followingShift.endTime}</p>
            </div>
          ) : (
            selectedSite && (
              <div className="no-following-shift">
                <p>No following shift available for the selected site.</p>
              </div>
            )
          )}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Schedule;
