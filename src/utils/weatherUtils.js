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
            image: getImageName(x.weather.code)
        }
    }) : [];

//TODO: Build gradient against avg temp
export const getGradientText = avgTemp => {
    let gradient = 'linear-gradient(135deg, rgba(34,193,195,0.7) 0%, rgba(89,192,189,0.7) 50%, rgba(253,187,45,0.7) 100%)';
    return {background: gradient};
}