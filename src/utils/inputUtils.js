let timeout;
export const debounce = (callback, period, valueExtractor) => {

    return (...args) => {
        //synthetic event gets null'd in case of delayed use, so we extract the value right away and use it later
        const argumentsForLater = typeof (valueExtractor) === 'function' ? valueExtractor(...args) : {...args};
        const toBeExecutedLater = () => {
            timeout = null;
            callback(argumentsForLater);
        };

        clearTimeout(timeout);
        timeout = setTimeout(toBeExecutedLater, period);
    };
};