export interface AppPageGroup {
	header?: string;
	notes: string[];
	pages: {
		url: string;
		iosIcon: string;
		mdIcon: string;
		title: string;
	}[];
}
