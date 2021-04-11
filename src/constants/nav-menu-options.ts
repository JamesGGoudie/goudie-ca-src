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

import { AppPageGroup } from 'src/interfaces';

import { ROUTES } from './routes';

export const NAV_MENU_OPTIONS: AppPageGroup[] = [
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
