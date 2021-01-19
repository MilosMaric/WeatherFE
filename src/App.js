import React, {useState} from 'react'
import './App.css';
import LocationPicker from "./components/LocationPicker";
import {getWeatherData} from "./api/api";
import {getGradientText, mapApiResult} from "./utils/weatherUtils";
import TemperaturePanel from "./components/TemperaturePanel";
import {average} from "./utils/numberUtils";

function App() {
    const [weatherByDay, setWeatherByDay] = useState([]);
    const [lastFetchSuccess, setLastFetchSuccess] = useState(true);

    const averageTemperature = average(weatherByDay.map(x => x.average));
    const startFetch = ({city, country}, callback) => {
        if (city.length) {
            const cb = result => {
                setLastFetchSuccess(true);
                setWeatherByDay(mapApiResult(result.data))
                callback();
            }
            getWeatherData({city, callback: cb})
        } else {
            setLastFetchSuccess(true);
            setWeatherByDay([]);
        }
    };

    return (
        <div className='app' style={getGradientText(averageTemperature)}>
            <LocationPicker startFetch={startFetch}/>
            {lastFetchSuccess ? weatherByDay.length ?
                <TemperaturePanel weatherByDay={weatherByDay.slice(1, 8)} average={averageTemperature}/> :
                null :
                <div className='not-found-image-container'>
                    <img src='./notfound.svg' className='not-found-image' alt='WeatherIcon'/>
                </div>
            }
        </div>
    );
}

export default App;
