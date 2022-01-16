import React from 'react';
import { IonButton, IonInput, IonItem } from '@ionic/react';

import './KeyValueBuilder.scss';
import { KeyValueBuilderProps } from 'src/properties/controls/key-value-builder-props';

class KeyValueBuilder extends React.Component<KeyValueBuilderProps> {
	private keyValuePairs: [string, string][];
	private onKeyValuePairsUpdate: (keyValuePairs: Record<string, any>) => void;

	constructor(props: KeyValueBuilderProps) {
		super(props);
		this.keyValuePairs = props.keyValuePairs ? Object.keys(props.keyValuePairs).map((key) => {
			if (!props.keyValuePairs) {
				throw new Error();
			}
			let value: string;
			try {
				value = JSON.stringify(props.keyValuePairs[key]);
			} catch {
				value = props.keyValuePairs[key];
			}
			return [key, value];
		}) : [];
		console.log(this.keyValuePairs);
		this.onKeyValuePairsUpdate = props.onKeyValuePairsUpdate;
	}

	private convertPairsToRecord(): Record<string, any> {
		const out: Record<string, any> = {};

		this.keyValuePairs.forEach(([key, value]) => {
			try {
				out[key] = JSON.parse(value);
			} catch {
				out[key] = value;
			}
		});

		return out;
	}

	render(): JSX.Element {
		return (
			<div>
				<div>
					{this.keyValuePairs.map((tuple, i) =>
						<div key={i}>
							<IonItem>
								<IonInput value={tuple[0]} placeholder="Key" onIonChange={e => {
									tuple[0] = e.detail.value || '';
									this.onKeyValuePairsUpdate(this.convertPairsToRecord());
								}}></IonInput>
							</IonItem>
							<IonItem>
								<IonInput value={tuple[1]} placeholder="Value" onIonChange={e => {
									tuple[1] = e.detail.value || '';
									this.onKeyValuePairsUpdate(this.convertPairsToRecord());
								}}></IonInput>
							</IonItem>
						</div>
					)}
				</div>
				<IonButton
					onClick={() => {
						this.keyValuePairs.push(['', '']);
						this.setState({
							keyValuePairs: this.keyValuePairs
						});
					}}>
					Add Key-Value
				</IonButton>
			</div>
		);
	}
}

export default KeyValueBuilder;
