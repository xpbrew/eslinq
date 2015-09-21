"use strict";

export const owners = [
	{ name: "Kathy", pets: ["dog", "cat"] },
	{ name: "Johnny", pets: ["monkey", "spider"] },
	{ name: "Annie", pets: ["monkey", "cat"] }
];

export const identity = n => n,
	double = n => n * 2,
	even = n => n % 2 === 0;

/**
 * An `Iterable` that throws an error when it is being iterated.
 * 
 * Can be used for testing lazy evaluation.
 */
export class ThrowingIterable {
	constructor() {
		this[Symbol.iterator] = () => {
			return {
				next: () => { throw "This Iterable should not be iterated"; }
			};
		}
	}
}
