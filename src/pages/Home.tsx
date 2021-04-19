import React from 'react';

import {
	IonContent,
	IonImg,
	IonItem,
	IonLabel,
	IonList,
	IonListHeader,
	IonPage
} from '@ionic/react';

import AnchorCard from 'src/components/AnchorCard';
import TopBar from 'src/components/TopBar';
import TopBarFullscreen from 'src/components/TopBarFullscreen';

import {
	FREE_TIME_INFO,
	HOME_INTRO,
	IMG_ALTS,
	ONLINE_PRESENCE_INFO
} from 'src/constants';

import './Home.scss';

const title = 'Home';

const Home: React.FC = () => {

	return (
		<IonPage>
			<TopBar title={title} />

			<IonContent >
				<TopBarFullscreen title={title} />
				<div className="page">
					<div className="intro">
						<IonImg
							alt={IMG_ALTS.WORK_ID}
							src="assets/images/work-id.jpeg"/>
						<div>
							{HOME_INTRO.map((p, i) => <p key={i}>{p}</p>)}
						</div>
					</div>
					<div className="online-presence">
						{ONLINE_PRESENCE_INFO.map((opi, i) => <AnchorCard
							key={i}
							title={opi.title}
							subtitle={opi.subtitle}
							mainContent={opi.mainContent}
							anchorHref={opi.anchorHref}
							anchorText={opi.anchorText}
							isDownload={opi.isDownload}/>)}
					</div>
					<div className="free-time-activities">
						<IonList>
							<IonListHeader>
								{FREE_TIME_INFO.header}
							</IonListHeader>
							{FREE_TIME_INFO.categories.map((category, i) => <IonItem key={i}>
								<IonLabel>
									<span>{category.title}:</span> {category.entries.join(', ')}
								</IonLabel>
							</IonItem>)}
						</IonList>
					</div>
				</div>
			</IonContent>
		</IonPage>
	);
};

export default Home;
