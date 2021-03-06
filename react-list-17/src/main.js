import React from 'react';
import ReactDOM from 'react-dom';
import { useState } from 'react';
// import SelectColor from './select_color';
import SelectCountryAndCity from './select_country_and_city';


const countriesAndCities = {
    Israel: ['Jerusalem', 'Tel Aviv', 'Raanana', 'Ramat Gan'],
    Jordan: ['Amman', 'Zarqa', 'Irbid', 'Aqaba'],
    Syria: ['Damascus', 'Hama', 'Idlib', 'Raqqa'],
    Egypt: ['Cairo', 'Alexandria', 'Giza'],
};


const App = () => {
    const [count, setCount] = useState(0);
    function resetList(e) {
        setCount( count => count + 1);
    }
    return (
        <div>
            <h2>Color Picker Demo</h2>
            {/*<SelectColor />*/}
            <hr />

            <h2>Country and City Select Demo</h2>
            <button onClick={resetList}>Reset</button>
            <SelectCountryAndCity key={count} countriesAndCities={countriesAndCities} />
        </div>
    )
};


// main.js
const root = document.querySelector('main');
ReactDOM.render(<App />, root);