import React, { useState } from 'react';
import { IonButton, IonContent, IonItem, IonLabel, IonPage, IonTextarea, IonToggle } from '@ionic/react';

import TopBar from 'src/components/TopBar';
import TopBarFullscreen from 'src/components/TopBarFullscreen';

import './WordleHelper.scss';
import WordleGrid from 'src/components/wordle/WordleGrid';
import { WordleCellState } from 'src/enums';
import { WordleDeadPositions, WordleGuess } from 'src/interfaces';
import { WordleService } from 'src/services/wordle-service';

const title = 'Wordle Helper';

const WordleHelper: React.FC = () => {
	const [query, setQuery] = useState<string>();
	const [knownLetters, setKnownLetters] = useState<string[]>();
	const [deadLetters, setDeadLetters] = useState<string[]>();
	const [allowDups, setAllowDuplicateLetters] = useState(false);
	const [deadPositions, setDeadPositions] = useState<WordleDeadPositions>();
	const [guesses, setGuesses] = useState<WordleGuess[]>();

	return (
		<IonPage>
			<TopBar title={title} />
			<IonContent >
				<TopBarFullscreen title={title} />
				<div className="wordle-helper-page">
					<div>
						<WordleGrid onGridUpdate={gridData => {
							const deadLetters: string[] = [];
							const knownLetters: string[] = [];
							const query = ['*', '*', '*', '*', '*'];
							const deadPositions: WordleDeadPositions = {};
							let targetRow = -1;
							let foundTargetRow = false;
							gridData.rows.forEach((gridRow, rowIndex) => {
								let isRowAfterTargetRow = !foundTargetRow;
								gridRow.cells.forEach((gridCell, columnIndex) => {
									isRowAfterTargetRow = isRowAfterTargetRow && gridCell.value === ' ';
									switch (gridCell.cellState) {
									case WordleCellState.Value.DEAD:
										if (gridCell.value !== ' ') {
											deadLetters.push(gridCell.value);
										}
										break;
									case WordleCellState.Value.KNOWN:
										if (!deadPositions[gridCell.value]) {
											deadPositions[gridCell.value] = [];
										}
										deadPositions[gridCell.value]?.push(columnIndex);
										break;
									}
								});
								if (isRowAfterTargetRow) {
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
						<div className="run-controls">
							<IonItem>
								<IonLabel>Allow Duplicate Letters</IonLabel>
								<IonToggle checked={allowDups} onIonChange={e => setAllowDuplicateLetters(e.detail.checked)} />
							</IonItem>
							<IonButton
								onClick={() => {
									const root = WordleService.getRootClone();
									WordleService.applyQuery(
										root,
										query || '*****',
										knownLetters || [],
										deadLetters || [],
										deadPositions || {}
									);
									setGuesses(WordleService.getBestGuess(root, !allowDups));
								}}>
									Run
							</IonButton>
						</div>
					</div>
					<div className="output">
						<IonTextarea
							readonly={true}
							rows={23}
							value={guesses?.map(guess => `${guess.guess}: ${guess.positionScore + guess.usageScore}`).join('\n')}>
						</IonTextarea>
					</div>
				</div>
			</IonContent>
		</IonPage>
	);
};

export default WordleHelper;
