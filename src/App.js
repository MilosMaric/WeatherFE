import React from 'react'
import './App.css';
import LocationPicker from "./components/LocationPicker";

function App() {
    const startFetch = ({city, country}, callback) => {
        setTimeout(() => {
            callback();
        }, 3000)
    };
    return (
        <div className='app'>
            <LocationPicker startFetch={startFetch}/>
        </div>
    );
}

export default App;
