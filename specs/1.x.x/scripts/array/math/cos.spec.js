import {
    cos,
    cosAll
} from "../../../../../src/1.x.x/scripts/array/math/cos"

describe("Cosinus values for specific range of elements", () => {
    it("should return Cosinus for only the two first elements", () => {
        expect(cos([Math.PI, 0, 3], 0, 1)).toStrictEqual([-1, 1, 3]);
    });

    it("should return the same values that are not numbers", () => {
        expect(cos(["a", "b", "c"], 0, 1)).toStrictEqual(["a", "b", "c"]);
    });

    it("should throw an error", () => {

        function passNumber() {
            cos(1, 0, 1)
        }

        function passString() {
            cos("array", 0, 1)
        }

        function passEmptyArray() {
            cos([], 0, 1)
        }

        function passNull() {
            cos(null, 0, 1)
        }

        function passUndefined() {
            cos(undefined, 0, 1)
        }

        function passBigIndex() {
            const array = [-1, -2, -3];
            cos(array, 0, 4); // The last index of array is 2
        }
        expect(passNumber).toThrowError("The parameter should be an array");
        expect(passString).toThrowError("The parameter should be an array");
        expect(passEmptyArray).toThrowError("The array is empty");
        expect(passNull).toThrowError("The parameter is null or undefined");
        expect(passUndefined).toThrowError("The parameter is null or undefined");
        expect(passBigIndex).toThrowError("The last index of the array is less then 'to' parameter");
    });
});

describe("Cosinus for all elements", () => {
    it("should return Cosinus of all elements", () => {
        expect(cosAll([Math.PI, Math.PI, 0])).toStrictEqual([-1, -1, 1]);
        expect(cosAll([0, 0, 0])).toStrictEqual([1, 1, 1]);
    });
    it("should return the same values that are not numbers", () => {
        expect(cosAll(["a", "b", "c"])).toStrictEqual(["a", "b", "c"]);
    });

    it("should throw an error", () => {

        function passNumber() {
            cosAll(1)
        }

        function passString() {
            cosAll("array")
        }

        function passEmptyArray() {
            cosAll([])
        }

        function passNull() {
            cosAll(null)
        }

        function passUndefined() {
            cosAll(undefined)
        }

        expect(passNumber).toThrowError("The parameter should be an array");
        expect(passString).toThrowError("The parameter should be an array");
        expect(passEmptyArray).toThrowError("The array is empty");
        expect(passNull).toThrowError("The parameter is null or undefined");
        expect(passUndefined).toThrowError("The parameter is null or undefined");
    });
});