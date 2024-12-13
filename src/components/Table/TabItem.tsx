// components/TabItem.tsx
import React from 'react';
import'./Tabltem.css';
import { IonItem, IonIcon, IonLabel } from '@ionic/react';

interface TabItemProps {
  label: string;
  icon: string | any;
  route: string;
  customClass?: string;
}

const TabItem: React.FC<TabItemProps> = ({ label, icon, route, customClass }) => {
  return (
    <IonItem 
      routerLink={route} 
      className={`link-item ${customClass}`} 
      lines="none"  // Disable underlining by default, but you can customize
    >
      <IonIcon icon={icon} slot="start" />
      <IonLabel>{label}</IonLabel>
    </IonItem>
  );
};

export default TabItem;
