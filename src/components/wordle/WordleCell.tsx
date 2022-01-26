import { IonInput } from '@ionic/react';
import React from 'react';
import { WordleCellState } from 'src/enums';
import { WordleCellProps } from 'src/properties';

import './WordleCell.scss';

class WordleCell extends React.Component<WordleCellProps> {

	private value: string;
	private disabled: boolean;
	private cellState: WordleCellState.Value;
	private onValueUpdate: (value: string) => void;
	private onStateUpdate: (value: WordleCellState.Value) => void;

	constructor(props: WordleCellProps) {
		super(props);
		this.value = props.value;
		this.cellState = props.cellState;
		this.disabled = props.disabled;
		this.onValueUpdate = props.onValueUpdate;
		this.onStateUpdate = props.onStateUpdate;
	}

	render(): JSX.Element {
		return (
			<div
				className={`wordle-cell ${WordleCellState.getClass(this.cellState)}`}
				onDoubleClick={() => {
					this.cellState = WordleCellState.nextState(this.cellState);
					this.setState({
						cellState: this.cellState
					});
					this.onStateUpdate(this.cellState);
				}}>
				<IonInput
					maxlength={1}
					disabled={this.disabled}
					value={this.value}
					onKeyPress={e => {
						const value = e.key;

						const charCode = value.charCodeAt(0);
						if (value.length === 0 || !((65 <= charCode && charCode <= 90) || (97 <= charCode && charCode <= 122))) {
							this.setState({
								value: this.value
							});
							this.onValueUpdate(this.value);
							return;
						}

						this.value = value;
						if (65 <= charCode && charCode <= 90) {
							this.value = String.fromCharCode(charCode + 32);
						}
						this.setState({
							value: this.value
						});
						this.onValueUpdate(this.value);
					}}
				></IonInput>
			</div>
		);
	}
}

export default WordleCell;
