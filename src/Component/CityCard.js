import React, { useState } from 'react'
import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet/TileLayer'
import { useMap } from 'react-leaflet/hooks'
import { Marker, Popup } from 'react-leaflet'

function CityCard(props) {
    const [toggle, setToggle] = useState(false)

    const toggleFunc = () => {
        setToggle(!toggle)
        console.log(toggle)
    }
    return (
        <div >
            <div onClick={toggleFunc}>
            {props.element.name}<br />
            </div>
            {toggle ? <MapContainer center={[props.element.coord.lat, props.element.coord.lon]} zoom={12} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[props.element.coord.lat, props.element.coord.lon]}>
                    <Popup>
                        {props.element.name} <br /> {Math.floor(props.element.main.temp - 273)} C
                    </Popup>
                </Marker>
            </MapContainer> : null}
        </div>

    )
}

export default CityCard