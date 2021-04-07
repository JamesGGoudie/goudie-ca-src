interface RouteInfo {
	path: string;
	title: string;
}

interface Routes {
	[key: string]: RouteInfo;
	HOME: RouteInfo;
	ABOUT: RouteInfo;
	EDUCATION: RouteInfo;
	EXPERIENCE: RouteInfo;
	SKILLS: RouteInfo;
}

export const ROUTES: Routes = {
	HOME: {
		path: '/home',
		title: 'Home'
	},
	ABOUT: {
		path: '/about',
		title: 'About'
	},
	EDUCATION: {
		path: '/education',
		title: 'Education'
	},
	EXPERIENCE: {
		path: '/experience',
		title: 'Experience'
	},
	SKILLS: {
		path: '/skills',
		title: 'Skills'
	}
};
