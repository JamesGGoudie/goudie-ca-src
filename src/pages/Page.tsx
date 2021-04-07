import React from 'react';
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useParams } from 'react-router';
import { Redirect } from 'react-router-dom';
import ExploreContainer from '../components/ExploreContainer';
import './Page.scss';
import { ROUTES } from 'src/constants';

const Page: React.FC = () => {

	const { name } = useParams<{ name: string; }>();

	if (!Object.values(ROUTES).find((r) => r.substring(1) === name)) {
		return (
			<Redirect to={ROUTES.HOME} />
		);
	}

	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonButtons slot="start">
						<IonMenuButton />
					</IonButtons>
					<IonTitle>{name}</IonTitle>
				</IonToolbar>
			</IonHeader>

			<IonContent fullscreen>
				<IonHeader collapse="condense">
					<IonToolbar>
						<IonTitle size="large">{name}</IonTitle>
					</IonToolbar>
				</IonHeader>
				<ExploreContainer name={name} />
			</IonContent>
		</IonPage>
	);
};

export default Page;
