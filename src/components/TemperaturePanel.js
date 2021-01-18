import React from 'react';
import '../styles/LocationPicker.css'
import '../styles/TemperaturePanel.css'
import {formatDate, getWeekday} from "../utils/dateUtils";

const TemperaturePanel = ({weatherByDay, average}) => {
    const dates = weatherByDay.map(x => x.date);
    const mapDailyData = weatherData => {
        const dayName = getWeekday(weatherData.date).toUpperCase();
        return (
            <div className='daily-average-temperature-container' key={dayName}>
                <div className='day-name'>
                    <img src={weatherData.image} alt='DailyImage' className='image'/>
                </div>
                <div className='day-name'>{dayName}</div>
                <div className='flex'>
                    <span className='daily-temperature-day'>{weatherData.average}</span>
                    <span className='temperature-unit'>°C</span>
                </div>
            </div>
        )
    }

    return (
        <div className='temperature-panel'>
            <div className='average-temp-for-period-container'>
                <div className='date-interval'>
                    {formatDate(dates[0])} - {formatDate(dates[dates.length - 1])}
                </div>
                <div className='flex'>
                    <span className='daily-temperature-day avg-day'>{average}</span>
                    <span className='temperature-unit avg-unit'>°C</span>

                </div>
            </div>
            <div className='daily-average-temperatures-container'>
                {weatherByDay.map(mapDailyData)}
            </div>
        </div>
    );
}

export default TemperaturePanel;