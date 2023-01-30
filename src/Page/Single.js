import React, { useEffect, useState } from 'react'
import { useSelector } from "react-redux";
import { useParams } from 'react-router-dom';
import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet/TileLayer'
import { useMap } from 'react-leaflet/hooks'
import { Marker, Popup } from 'react-leaflet'
import WeatherInfoBox from '../Component/WeatherInfoBox';
function Single() {
    const [data, setData] = useState()
    const apiData = useSelector((state) => state.api_data.data);

    const route = useParams()

    useEffect(() => {
        apiData.forEach(element => {
            console.log(element.name)
            if (element.name == route.city) {
                setData(element)
            }
        });
    }, [])

    return (
        <div>
            {data ? <div>
                
                <WeatherInfoBox data={data}/>

                <MapContainer center={[data.coord.lat, data.coord.lon]} zoom={12} scrollWheelZoom={false}>

                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[data.coord.lat, data.coord.lon]}>
                        <Popup>
                            {data.name} <br/> {Math.floor(data.main.temp - 273)}  &#176;C
                        </Popup>
                    </Marker>
                </MapContainer>

                </div> 
            : null}
        </div>
    )
}

export default Single