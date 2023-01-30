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
        <div >
            <div onClick={toggleFunc}>
            {props.element.name}<br />
            <Link to={`single/${props.element.name}`}> Single</Link>
            </div>
            {toggle ? null : null}
        </div>

    )
}

export default CityCard