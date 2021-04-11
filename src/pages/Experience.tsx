import React from 'react';
import { IonContent, IonPage } from '@ionic/react';

import TopBar from 'src/components/TopBar';
import TopBarFullscreen from 'src/components/TopBarFullscreen';
import WorkEntry from 'src/components/WorkEntry';

import './Experience.scss';
import { XP_INFO } from 'src/constants';

const title = 'Experience';

const Experience: React.FC = () => {

	return (
		<IonPage>
			<TopBar title={title} />

			<IonContent >
				<TopBarFullscreen title={title} />
				<div className="page">
					{XP_INFO.map((workEntry, i) => <WorkEntry key={i}
						company={workEntry.company}
						terms={workEntry.terms}
					/>)}
				</div>
			</IonContent>
		</IonPage>
	);
};

export default Experience;
