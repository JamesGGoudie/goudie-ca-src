interface DataPoint {
	count: number;
	nextLetters: {
		[letter: string]: DataPoint | undefined;
		a?: DataPoint;
		b?: DataPoint;
		c?: DataPoint;
		d?: DataPoint;
		e?: DataPoint;
		f?: DataPoint;
		g?: DataPoint;
		h?: DataPoint;
		i?: DataPoint;
		j?: DataPoint;
		k?: DataPoint;
		l?: DataPoint;
		m?: DataPoint;
		n?: DataPoint;
		o?: DataPoint;
		p?: DataPoint;
		q?: DataPoint;
		r?: DataPoint;
		s?: DataPoint;
		t?: DataPoint;
		u?: DataPoint;
		v?: DataPoint;
		w?: DataPoint;
		x?: DataPoint;
		y?: DataPoint;
		z?: DataPoint;
	}
}

interface LetterUsageStats {
	uniqueWords: number;
	average: number;
	uses: number[];
}

interface LetterUsage {
	[letter: string]: LetterUsageStats;
	a: LetterUsageStats;
	b: LetterUsageStats;
	c: LetterUsageStats;
	d: LetterUsageStats;
	e: LetterUsageStats;
	f: LetterUsageStats;
	g: LetterUsageStats;
	h: LetterUsageStats;
	i: LetterUsageStats;
	j: LetterUsageStats;
	k: LetterUsageStats;
	l: LetterUsageStats;
	m: LetterUsageStats;
	n: LetterUsageStats;
	o: LetterUsageStats;
	p: LetterUsageStats;
	q: LetterUsageStats;
	r: LetterUsageStats;
	s: LetterUsageStats;
	t: LetterUsageStats;
	u: LetterUsageStats;
	v: LetterUsageStats;
	w: LetterUsageStats;
	x: LetterUsageStats;
	y: LetterUsageStats;
	z: LetterUsageStats;
}

interface LetterUsed {
	[letter: string]: number;
	a: number;
	b: number;
	c: number;
	d: number;
	e: number;
	f: number;
	g: number;
	h: number;
	i: number;
	j: number;
	k: number;
	l: number;
	m: number;
	n: number;
	o: number;
	p: number;
	q: number;
	r: number;
	s: number;
	t: number;
	u: number;
	v: number;
	w: number;
	x: number;
	y: number;
	z: number;
}

interface ApplyQueryResults {
	deleteCount: number;
	deleteNode: boolean;
}

interface BestGuessResults {
	suffix: string;
	count: number;
}

interface DeadPositionStat {
	[letter: string]: number[] | undefined;
	a?: number[];
	b?: number[];
	c?: number[];
	d?: number[];
	e?: number[];
	f?: number[];
	g?: number[];
	h?: number[];
	i?: number[];
	j?: number[];
	k?: number[];
	l?: number[];
	m?: number[];
	n?: number[];
	o?: number[];
	p?: number[];
	q?: number[];
	r?: number[];
	s?: number[];
	t?: number[];
	u?: number[];
	v?: number[];
	w?: number[];
	x?: number[];
	y?: number[];
	z?: number[];
}

export class WordleService {

	public static buildIndexFromRaw(words: string[]): DataPoint {
		const root: DataPoint = {
			count: 0,
			nextLetters: {}
		};

		for (const word of words) {
			let currPoint = root;

			for (let i = 0; i < word.length; ++i) {
				const letter = word[i];

				if (!currPoint.nextLetters[letter]) {
					const newPoint = {
						count: i === word.length - 1 ? 1 : 0,
						nextLetters: {}
					};
					currPoint.nextLetters[letter] = newPoint;
				}

				currPoint.count += 1;

				// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
				currPoint = currPoint.nextLetters[letter]!;
			}
		}

		return root;
	}

	public static getBestGuess(index: DataPoint): BestGuessResults[] {
		const used: LetterUsed = {
			a: -1,
			b: -1,
			c: -1,
			d: -1,
			e: -1,
			f: -1,
			g: -1,
			h: -1,
			i: -1,
			j: -1,
			k: -1,
			l: -1,
			m: -1,
			n: -1,
			o: -1,
			p: -1,
			q: -1,
			r: -1,
			s: -1,
			t: -1,
			u: -1,
			v: -1,
			w: -1,
			x: -1,
			y: -1,
			z: -1
		};

		return WordleService.getBestGuessHelper(index, WordleService.countLetterUse(index), used, 0, false).sort((a, b) => {
			return b.count - a.count;
		}).slice(0, 10);
	}

