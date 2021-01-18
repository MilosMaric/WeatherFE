export const average = numbers =>
    numbers?.length ?
        Math.round(numbers.reduce((acc, x) => acc + x, 0) / numbers.length) :
        0;