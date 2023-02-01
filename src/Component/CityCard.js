import React, { useState } from 'react'
import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet/TileLayer'
import { useMap } from 'react-leaflet/hooks'
import { Marker, Popup } from 'react-leaflet'
import { Link } from 'react-router-dom'

function CityCard(props) {
    const [toggle, setToggle] = useState(false)

    const toggleFunc = () => {
        setToggle(!toggle)
        console.log(toggle)
    }
    return (
        <Link to={`single/${props.element.name}`}>
            <div className='cityCard'>
                <div>
                    <img height={"40px"} src={`https://openweathermap.org/img/w/${props.element.weather[0].icon}.png`} /><br />
                    <h5>{props.element.name}</h5>
                </div>
                <div>
                    Temp. &nbsp;{Math.floor(props.element.main.temp - 273)} &#176;C <br/>
                    Wind &nbsp;{props.element.wind.speed} &#176;C
                </div>
                <div>
                    {props.element.weather[0].main} <br/>
                    {props.element.weather[0].description}
                </div>
                <div>

                </div>



            </div>
        </Link>

    )
}

export default CityCard