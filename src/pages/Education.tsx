import React from 'react';
import { IonContent, IonPage } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';

import TopBar from 'src/components/TopBar';
import TopBarFullscreen from 'src/components/TopBarFullscreen';

import './Education.scss';

const title = 'Education';

const Education: React.FC = () => {

	const name = 'Education - Local';

	return (
		<IonPage>
			<TopBar title={title} />

			<IonContent fullscreen>
				<TopBarFullscreen title={title} />
				<ExploreContainer name={name} />
			</IonContent>
		</IonPage>
	);
};

export default Education;