	private static getBestGuessHelper(index: DataPoint, letterUsage: LetterUsage, usedLetters: LetterUsed, depth: number, noDuplicates: boolean): BestGuessResults[] {
		if (!Object.keys(index.nextLetters).length) {
			return [{
				suffix: '',
				count: 0
			}];
		}

		const output: BestGuessResults[] = [];

		Object.keys(index.nextLetters).forEach((letter) => {
			const nextLetter = index.nextLetters[letter];

			if (usedLetters[letter] !== -1 && noDuplicates) {
				return;
			}

			if (nextLetter) {
				usedLetters[letter] = 1;
				const results = this.getBestGuessHelper(nextLetter, letterUsage, usedLetters, depth + 1, noDuplicates);
				usedLetters[letter] = -1;

				results.forEach((result) => {
					output.push({
						count: result.count + letterUsage[letter].uses[depth],
						suffix: letter + result.suffix
					});
				});
			}
		});

		return output;
	}

	public static countLetterUse(index: DataPoint): LetterUsage {
		const usage: LetterUsage = {
			a: { uniqueWords: 0, average: 0, uses: [] },
			b: { uniqueWords: 0, average: 0, uses: [] },
			c: { uniqueWords: 0, average: 0, uses: [] },
			d: { uniqueWords: 0, average: 0, uses: [] },
			e: { uniqueWords: 0, average: 0, uses: [] },
			f: { uniqueWords: 0, average: 0, uses: [] },
			g: { uniqueWords: 0, average: 0, uses: [] },
			h: { uniqueWords: 0, average: 0, uses: [] },
			i: { uniqueWords: 0, average: 0, uses: [] },
			j: { uniqueWords: 0, average: 0, uses: [] },
			k: { uniqueWords: 0, average: 0, uses: [] },
			l: { uniqueWords: 0, average: 0, uses: [] },
			m: { uniqueWords: 0, average: 0, uses: [] },
			n: { uniqueWords: 0, average: 0, uses: [] },
			o: { uniqueWords: 0, average: 0, uses: [] },
			p: { uniqueWords: 0, average: 0, uses: [] },
			q: { uniqueWords: 0, average: 0, uses: [] },
			r: { uniqueWords: 0, average: 0, uses: [] },
			s: { uniqueWords: 0, average: 0, uses: [] },
			t: { uniqueWords: 0, average: 0, uses: [] },
			u: { uniqueWords: 0, average: 0, uses: [] },
			v: { uniqueWords: 0, average: 0, uses: [] },
			w: { uniqueWords: 0, average: 0, uses: [] },
			x: { uniqueWords: 0, average: 0, uses: [] },
			y: { uniqueWords: 0, average: 0, uses: [] },
			z: { uniqueWords: 0, average: 0, uses: [] }
		};
		const used: LetterUsed = {
			a: -1,
			b: -1,
			c: -1,
			d: -1,
			e: -1,
			f: -1,
			g: -1,
			h: -1,
			i: -1,
			j: -1,
			k: -1,
			l: -1,
			m: -1,
			n: -1,
			o: -1,
			p: -1,
			q: -1,
			r: -1,
			s: -1,
			t: -1,
			u: -1,
			v: -1,
			w: -1,
			x: -1,
			y: -1,
			z: -1
		};

		this.countLetterUseHelper(index, usage, used, 0);

		Object.keys(usage).forEach((key) => {
			const value = usage[key];
			const usesuniqueWords = value.uses.reduce((a, b) => {
				return a + b;
			}, 0);
			value.average = usesuniqueWords / value.uniqueWords;
		});

		return usage;
	}

	public static countLetterUseHelper(index: DataPoint, usage: LetterUsage, used: LetterUsed, depth: number): void {
		Object.keys(index.nextLetters).forEach((key) => {
			const value = index.nextLetters[key];

			if (value) {
				if (used[key] === -1) {
					usage[key].uniqueWords += value.count;
					used[key] = depth;
				}
				usage[key].uses[depth] = (usage[key].uses[depth] || 0) + value.count;
				this.countLetterUseHelper(value, usage, used, depth + 1);
				if (used[key] === depth) {
					used[key] = -1;
				}
			}
		});
	}

	public static applyQuery(index: DataPoint, query: string, knownLetters: string, deadLetters: string, deadPositions: DeadPositionStat): void {
		const knownLettersArr: string[] = [];
		const deadLettersArr: string[] = [];

		for (let i = 0; i < knownLetters.length; ++i) {
			knownLettersArr.push(knownLetters[i]);
		}
		for (let i = 0; i < deadLetters.length; ++i) {
			deadLettersArr.push(deadLetters[i]);
		}

		this.applyQueryHelper(index, query, knownLettersArr, deadLettersArr, deadPositions, 0);
	}

