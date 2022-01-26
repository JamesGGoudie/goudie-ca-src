import { WORDLE_INDEX_ROOT } from 'src/constants/wordle-index-root';
import { WordleDeadPositions, WordleNode } from 'src/interfaces';

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
	positionCount: number;
}

export class WordleService {

	public static getRootClone(): WordleNode {
		const clone = WordleService.getRootCloneHelper(WORDLE_INDEX_ROOT);

		if (!clone) {
			throw new Error();
		}

		return clone;
	}

	private static getRootCloneHelper(source?: WordleNode): WordleNode | undefined {
		if (!source) {
			return;
		}

		const target: WordleNode = {
			count: source.count
		};

		if (!source.nextLetters) {
			return target;
		}

		target.nextLetters = {};
		Object.entries(source.nextLetters).forEach(([letter, node]) => {
			if (!target.nextLetters) {
				throw new Error();
			}
			target.nextLetters[letter] = WordleService.getRootCloneHelper(node);
		});

		return target;
	}

	public static buildIndexFromRaw(words: string[]): WordleNode {
		const root: WordleNode = {
			count: 0
		};

		for (const word of words) {
			let currPoint = root;

			for (let i = 0; i < word.length; ++i) {
				const letter = word[i];

				if (!currPoint.nextLetters) {
					currPoint.nextLetters = {};
				}

				const nextLetters = currPoint.nextLetters;

				if (!nextLetters[letter]) {
					const newPoint: WordleNode = {
						count: i === word.length - 1 ? 1 : 0
					};
					nextLetters[letter] = newPoint;
				}

				const newPoint = nextLetters[letter];

				if (!newPoint) {
					throw new Error();
				}

				currPoint.count += 1;
				currPoint = newPoint;
			}
		}

		return root;
	}

	public static getBestGuess(index: WordleNode, avoidDups = false): BestGuessResults[] {
		const usedLetters: LetterUsed | undefined = avoidDups ? {
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
		} : undefined;

		return WordleService.getBestGuessHelper(index, WordleService.countLetterUse(index), 0, usedLetters).sort((a, b) => {
			return b.positionCount - a.positionCount;
		});
	}

	private static getBestGuessHelper(index: WordleNode, letterUsage: LetterUsage, depth: number, usedLetters?: LetterUsed): BestGuessResults[] {
		const nextLetters = index.nextLetters;
		if (!(nextLetters && Object.keys(nextLetters).length)) {
			return [{
				suffix: '',
				positionCount: 0
			}];
		}

		const output: BestGuessResults[] = [];

		Object.keys(nextLetters).forEach((letter) => {
			const nextLetter = nextLetters[letter];

			if (!nextLetter) {
				throw new Error();
			}
			if (usedLetters) {
				if (usedLetters[letter] === -1) {
					usedLetters[letter] = depth;
				} else {
					return;
				}
			}
			const results = this.getBestGuessHelper(nextLetter, letterUsage, depth + 1, usedLetters);
			if (usedLetters && usedLetters[letter] === depth) {
				usedLetters[letter] = -1;
			}

			results.forEach((result) => {
				output.push({
					positionCount: result.positionCount + letterUsage[letter].uses[depth],
					suffix: letter + result.suffix
				});
			});
		});

		return output;
	}

