import React from 'react';
import { IonContent, IonPage } from '@ionic/react';
import { useLocation } from 'react-router-dom';

import TopBar from 'src/components/TopBar';
import TopBarFullscreen from 'src/components/TopBarFullscreen';

import './NotFound.scss';

const title = '404';

const NotFound: React.FC = () => {
	const location = useLocation();
	const unknownPath = location.pathname;

	return (
		<IonPage>
			<TopBar title={title} />

			<IonContent >
				<TopBarFullscreen title={title} />
				<div className="not-found-page">
					<h3>404 - Unknown Path</h3>
					<p>{unknownPath}</p>
				</div>
			</IonContent>
		</IonPage>
	);
};

export default NotFound;
