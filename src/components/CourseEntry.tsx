import React from 'react';

import {
	IonCard,
	IonCardContent,
	IonCardHeader,
	IonCardSubtitle,
	IonCardTitle
} from '@ionic/react';

import { CourseEntryProps } from 'src/properties';

import './CourseEntry.scss';

function buildSubtitle(grade: string, average: string): string {
	return 'Grade: ' + grade + ' | ' + 'Average: ' + average;
}

const CourseEntry: React.FC<CourseEntryProps> = (
	{
		title,
		grade,
		average,
		summary
	}: CourseEntryProps
) => {
	return (
		<IonCard className="course-entry">
			<IonCardHeader>
				<IonCardSubtitle>{buildSubtitle(grade, average)}</IonCardSubtitle>
				<IonCardTitle>{title}</IonCardTitle>
			</IonCardHeader>
			<IonCardContent>
				{summary}
			</IonCardContent>
		</IonCard>
	);
};

export default CourseEntry;
