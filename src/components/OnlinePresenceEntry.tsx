import React from 'react';

import {
	IonCard,
	IonCardContent,
	IonCardHeader,
	IonCardSubtitle,
	IonCardTitle
} from '@ionic/react';

import { OnlinePresenceEntryProps } from 'src/properties';

import './OnlinePresenceEntry.scss';

const OnlinePresenceEntry: React.FC<OnlinePresenceEntryProps> = (
	{
		title,
		subtitle,
		mainContent,
		anchorHref,
		anchorText
	}: OnlinePresenceEntryProps
) => {
	return (
		<IonCard className="online-presence-entry">
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

export default OnlinePresenceEntry;
