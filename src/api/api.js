export const getWeatherData = ({city = '', country = '', callback}) => {
    //TODO: move app id to profile (e.g. prod) config
    const key = '2a19d08e195648fe9112504be834cee2';
    const url = new URL('https://api.weatherbit.io/v2.0/forecast/daily');
    const params = {days: '10', city, key};

    url.search = new URLSearchParams(params).toString();

    fetch(url).then(r => r.json()).then(callback)
}