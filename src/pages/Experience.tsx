import React from 'react';
import { IonContent, IonPage } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';

import TopBar from 'src/components/TopBar';
import TopBarFullscreen from 'src/components/TopBarFullscreen';

import './Experience.scss';

const title = 'Experience';

const Experience: React.FC = () => {

	const name = 'Experience - Local';

	return (
		<IonPage>
			<TopBar title={title}/>

			<IonContent fullscreen>
				<TopBarFullscreen title={title}/>
				<ExploreContainer name={name} />
			</IonContent>
		</IonPage>
	);
};

export default Experience;
