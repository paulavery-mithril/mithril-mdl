// Odds of collision for a 32-bit random number are quite low, but perfectly
// feasible on a page with many elements (e.g. 1 in 10,000 for a 1000).
// 64-bit provides acceptable low collision rates.
const randMax = Math.pow(2, 64);
export let randomID = ()=> Math.floor(Math.random() * randMax).toString(36);

export function joinClasses() {
	return this.join(' ');
}

