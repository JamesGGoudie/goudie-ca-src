export interface WordleNode {
	count: number;
	nextLetters?: {
		[letter: string]: WordleNode | undefined;
		a?: WordleNode;
		b?: WordleNode;
		c?: WordleNode;
		d?: WordleNode;
		e?: WordleNode;
		f?: WordleNode;
		g?: WordleNode;
		h?: WordleNode;
		i?: WordleNode;
		j?: WordleNode;
		k?: WordleNode;
		l?: WordleNode;
		m?: WordleNode;
		n?: WordleNode;
		o?: WordleNode;
		p?: WordleNode;
		q?: WordleNode;
		r?: WordleNode;
		s?: WordleNode;
		t?: WordleNode;
		u?: WordleNode;
		v?: WordleNode;
		w?: WordleNode;
		x?: WordleNode;
		y?: WordleNode;
		z?: WordleNode;
	}
}
