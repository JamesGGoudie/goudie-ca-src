import { WordleCellState } from 'src/enums';

export interface WordleRowProps {
	disabled: boolean;
	values: string[];
	cellStates: WordleCellState.Value[];
	onValueUpdate: (value: string, index: number) => void;
	onCellStateUpdate: (cellState: WordleCellState.Value, index: number) => void;
}
