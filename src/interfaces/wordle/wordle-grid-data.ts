import { WordleCellState } from 'src/enums';

export interface WordleGridData {
	rows: {
		cells: {
			cellState: WordleCellState.Value;
			value: string;
		}[];
	}[]
}
