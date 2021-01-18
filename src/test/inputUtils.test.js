import {debounce} from "../utils/inputUtils";

describe('inputUtils', () => {
    describe('debounce', () => {
        beforeEach(() => {
            jest.useFakeTimers();
        })
        afterEach(() => {
            jest.useRealTimers();
        })

        test('should not call the given callback until the given period has passed with no triggers', () => {
            const callback = jest.fn();
            const period = 2000;
            const debouncedFunc = debounce(callback, period);

            debouncedFunc();
            expect(callback).toHaveBeenCalledTimes(0);

            jest.advanceTimersByTime(period / 5);
            expect(callback).toHaveBeenCalledTimes(0);

            for (let i = 0; i < 3; i += 1) {
                jest.advanceTimersByTime(period / 2);
                debouncedFunc();
            }
            expect(callback).toHaveBeenCalledTimes(0);

            jest.advanceTimersByTime(period);
            expect(callback).toHaveBeenCalledTimes(1);
        });

        test('should call the given callback with extracted values if valueExtractor is given', () => {
            const callback = jest.fn();
            const period = 2000;
            const expected = 'someValue';
            const debounceFunc = debounce(callback, period, arg => arg.someProperty);
            const args = {someProperty: expected};

            debounceFunc(args);
            jest.advanceTimersByTime(period);

            expect(callback).toHaveBeenCalledTimes(1);
            expect(callback).toHaveBeenCalledWith(expected);
        });
    });
});