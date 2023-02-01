import React from 'react'

function WeatherInfoBox(props) {
    console.log("PROP", props.data)
    return (
        <div className='weatherInfoBox'>
            <h1>{props.data.name}</h1>
            <br />
            <h4>{props.data.weather[0].main}</h4>
            <h4>{props.data.weather[0].description}</h4>
            <br />
            <img height={"100px"} src={`https://openweathermap.org/img/w/${props.data.weather[0].icon}.png`} />
            
            <h2>{Math.floor(props.data.main.temp - 273)}  &#176;C</h2><br />
            <h4>Feels Like &nbsp;{Math.floor(props.data.main.feels_like - 273)}  &#176;C</h4>

            <div className='mescContainer' >
                <div style={{border:"0"}}>
                    <h5>Temp Min. {Math.floor(props.data.main.temp_min - 273)}&#176;C</h5>
                </div>
                <div>
                    <h5>Temp Max. {Math.floor(props.data.main.temp_max - 273)}&#176;C</h5>

                </div>
            </div>
            <br />
            <div className='mescContainer'>
                <div>
                    <h5>Wind {props.data.wind.speed}</h5>
                </div>
                <div>
                    <h5>Humidity {props.data.main.humidity}</h5>

                </div>
            </div>
            
            

        </div>

    )
}

export default WeatherInfoBox