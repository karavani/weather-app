import React from 'react';
import { Button } from 'semantic-ui-react';
import moment from 'moment';
import './Weather.css'
const refresh = () => {
    window.location.reload();
}

const CardExampleCard = ({ weatherData }) => (
    <div className="weatherContainer">
        <div className="header"><h2>{weatherData.timezone}</h2>

            <Button className="button" inverted color='blue' circular icon='refresh' onClick={refresh} />
        </div>
        <p>Day: {moment().format('dddd')}</p>
        <p>Date: {moment().format('LL')}</p>
        <p>Temprature: {Math.floor(weatherData.current.temp / 10)} &deg;C</p>
        <p>Sunrise: {new Date(weatherData.current.sunrise * 1000).toLocaleTimeString('en-IN')}</p>
        <p>Sunset: {new Date(weatherData.current.sunset * 1000).toLocaleTimeString('en-IN')}</p>
        <p>Description: {weatherData.current.weather[0].description}</p>
        {weatherData.daily.map((day, index) => <p key={index}>
            {moment().add(index, 'day').format('dddd') + ' sunrise:'} {new Date(day.sunrise * 1000).toLocaleTimeString('en-IN')}
            </p>)}
        <p></p>
    </div>
)

export default CardExampleCard;