import React from 'react';
import { WordleCellState } from 'src/enums';
import { WordleGridData } from 'src/interfaces';
import { WordleGridProps } from 'src/properties';

import './WordleGrid.scss';
import WordleRow from './WordleRow';

class WordleGrid extends React.Component<WordleGridProps> {

	private onGridUpdate: (gridData: WordleGridData) => void;
	private gridData: WordleGridData;

	constructor(props: WordleGridProps) {
		super(props);
		this.onGridUpdate = props.onGridUpdate;

		this.gridData = {
			rows: [...Array(6)].map(() => {
				return {
					cells: [...Array(5)].map(() => {
						return {
							cellState: WordleCellState.Value.UNKNOWN,
							value: ' '
						};
					})
				};
			})
		};
	}

	render(): JSX.Element {
		return (
			<div className="wordle-grid">
				{[...Array(6)].map((e, i) => <WordleRow
					key={i}
					disabled={false}
					values={[' ', ' ', ' ', ' ', ' ']}
					cellStates={[WordleCellState.Value.UNKNOWN, WordleCellState.Value.UNKNOWN, WordleCellState.Value.UNKNOWN, WordleCellState.Value.UNKNOWN, WordleCellState.Value.UNKNOWN]}
					onValueUpdate={(value, cellIndex) => {
						this.gridData.rows[i].cells[cellIndex].value = value;
						this.onGridUpdate(this.gridData);
					}}
					onCellStateUpdate={(cellState, cellIndex) => {
						this.gridData.rows[i].cells[cellIndex].cellState = cellState;
						this.onGridUpdate(this.gridData);
					}}>
				</WordleRow>)}
			</div>
		);
	}
}

export default WordleGrid;
