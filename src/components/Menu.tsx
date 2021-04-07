import React from 'react';

import {
	IonContent,
	IonIcon,
	IonItem,
	IonLabel,
	IonList,
	IonListHeader,
	IonMenu,
	IonMenuToggle,
	IonNote,
} from '@ionic/react';

import { useLocation } from 'react-router-dom';

import {
	briefcaseOutline,
	briefcaseSharp,
	cogOutline,
	cogSharp,
	homeOutline,
	homeSharp,
	informationCircleOutline,
	informationCircleSharp,
	schoolOutline,
	schoolSharp
} from 'ionicons/icons';

import { ROUTES } from 'src/constants';

import './Menu.scss';

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

interface AppPageGroup {
	header?: string;
	notes: string[];
	pages: AppPage[];
}

const appPageGroups: AppPageGroup[] = [
	{
		header: 'James Gabriel Goudie',
		notes: ['Software Developer / Engineer'],
		pages: [
			{
				title: 'Home',
				url: ROUTES.HOME,
				iosIcon: homeOutline,
				mdIcon: homeSharp
			},
			{
				title: 'About',
				url: ROUTES.ABOUT,
				iosIcon: informationCircleOutline,
				mdIcon: informationCircleSharp
			},
			{
				title: 'Education',
				url: ROUTES.EDUCATION,
				iosIcon: schoolOutline,
				mdIcon: schoolSharp
			},
			{
				title: 'Experience',
				url: ROUTES.EXPERIENCE,
				iosIcon: briefcaseOutline,
				mdIcon: briefcaseSharp
			},
			{
				title: 'Skills',
				url: ROUTES.SKILLS,
				iosIcon: cogOutline,
				mdIcon: cogSharp
			}
		]
	}
];

const Menu: React.FC = () => {
	const location = useLocation();

	return (
		<IonMenu contentId="main" type="overlay">
			<IonContent>
				{appPageGroups.map((appPageGroup, i) => {
					return (<IonList key={i}>
						{appPageGroup.header ? <IonListHeader>{appPageGroup.header}</IonListHeader> : null}
						{appPageGroup.notes.map((note, index) => {
							return (
								<IonNote key={index}>{note}</IonNote>
							);
						})}
						{appPageGroup.pages.map((appPage, index) => {
							return (
								<IonMenuToggle key={index} autoHide={false}>
									<IonItem
										className={location.pathname === appPage.url ? 'selected' : ''}
										routerLink={appPage.url}
										routerDirection="none"
										lines="none"
										detail={false}
									>
										<IonIcon slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
										<IonLabel>{appPage.title}</IonLabel>
									</IonItem>
								</IonMenuToggle>
							);
						})}
					</IonList>);
				})}
			</IonContent>
		</IonMenu>
	);
};

export default Menu;
