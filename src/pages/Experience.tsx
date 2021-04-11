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
						position={workEntry.position}
						start={workEntry.start}
						end={workEntry.end}
						highlights={workEntry.highlights}
						summary={workEntry.summary}
					/>)}
				</div>
			</IonContent>
		</IonPage>
	);
};

export default Experience;
