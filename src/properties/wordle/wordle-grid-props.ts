import { WordleGridData } from 'src/interfaces';

export interface WordleGridProps {
	onGridUpdate: (gridData: WordleGridData) => void;
}
