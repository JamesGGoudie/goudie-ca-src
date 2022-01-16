import React, { useState } from 'react';
import { IonButton, IonContent, IonInput, IonItem, IonPage, IonToggle } from '@ionic/react';

import TopBar from 'src/components/TopBar';
import TopBarFullscreen from 'src/components/TopBarFullscreen';

import './WordleHelper.scss';
import KeyValueBuilder from 'src/components/controls/KeyValueBuilder';
import { WordleService } from 'src/services/wordle-service';

const title = 'Wordle Helper';

const WordleHelper: React.FC = () => {

	const [query, setQuery] = useState<string>();
	const [knownLetters, setKnownLetters] = useState<string>();
	const [deadLetters, setDeadLetters] = useState<string>();
	const [noDups, setNoDups] = useState(false);
	const [deadPositions, setDeadPositions] = useState<Record<string, any>>();

	return (
		<IonPage>
			<TopBar title={title} />

			<IonContent >
				<TopBarFullscreen title={title} />
				<div className="wordle-helper-page">
					<div className="skills">
						<IonItem>
							<IonInput value={query} placeholder="Query" onIonChange={e => setQuery(e.detail.value || '')}></IonInput>
						</IonItem>
						<IonItem>
							<IonInput value={knownLetters} placeholder="Known Letters" onIonChange={e => setKnownLetters(e.detail.value || '')}></IonInput>
						</IonItem>
						<IonItem>
							<IonInput value={deadLetters} placeholder="Dead Letters" onIonChange={e => setDeadLetters(e.detail.value || '')}></IonInput>
						</IonItem>
						<IonItem>
							<IonToggle checked={noDups} onIonChange={e => setNoDups(e.detail.checked)} />
						</IonItem>
						<KeyValueBuilder keyValuePairs={deadPositions} onKeyValuePairsUpdate={e => setDeadPositions(e)}></KeyValueBuilder>
						<IonButton
							onClick={() => {
								const root = WordleService.getIndexClone();
								WordleService.applyQuery(
									root,
									query || '',
									knownLetters || '',
									deadLetters || '',
									deadPositions || {}
								);
								console.log(WordleService.getBestGuess(root, noDups));
							}}>
							Run
						</IonButton>
					</div>
				</div>
			</IonContent>
		</IonPage>
	);
};

export default WordleHelper;
