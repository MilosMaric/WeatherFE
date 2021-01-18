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
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const delay = useCallback(debounce(() => {
        setIsFetchInProgress(true);
        startFetch({city, country}, () => setIsFetchInProgress(false));
    }, city.length ? 1000 : 0), [city, country]);

    //TODO: Functionality to country field
    return (
        <div className='location-picker'>
            <img src={`./planet.svg`} className='image' alt='WeatherIcon'/>
            <input className='country-input'
                   value={country}
                   onChange={generateOnChangeCallback(setCountry)}
            />
            <input className='city-input'
                   onKeyUp={delay}
                   value={city}
                   placeholder={'City name...'}
                   onChange={generateOnChangeCallback(setCity)}
            />
            <i className={iconClass}/>
        </div>
    );
}

export default LocationPicker;