	public static applyQueryHelper(index: DataPoint, query: string, knownLetters: string[], deadLetters: string[], deadPositions: DeadPositionStat, depth: number): ApplyQueryResults {
		if (query.length === 0) {
			const deleteNode = knownLetters.length !== 0;
			const deleteCount = deleteNode ? 1 : 0;

			return {
				deleteCount,
				deleteNode
			};
		}

		const wildcardsRemaining = query.length - knownLetters.length;

		function cloneKnownLettersAndRemoveQueryStartIfPresent(key: string): string[] {
			const knownLettersClone = Array.from(knownLetters);
			const knownLetterI = knownLettersClone.indexOf(key);
			if (knownLetterI >= 0) {
				knownLettersClone.splice(knownLetterI, 1);
			}

			return knownLettersClone;
		}

		function buildKnownLettersSet(): Set<string> {
			const set: Set<string> = new Set();
			knownLetters.forEach((knownLetter) => {
				set.add(knownLetter);
			});

			return set;
		}

		if (query[0] === '*') {
			if (wildcardsRemaining > 0) {
				let deleteCount = 0;
				Object.keys(index.nextLetters).forEach((nextLetter) => {
					const nextNode = index.nextLetters[nextLetter];
					if (!nextNode) {
						throw new Error();
					}

					const deadPositionsForLetter = deadPositions[nextLetter];
					if (deadPositionsForLetter && (deadPositionsForLetter.findIndex((deadPosition) => { return deadPosition === depth; }) >= 0)) {
						deleteCount += index.nextLetters[nextLetter]?.count || 0;
						delete index.nextLetters[nextLetter];

						return;
					}

					const usingWildcard = knownLetters.indexOf(nextLetter) == -1;

					if (usingWildcard) {
						if (deadLetters.find((deadLetter) => { return deadLetter === nextLetter; })) {
							deleteCount += index.nextLetters[nextLetter]?.count || 0;
							delete index.nextLetters[nextLetter];

							return;
						}
					}

					const knownLettersClone = cloneKnownLettersAndRemoveQueryStartIfPresent(nextLetter);
					const deleteNextNode = this.applyQueryHelper(nextNode, query.slice(1), knownLettersClone, deadLetters, deadPositions, depth + 1);

					deleteCount += deleteNextNode.deleteCount;

					if (deleteNextNode.deleteNode) {
						deleteCount += index.nextLetters[nextLetter]?.count || 0;
						delete index.nextLetters[nextLetter];
					}
				});

				index.count -= deleteCount;

				return {
					deleteNode: Object.keys(index.nextLetters).length === 0,
					deleteCount
				};
			} else {
				const knownLettersSet = buildKnownLettersSet();
				let deleteCount = 0;
				Object.keys(index.nextLetters).forEach((nextLetter) => {
					if (knownLettersSet.has(nextLetter)) {
						const nextNode = index.nextLetters[nextLetter];
						if (!nextNode) {
							throw new Error();
						}

						const knownLettersClone = cloneKnownLettersAndRemoveQueryStartIfPresent(nextLetter);
						const deleteNextNode = this.applyQueryHelper(nextNode, query.slice(1), knownLettersClone, deadLetters, deadPositions, depth + 1);

						deleteCount += deleteNextNode.deleteCount;

						if (deleteNextNode.deleteNode) {
							deleteCount += index.nextLetters[nextLetter]?.count || 0;
							delete index.nextLetters[nextLetter];
						}
					} else {
						deleteCount += index.nextLetters[nextLetter]?.count || 0;
						delete index.nextLetters[nextLetter];
					}
				});

				index.count -= deleteCount;

				return {
					deleteNode: Object.keys(index.nextLetters).length === 0,
					deleteCount
				};
			}
		} else {
			const nextNode = index.nextLetters[query[0]];

			if (!nextNode) {
				const deleteCount = index.count;
				index.count = 0;

				return {
					deleteNode: true,
					deleteCount: deleteCount
				};
			}

			let deleteCount = 0;
			Object.keys(index.nextLetters).forEach((key) => {
				if (key !== query[0]) {
					deleteCount += index.nextLetters[key]?.count || 0;
					delete index.nextLetters[key];
				}
			});

			const knownLettersClone = Array.from(knownLetters);
			const deleteNextNode = this.applyQueryHelper(nextNode, query.slice(1), knownLettersClone, deadLetters, deadPositions, depth + 1);

			deleteCount += deleteNextNode.deleteCount;

			if (deleteNextNode.deleteNode) {
				deleteCount += index.nextLetters[query[0]]?.count || 0;
				delete index.nextLetters[query[0]];
			}

			index.count -= deleteCount;

			return {
				deleteNode: deleteNextNode.deleteNode,
				deleteCount
			};
		}
	}
}
