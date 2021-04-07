import React from 'react';
import { IonHeader, IonTitle, IonToolbar } from '@ionic/react';

import './TopBarFullscreen.scss';

interface TopBarFullscreenProps {
  title: string;
}

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
