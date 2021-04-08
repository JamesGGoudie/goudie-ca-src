import React from 'react';
import { IonContent, IonPage } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';

import TopBar from 'src/components/TopBar';
import TopBarFullscreen from 'src/components/TopBarFullscreen';

import './Home.scss';

const title = 'Home';

const Home: React.FC = () => {

	const name = 'Home - Local';

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

export default Home;
