import {
    minRange,
    min
} from "../../../../../src/1.x.x/scripts/array/math/min"

describe("Minimum value in an array", () => {
    it("should return the same positive value for one positive element", () => {
        expect(min([4])).toStrictEqual(4);
    });
    it("should return the small positive value for positive elements", () => {
        expect(min([1, 2, 3])).toStrictEqual(1);
    });
    it("should return the big negative value for negative elements", () => {
        expect(min([-1, -2, -3])).toStrictEqual(-3);
    });
    it("should return NaN value for NaN elements", () => {
        expect(min([NaN, NaN, NaN])).toStrictEqual(NaN);
    });
    it("should return the same values that are not numbers", () => {
        expect(min(["a", "b", "c"])).toStrictEqual(["a", "b", "c"]);
    });

});

describe("Minimum value in portion of array", () => {
    it("should return the same positive value for one positive element", () => {
        expect(minRange([4], 0, 0)).toStrictEqual(4);
    });
    it("should return the small positive value for positive elements", () => {
        expect(minRange([1, 2, 3, 4, 5], 0, 3)).toStrictEqual(1);
    });
    it("should return the big negative value for negative elements", () => {
        expect(minRange([-1, -2, -3, -4, -5], 0, 3)).toStrictEqual(-4);
    });
    it("should return NaN value for NaN elements", () => {
        expect(minRange([NaN, NaN, NaN], 0, 1)).toStrictEqual(NaN);
    });
    it("should return the same values that are not numbers", () => {
        expect(minRange(["a", "b", "c"], 0, 1)).toStrictEqual(["a", "b", "c"]);
    });

    it("should throw an error", () => {

        function passBigIndex() {
            const array = [-1, -2, -3];
            minRange(array, 0, 4); // The last index of array is 2
        }
        expect(passBigIndex).toThrowError("The last index of the array is less then 'to' parameter");
    });
});