import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import React from 'react';

import { OnlinePresenceProps } from 'src/properties';

import './OnlinePresence.scss';

const OnlinePresence: React.FC<OnlinePresenceProps> = (
	{
		title,
		subtitle,
		mainContent,
		anchorHref,
		anchorText
	}: OnlinePresenceProps
) => {
	return (
		<IonCard>
			<IonCardHeader>
				<IonCardSubtitle>{title}</IonCardSubtitle>
				<IonCardTitle>{subtitle}</IonCardTitle>
			</IonCardHeader>
			<IonCardContent>
				<div>{mainContent}</div>
				<a href={anchorHref}>{anchorText ? anchorText : anchorHref}</a>
			</IonCardContent>
		</IonCard>
	);
};

export default OnlinePresence;
