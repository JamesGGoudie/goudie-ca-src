import React, { useState } from 'react';
import { IonButton, IonContent, IonPage, IonToggle } from '@ionic/react';

import TopBar from 'src/components/TopBar';
import TopBarFullscreen from 'src/components/TopBarFullscreen';

import './WordleHelper.scss';
import WordleGrid from 'src/components/wordle/WordleGrid';
import { WordleCellState } from 'src/enums';
import { WordleDeadPositions } from 'src/interfaces';
import { WordleService } from 'src/services/wordle-service';

const title = 'Wordle Helper';

const WordleHelper: React.FC = () => {
	const [query, setQuery] = useState<string>();
	const [knownLetters, setKnownLetters] = useState<string[]>();
	const [deadLetters, setDeadLetters] = useState<string[]>();
	const [noDups, setNoDups] = useState(false);
	const [deadPositions, setDeadPositions] = useState<WordleDeadPositions>();

	return (
		<IonPage>
			<TopBar title={title} />
			<IonContent >
				<TopBarFullscreen title={title} />
				<div className="wordle-helper-page">
					<WordleGrid onGridUpdate={gridData => {
						const deadLetters: string[] = [];
						const knownLetters: string[] = [];
						const query = ['*', '*', '*', '*', '*'];
						const deadPositions: WordleDeadPositions = {};
						let targetRow = -1;
						let foundTargetRow = false;
						gridData.rows.forEach((gridRow, rowIndex) => {
							let isTargetRow = !foundTargetRow;
							gridRow.cells.forEach((gridCell, columnIndex) => {
								switch (gridCell.cellState) {
								case WordleCellState.Value.DEAD:
									isTargetRow = false;
									deadLetters.push(gridCell.value);
									break;
								case WordleCellState.Value.KNOWN:
									isTargetRow = false;
									if (!deadPositions[gridCell.value]) {
										deadPositions[gridCell.value] = [];
									}
									deadPositions[gridCell.value]?.push(columnIndex);
									break;
								case WordleCellState.Value.CONFIRMED:
									isTargetRow = false;
								}
							});
							if (isTargetRow) {
								foundTargetRow = true;
								targetRow = rowIndex - 1;
							}
						});
						gridData.rows.forEach((gridRow, rowIndex) => {
							if (rowIndex !== targetRow) {
								return;
							}
							gridRow.cells.forEach((gridCell, columnIndex) => {
								switch (gridCell.cellState) {
								case WordleCellState.Value.KNOWN:
									knownLetters.push(gridCell.value);
									break;
								case WordleCellState.Value.CONFIRMED:
									query[columnIndex] = gridCell.value;
									break;
								}
							});
						});

						setQuery(query.join(''));
						setKnownLetters(knownLetters);
						setDeadLetters(deadLetters);
						setDeadPositions(deadPositions);
					}}></WordleGrid>
					<IonToggle checked={noDups} onIonChange={e => setNoDups(e.detail.checked)} />
					<IonButton
						onClick={() => {
							if (!(query && knownLetters && deadLetters && deadPositions)) {
								return;
							}
							const root = WordleService.getRootClone();
							WordleService.applyQuery(
								root,
								query,
								knownLetters,
								deadLetters,
								deadPositions
							);
							console.log(WordleService.getBestGuess(root, noDups));
						}}>
							Run
					</IonButton>
				</div>
			</IonContent>
		</IonPage>
	);
};

export default WordleHelper;
