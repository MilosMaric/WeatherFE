import {formatDate, getWeekday} from "../utils/dateUtils";

describe('dateUtils', () => {
    describe('getWeekday', () => {
        test('should return correct day name', () => {
            expect(getWeekday(new Date(2021, 0, 18))).toBe('Monday')
            expect(getWeekday(new Date(2021, 0, 21))).toBe('Thursday')
            expect(getWeekday(new Date(2021, 0, 24))).toBe('Sunday')
        });
    });
    describe('formatDate', () => {
        test('should return correctly formatted date', () => {
            expect(formatDate(new Date(2021, 0, 18))).toBe('January 18, 2021')
        });
    });
});