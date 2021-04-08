import React from 'react';
import { IonContent, IonPage } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';

import TopBar from 'src/components/TopBar';
import TopBarFullscreen from 'src/components/TopBarFullscreen';

import './Skills.scss';

const title = 'Skills';

const Skills: React.FC = () => {

	const name = 'Skills - Local';

	return (
		<IonPage>
			<TopBar title={title} />

			<IonContent >
				<TopBarFullscreen title={title} />
				<ExploreContainer name={name} />
			</IonContent>
		</IonPage>
	);
};

export default Skills;
