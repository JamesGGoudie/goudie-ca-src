import { CourseEntryProps } from 'src/properties';

export interface EducationInfo {
	schoolName: string;
	degree: string;
	distinction: string;
	start: string;
	end: string;
	highlights: string[];
	coursesHeader: string;
	coures: CourseEntryProps[]
}
