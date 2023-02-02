import React, { useEffect, useState } from 'react'
import { useSelector } from "react-redux";
import { useParams } from 'react-router-dom';
import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet/TileLayer'
import { Marker, Popup } from 'react-leaflet'
import WeatherInfoBox from '../Component/WeatherInfoBox';
import Navbar from '../Component/Navbar'
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
            <Navbar />
            {data ? <div>

                <WeatherInfoBox data={data} />

                <MapContainer center={[data.coord.lat, data.coord.lon]} zoom={12} scrollWheelZoom={false}>

                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
          

                    <Marker position={[data.coord.lat, data.coord.lon]}>
                        <Popup>
                            <h1>{data.name}</h1>
                            
                            
                            
                            <h2>{Math.floor(data.main.temp - 273)}  &#176;C</h2>
                            
                            
                            <div className='mescContainer' >
                                <div style={{ border: "0" }}>
                                    <h5>Temp Min. {Math.floor(data.main.temp_min - 273)}&#176;C</h5>
                                </div>
                                <div>
                                    <h5>Temp Max. {Math.floor(data.main.temp_max - 273)}&#176;C</h5>

                                </div>
                            </div>
                            <br />
                            

                        </Popup>
                    </Marker>
                </MapContainer>

            </div>
                : null}
        </div>
    )
}

export default Single