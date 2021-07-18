import axios from "axios";
import React, { useEffect, useState } from "react";
import Weather from './Weather'
import { Dimmer, Loader } from 'semantic-ui-react';

const Main = () => {
    const [lat, setLat] = useState([]);
    const [long, setLong] = useState([]);
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            navigator.geolocation.getCurrentPosition(function (position) {
                setLat(position.coords.latitude);
                setLong(position.coords.longitude);
            });
            try {
                await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude={part}&appid=${process.env.REACT_APP_API_KEY}`).then(result => {
                    setData(result.data)
                    console.log(result.data);
                });
            }
            catch (e) {
                console.log(e)
            }

        }
        fetchData();
    }, [lat, long])

    return (
        <div>
            {(typeof data.timezone != 'undefined') ? (
                <Weather weatherData={data} />
            ) : (
                <div>
                    <Dimmer active>
                        <Loader>Loading..</Loader>
                    </Dimmer></div>
            )}
        </div>
    )
}

export default Main
