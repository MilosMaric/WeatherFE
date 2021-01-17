import React, {useCallback, useState} from 'react';
import '../styles/LocationPicker.css'
import {debounce} from "../utils/inputUtils";

const LocationPicker = ({startFetch}) => {
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');
    const [isFetchInProgress, setIsFetchInProgress] = useState(false);

    //TODO: Check why it doesn't rerender FA SVG
    let iconClass = `icon ${isFetchInProgress ? 'fas fa-spinner fa-spin' : 'fa fa-search-location'}`;
    const generateOnChangeCallback = (stateSetter) => e => {
        stateSetter(e.target.value);
    }
    const delay = useCallback(debounce(() => {
        setIsFetchInProgress(true);
        startFetch({city, country}, () => setIsFetchInProgress(false));
    }, 1000), [city, country]);

    return (
        <div className='location-picker'>
            <img src={`./${isFetchInProgress ? 'sunny' : 'cloudy'}.svg`} className='image' alt='WeatherIcon'/>
            <input className='country-input'
                   value={country}
                   onChange={generateOnChangeCallback(setCountry)}
            />
            <input className='city-input'
                   onKeyUp={delay}
                   value={city}
                   onChange={generateOnChangeCallback(setCity)}
            />
            <i className={iconClass}/>
        </div>
    );
}

export default LocationPicker;