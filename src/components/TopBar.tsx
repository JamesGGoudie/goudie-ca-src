import React from 'react';
import { IonButtons, IonHeader, IonMenuButton, IonTitle, IonToolbar } from '@ionic/react';

import { TopBarProps } from 'src/properties';

import './TopBar.scss';

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
