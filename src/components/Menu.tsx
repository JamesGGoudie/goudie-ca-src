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

import { NAV_MENU_OPTIONS } from 'src/constants';

import './Menu.scss';

const Menu: React.FC = () => {
	const location = useLocation();

	return (
		<IonMenu contentId="main" type="overlay">
			<IonContent>
				{NAV_MENU_OPTIONS.map((appPageGroup, i) => {
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
