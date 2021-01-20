const imageMapping = {
    5: 'drop',
    6: 'snowflake',
    8: 'cloudy',
}

export const getImageName = code => {
    const imageName = code === 800 ? 'sunny' : imageMapping[Math.round(code / 100)];
    !imageName && console.log('NOT FOUND: ', code);
    return `./${imageName ? imageName : 'cloudy'}.svg`
}

export const mapApiResult = items =>
    items ? items.map(x => {
        return {
            date: new Date(x.datetime),
            average: Math.round((x.min_temp + x.max_temp) / 2),
            min: x.min_temp,
            max: x.max_temp,
            image: getImageName(x.weather.code)
        }
    }) : [];


export const getGradientText = weatherByDay => {
    const avgValues = weatherByDay.length ?
        [Math.min(...weatherByDay.map(x => x.min)), Math.max(...weatherByDay.map(x => x.max))] :
        [10, 35];
    
    const colors = avgValues.map((x, idx) => {
        const percentage = idx * 100 / (avgValues.length - 1);

        return `${getColorByIndex(x)} ${percentage}%`;
    }).join(', ');

    return {background: `linear-gradient(135deg, ${colors})`};
}

const getColorByIndex = temp => colors[Math.round(39 + temp)];

const colors = [
    'rgba(11, 25, 116, 0.7)',
    'rgba(15, 35, 123, 0.7)',
    'rgba(19, 44, 131, 0.7)',
    'rgba(23, 54, 138, 0.7)',
    'rgba(27, 63, 146, 0.7)',
    'rgba(31, 73, 153, 0.7)',
    'rgba(35, 82, 161, 0.7)',
    'rgba(39, 92, 168, 0.7)',
    'rgba(43, 101, 176, 0.7)',
    'rgba(47, 111, 183, 0.7)',
    'rgba(51, 120, 191, 0.7)',
    'rgba(55, 130, 198, 0.7)',
    'rgba(57, 133, 201, 0.7)',
    'rgba(58, 135, 204, 0.7)',
    'rgba(60, 138, 206, 0.7)',
    'rgba(61, 140, 209, 0.7)',
    'rgba(62, 143, 212, 0.7)',
    'rgba(64, 145, 214, 0.7)',
    'rgba(65, 148, 217, 0.7)',
    'rgba(67, 150, 219, 0.7)',
    'rgba(68, 153, 222, 0.7)',
    'rgba(69, 155, 225, 0.7)',
    'rgba(71, 158, 227, 0.7)',
    'rgba(72, 160, 230, 0.7)',
    'rgba(77, 164, 232, 0.7)',
    'rgba(82, 167, 234, 0.7)',
    'rgba(87, 171, 235, 0.7)',
    'rgba(92, 175, 237, 0.7)',
    'rgba(97, 178, 239, 0.7)',
    'rgba(103, 182, 241, 0.7)',
    'rgba(108, 185, 243, 0.7)',
    'rgba(113, 189, 245, 0.7)',
    'rgba(118, 193, 246, 0.7)',
    'rgba(123, 196, 248, 0.7)',
    'rgba(128, 200, 250, 0.7)',
    'rgba(132, 202, 250, 0.7)',
    'rgba(135, 203, 250, 0.7)',
    'rgba(139, 205, 250, 0.7)',
    'rgba(143, 207, 250, 0.7)',
    'rgba(147, 208, 250, 0.7)',
    'rgba(150, 210, 249, 0.7)',
    'rgba(154, 211, 249, 0.7)',
    'rgba(158, 213, 249, 0.7)',
    'rgba(162, 215, 249, 0.7)',
    'rgba(165, 216, 249, 0.7)',
    'rgba(169, 218, 249, 0.7)',
    'rgba(171, 218, 246, 0.7)',
    'rgba(173, 218, 242, 0.7)',
    'rgba(175, 219, 239, 0.7)',
    'rgba(177, 219, 235, 0.7)',
    'rgba(179, 219, 232, 0.7)',
    'rgba(182, 219, 228, 0.7)',
    'rgba(184, 219, 225, 0.7)',
    'rgba(186, 219, 221, 0.7)',
    'rgba(188, 220, 218, 0.7)',
    'rgba(190, 220, 214, 0.7)',
    'rgba(192, 220, 211, 0.7)',
    'rgba(197, 219, 203, 0.7)',
    'rgba(202, 219, 195, 0.7)',
    'rgba(207, 218, 187, 0.7)',
    'rgba(212, 217, 179, 0.7)',
    'rgba(217, 217, 171, 0.7)',
    'rgba(243, 214, 132, 0.7)',
    'rgba(248, 213, 124, 0.7)',
    'rgba(248, 210, 124, 0.7)',
    'rgba(247, 205, 124, 0.7)',
    'rgba(246, 200, 124, 0.7)',
    'rgba(245, 195, 123, 0.7)',
    'rgba(245, 189, 123, 0.7)',
    'rgba(244, 184, 123, 0.7)',
    'rgba(248, 213, 124, 0.7)',
    'rgba(247, 202, 118, 0.7)',
    'rgba(245, 190, 112, 0.7)',
    'rgba(244, 184, 109, 0.7)',
    'rgba(244, 179, 105, 0.7)',
    'rgba(243, 173, 102, 0.7)',
    'rgba(242, 167, 99, 0.7)',
    'rgba(241, 156, 93, 0.7)',
    'rgba(241, 156, 93, 0.7)',
    'rgba(240, 150, 9, 0.70)'
];

//TODO: Unsuccessful algorithm attempt to get gradient
const fullScale = 80;
const max = {r: 240, g: 149, b: 94, temp: 40};
const min = {r: 11, g: 25, b: 116, temp: -40};
// eslint-disable-next-line no-unused-vars
const calculateColor = temp => {
    const minFactor = (temp - min.temp) / fullScale;
    const maxFactor = (max.temp - temp) / fullScale;
    return `rgba(${calculateComponent(minFactor, maxFactor, 'r')}, ${calculateComponent(minFactor, maxFactor, 'g')}, ${calculateComponent(minFactor, maxFactor, 'b')}, 0.7)`
}

const calculateComponent = (minFactor, maxFactor, componentName) => {
    let value = Math.round((minFactor * min[componentName] + maxFactor * max[componentName]));

    return value
}