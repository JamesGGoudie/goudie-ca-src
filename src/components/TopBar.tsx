import React from 'react';
import { IonButtons, IonHeader, IonMenuButton, IonTitle, IonToolbar } from '@ionic/react';

import './TopBar.scss';

interface TopBarProps {
  title: string;
}

const TopBar: React.FC<TopBarProps> = ({ title }: TopBarProps) => {
	return (
		<IonHeader>
			<IonToolbar>
				<IonButtons slot="start">
					<IonMenuButton />
				</IonButtons>
				<IonTitle>{title}</IonTitle>
			</IonToolbar>
		</IonHeader>
	);
};

export default TopBar;
