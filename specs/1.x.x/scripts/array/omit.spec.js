import {
    omit,
    omitMany,
    omitArray
} from "../../../../src/1.x.x/scripts/array/omit"

describe("Remove an element from an array ", () => {
    it("should return array without removed element", () => {
        expect(omit([1, 2, 3, 4, 5, 6], 1)).toStrictEqual([2, 3, 4, 5, 6]);
        expect(omit(["aaa", "baa", "cbb", "dee", "ecc", "faa"], "aaa")).toStrictEqual(["baa", "cbb", "dee", "ecc", "faa"]);
        expect(omit([{
            a: 1
        }, {
            b: 2
        }, {
            c: 3
        }], 'a')).toStrictEqual([{
            b: 2
        }, {
            c: 3
        }]);

    });
    it("should throw an error", () => {
        const element = 1

        function passUndefinedElement() {
            omit([4, 5], element)
        }
        expect(passUndefinedElement).toThrowError(element + " does not exist");
    });
});
describe("Remove an element from an array ", () => {
    it("should return array without removed element", () => {
        expect(omit([1, 2, 3, 4, 5, 6], 1)).toStrictEqual([2, 3, 4, 5, 6]);
        expect(omit(["aaa", "baa", "cbb", "dee", "ecc", "faa"], "aaa")).toStrictEqual(["baa", "cbb", "dee", "ecc", "faa"]);
        expect(omit([{
            a: 1
        }, {
            b: 2
        }, {
            c: 3
        }], 'a')).toStrictEqual([{
            b: 2
        }, {
            c: 3
        }]);
    });
});

describe("Remove elements from an array based on other array ", () => {
    it("should return array without removed elements", () => {
        expect(omitArray([1, 2, 3, 4, 5, 6], [1, 2, 3])).toStrictEqual([4, 5, 6]);

    });
});