	public static countLetterUse(index: WordleNode): LetterUsage {
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

	public static countLetterUseHelper(index: WordleNode, usage: LetterUsage, used: LetterUsed, depth: number): void {
		const nextLetters = index.nextLetters;
		if (!nextLetters) {
			return;
		}

		Object.keys(nextLetters).forEach((key) => {
			const value = nextLetters[key];

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

	public static applyQuery(index: WordleNode, query: string, knownLetters: string[], deadLetters: string[], deadPositions: WordleDeadPositions): void {
		this.applyQueryHelper(index, query, knownLetters, deadLetters, deadPositions, 0);
	}

	private static applyQueryHelper(index: WordleNode, query: string, knownLetters: string[], deadLetters: string[], deadPositions: WordleDeadPositions, depth: number): ApplyQueryResults {
		const nextLetters = index.nextLetters;

		if (query.length === 0 || !nextLetters) {
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
				Object.keys(nextLetters).forEach((nextLetter) => {
					const nextNode = nextLetters[nextLetter];
					if (!nextNode) {
						throw new Error();
					}

					const deadPositionsForLetter = deadPositions[nextLetter];
					if (deadPositionsForLetter && (deadPositionsForLetter.findIndex((deadPosition) => { return deadPosition === depth; }) >= 0)) {
						deleteCount += nextLetters[nextLetter]?.count || 0;
						delete nextLetters[nextLetter];

						return;
					}

					const usingWildcard = knownLetters.indexOf(nextLetter) == -1;

					if (usingWildcard) {
						if (deadLetters.find((deadLetter) => { return deadLetter === nextLetter; })) {
							deleteCount += nextLetters[nextLetter]?.count || 0;
							delete nextLetters[nextLetter];

							return;
						}
					}

					const knownLettersClone = cloneKnownLettersAndRemoveQueryStartIfPresent(nextLetter);
					const deleteNextNode = this.applyQueryHelper(nextNode, query.slice(1), knownLettersClone, deadLetters, deadPositions, depth + 1);

					deleteCount += deleteNextNode.deleteCount;

					if (deleteNextNode.deleteNode) {
						deleteCount += nextLetters[nextLetter]?.count || 0;
						delete nextLetters[nextLetter];
					}
				});

				index.count -= deleteCount;

				return {
					deleteNode: Object.keys(nextLetters).length === 0,
					deleteCount
				};
			} else {
				const knownLettersSet = buildKnownLettersSet();
				let deleteCount = 0;
				Object.keys(nextLetters).forEach((nextLetter) => {
					if (knownLettersSet.has(nextLetter)) {
						const nextNode = nextLetters[nextLetter];
						if (!nextNode) {
							throw new Error();
						}

						const deadPositionsForLetter = deadPositions[nextLetter];
						if (deadPositionsForLetter && (deadPositionsForLetter.findIndex((deadPosition) => { return deadPosition === depth; }) >= 0)) {
							deleteCount += nextLetters[nextLetter]?.count || 0;
							delete nextLetters[nextLetter];

							return;
						}

						const knownLettersClone = cloneKnownLettersAndRemoveQueryStartIfPresent(nextLetter);
						const deleteNextNode = this.applyQueryHelper(nextNode, query.slice(1), knownLettersClone, deadLetters, deadPositions, depth + 1);

						deleteCount += deleteNextNode.deleteCount;

						if (deleteNextNode.deleteNode) {
							deleteCount += nextLetters[nextLetter]?.count || 0;
							delete nextLetters[nextLetter];
						}
					} else {
						deleteCount += nextLetters[nextLetter]?.count || 0;
						delete nextLetters[nextLetter];
					}
				});

				index.count -= deleteCount;

				return {
					deleteNode: Object.keys(nextLetters).length === 0,
					deleteCount
				};
			}
		} else {
			const nextNode = nextLetters[query[0]];

			if (!nextNode) {
				const deleteCount = index.count;
				index.count = 0;

				return {
					deleteNode: true,
					deleteCount: deleteCount
				};
			}

			let deleteCount = 0;
			Object.keys(nextLetters).forEach((key) => {
				if (key !== query[0]) {
					deleteCount += nextLetters[key]?.count || 0;
					delete nextLetters[key];
				}
			});

			const knownLettersClone = Array.from(knownLetters);
			const deleteNextNode = this.applyQueryHelper(nextNode, query.slice(1), knownLettersClone, deadLetters, deadPositions, depth + 1);

			deleteCount += deleteNextNode.deleteCount;

			if (deleteNextNode.deleteNode) {
				deleteCount += nextLetters[query[0]]?.count || 0;
				delete nextLetters[query[0]];
			}

			index.count -= deleteCount;

			return {
				deleteNode: deleteNextNode.deleteNode,
				deleteCount
			};
		}
	}
}
