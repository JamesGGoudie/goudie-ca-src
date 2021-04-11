import React from 'react';
import { IonHeader, IonTitle, IonToolbar } from '@ionic/react';

import { TopBarFullscreenProps } from 'src/properties';

import './TopBarFullscreen.scss';

const TopBarFullscreen: React.FC<TopBarFullscreenProps> = ({ title }: TopBarFullscreenProps) => {
	return (
		<IonHeader collapse="condense">
			<IonToolbar>
				<IonTitle size="large">{title}</IonTitle>
			</IonToolbar>
		</IonHeader>
	);
};

export default TopBarFullscreen;
