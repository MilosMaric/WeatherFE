import {average} from "../utils/numberUtils";

describe('numberUtils', () => {
    describe('average', () => {
        test('should return zero for no values given', () => {
            expect(average([])).toBe(0);
            expect(average()).toBe(0);
            expect(average(null)).toBe(0);
        });
        test('should return correct average value', () => {
            expect(average([1, 2, 3])).toBe(2);
            expect(average([1, 2, 3, 4])).toBe(3);
            expect(average([1, 2, 3, 4, 5])).toBe(3);
        });
    });
});