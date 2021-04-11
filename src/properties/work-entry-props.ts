export interface WorkEntryProps {
	company: string;
	terms: {
		position: string;
		start: string;
		end: string;
		highlights: string[];
		summary?: string[];
	}[]
}
