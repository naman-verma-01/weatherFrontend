import './App.css';
import { getList } from './API/PageData';
import { useEffect, useState } from 'react';
import CityCard from './Component/CityCard';


import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet/TileLayer'
import { useMap } from 'react-leaflet/hooks'
import { Marker, Popup } from 'react-leaflet'


function App() {
  const [data, setData] = useState()
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)

  useEffect(() => {
    setLoading(true)
    getData(page)
  }, [page])

  const getListCallback = async (response) => {
    response = await response.json()
    console.log("response", response)

    setData(response.data)
    setLoading(false)
  }
  const getData = (page) => {
    getList(page, getListCallback)
  }

  const prevPage = ()=>{
    if(page!=1){
      setPage(page-1)
    }
  }

  const nextPage = ()=>{
    if(page!=3){
      setPage(page+1)
    }
  }

  return (
    <div className="App">
      {!loading ? data.map((element) => {
        return <CityCard element={element} />
      }) : <>Loading...</>}
      <div onClick={prevPage}>Prev</div>
      <div>Page: {page}</div>
      <div onClick={nextPage}>Next</div>
    </div>
  );
}

export default App;
