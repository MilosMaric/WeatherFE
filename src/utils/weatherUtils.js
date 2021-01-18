const imageMapping = {
    Rain: 'drop',
    Snow: 'snowflake',
    Clouds: 'cloudy',
    Clear: 'sunny',
}

export const getImageName = text => {
    const imageName = imageMapping[text];
    !imageName && console.log('NOT FOUND: ', text);
    return `./${imageName ? imageName : 'cloudy'}.svg`
}

export const mapApiResult = items =>
    items ? items.filter(x => x.dt_txt.indexOf("12:00") > -1)
        .map(x => {
            return {
                date: new Date(x.dt_txt),
                average: Math.round(x.main.temp_max + x.main.temp_min / 2),
                image: getImageName(x.weather[0].main)
            }
        }) : [];

//TODO: Build gradient against avg temp
export const getGradientText = avgTemp => {
    let gradient = 'linear-gradient(135deg, rgba(34,193,195,0.7) 0%, rgba(89,192,189,0.7) 50%, rgba(253,187,45,0.7) 100%)';
    return {background: gradient};
}