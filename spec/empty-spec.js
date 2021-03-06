"use strict";

import { Sequence } from "../src/eslinq";

describe(".empty", () => {

    it("returns a Sequence", () => {
        expect(Sequence.empty()).toEqual(jasmine.any(Sequence));
    });

    it("returns an empty Sequence", () => {
        expect(Sequence.empty().toArray()).toEqual([]);

        for (let _ of Sequence.empty()) { // eslint-disable-line no-unused-vars
            throw "`Sequence.empty()` should return no elements";
        }
    });

    it("always returns the same instance", () => {
        const first = Sequence.empty(),
            second = Sequence.empty();

        expect(first).toBe(second);
    });

});