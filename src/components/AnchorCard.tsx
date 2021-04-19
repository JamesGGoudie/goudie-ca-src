import React from 'react';

import {
	IonCard,
	IonCardContent,
	IonCardHeader,
	IonCardSubtitle,
	IonCardTitle
} from '@ionic/react';

import { AnchorCardProps } from 'src/properties';

import './AnchorCard.scss';

const AnchorCard: React.FC<AnchorCardProps> = (
	{
		title,
		subtitle,
		mainContent,
		anchorHref,
		anchorText,
		directDownload
	}: AnchorCardProps
) => {
	return (
		<IonCard className="anchor-card">
			<IonCardHeader>
				<IonCardSubtitle>{title}</IonCardSubtitle>
				<IonCardTitle>{subtitle}</IonCardTitle>
			</IonCardHeader>
			<IonCardContent>
				<div>{mainContent}</div>
				<a
					download={directDownload}
					href={anchorHref}
					target="_blank"
					rel='noreferrer'
				>
					{anchorText ? anchorText : anchorHref}
				</a>
			</IonCardContent>
		</IonCard>
	);
};

export default AnchorCard;
