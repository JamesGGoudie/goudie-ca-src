import React from 'react';
import { IonContent, IonPage } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';

import TopBar from 'src/components/TopBar';
import TopBarFullscreen from 'src/components/TopBarFullscreen';

import './Skills.scss';

const title = '404';

const NotFound: React.FC = () => {

	const name = '404 - Local';

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

export default NotFound;
