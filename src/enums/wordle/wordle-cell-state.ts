export enum Value {
	DEAD = 1,
	KNOWN = 2,
	CONFIRMED = 3
}

export function nextState(state: Value): Value {
	switch (state) {
	case Value.DEAD:
		return Value.KNOWN;
	case Value.KNOWN:
		return Value.CONFIRMED;
	case Value.CONFIRMED:
		return Value.DEAD;
	}
}

export function getClass(state: Value): string {
	switch (state) {
	case Value.DEAD:
		return 'dead';
	case Value.KNOWN:
		return 'known';
	case Value.CONFIRMED:
		return 'confirmed';
	}
}
