export enum Value {
	UNKNOWN = 1,
	DEAD = 2,
	KNOWN = 3,
	CONFIRMED = 4
}

export function nextState(state: Value): Value {
	switch (state) {
	case Value.UNKNOWN:
		return Value.DEAD;
	case Value.DEAD:
		return Value.KNOWN;
	case Value.KNOWN:
		return Value.CONFIRMED;
	case Value.CONFIRMED:
		return Value.UNKNOWN;
	}
}

export function getClass(state: Value): string {
	switch (state) {
	case Value.UNKNOWN:
		return 'unknown';
	case Value.DEAD:
		return 'dead';
	case Value.KNOWN:
		return 'known';
	case Value.CONFIRMED:
		return 'confirmed';
	}
}
