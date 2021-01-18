export const getWeatherData = ({city = '', country = '', callback}) => {
    //TODO: move app id to profile (e.g. prod) config
    const appid = 'ffb03fb1d565a5fa4479d381bd66aa6b';
    const url = new URL('http://api.openweathermap.org/data/2.5/forecast');
    const params = {units: 'metric', q: city, appid};

    url.search = new URLSearchParams(params).toString();

    fetch(url).then(r => r.json()).then(callback)
}