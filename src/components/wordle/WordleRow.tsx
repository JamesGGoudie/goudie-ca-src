import React from 'react';
import { WordleCellState } from 'src/enums';
import { WordleRowProps } from 'src/properties';
import WordleCell from './WordleCell';

import './WordleRow.scss';

class WordleRow extends React.Component<WordleRowProps> {

	private values: string[];
	private cellStates: WordleCellState.Value[];
	private disabled: boolean
	private onValueUpdate: (value: string, index: number) => void;
	private onCellStateUpdate: (cellState: WordleCellState.Value, index: number) => void;

	constructor(props: WordleRowProps) {
		super(props);
		this.values = props.values;
		this.cellStates = props.cellStates;
		this.disabled = props.disabled;
		this.onValueUpdate = props.onValueUpdate;
		this.onCellStateUpdate = props.onCellStateUpdate;
	}

	render(): JSX.Element {
		return (
			<div className="wordle-row">
				{[...Array(5)].map((e, i) => <WordleCell
					key={i}
					value={this.values[i]}
					cellState={this.cellStates[i]}
					disabled={this.disabled}
					onValueUpdate={e => this.onValueUpdate(e, i)}
					onStateUpdate={e => this.onCellStateUpdate(e, i)}></WordleCell>)}
			</div>
		);
	}
}

export default WordleRow;
