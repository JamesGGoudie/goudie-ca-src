import { WordleCellState } from 'src/enums';

export interface WordleCellProps {
	disabled: boolean;
	value: string;
	cellState: WordleCellState.Value;
	onValueUpdate: (value: string) => void;
	onStateUpdate: (value: WordleCellState.Value) => void;
}
