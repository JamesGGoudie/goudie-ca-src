import React from 'react';
import { IonContent, IonPage } from '@ionic/react';

import TopBar from 'src/components/TopBar';
import TopBarFullscreen from 'src/components/TopBarFullscreen';

import './About.scss';

const title = 'About';

const About: React.FC = () => {

	return (
		<IonPage>
			<TopBar title={title} />

			<IonContent >
				<TopBarFullscreen title={title} />
			</IonContent>
		</IonPage>
	);
};

export default About;
