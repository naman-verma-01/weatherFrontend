//import './App.css';
import { getList } from '../API/PageData';
import { useEffect, useState } from 'react';
import CityCard from '../Component/CityCard';
import { useDispatch, useSelector } from 'react-redux';
import { SET_API_DATA } from '../Reducers/types';
import Navbar from '../Component/Navbar'
import WeatherInfoBoxHome from '../Component/WeatherInfoBoxHome';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function Home() {
    const [data, setData] = useState()
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [oldPage, setOldPage] = useState(1)
    const [delhiData, setDelhiData] = useState()
    const dispatch = useDispatch()
    const apiData = useSelector((state) => state.api_data.data);

    useEffect(() => {

        console.log("API DATA", apiData)
        if (apiData.length != 0 && oldPage == page) {

            console.log("here2")

            setData(apiData)
            setLoading(false)
            getDelhiData()
        }
        else {

            console.log("here")
            setLoading(true)
            getData(page)
            getDelhiData()


        }

    }, [page])

    /*  setTimeout(() => {
          document.getElementById('check').innerHTML += '-'
         //setPage(page)
          //getData(page)
      }, 1000);
  */
    useEffect(() => {
        const interval = setInterval(() => {
            console.log("here time")
            setLoading(true)
            getData(page)
            //document.getElementById('check').innerHTML += '-'

        }, 300000);

        return () => clearInterval(interval);
    }, []);

    //useEffect(() => {
    //    if (apiData.length != 0) {
    //
    //        setData(apiData)
    //        setLoading(false)
    //    }
    //}, [apiData])

    const getDelhiData = async (response) => {
        let delhiData = await fetch('https://api.openweathermap.org/data/2.5/weather?q=Delhi&appid=75e690174fd07fac7c35957677b8d494')
        delhiData = await delhiData.json()

        console.log("delhiData", delhiData)
        setDelhiData(delhiData)

    }
    const getListCallback = async (response) => {
        response = await response.json()
        console.log("response", response)

        // setData(response.data)
        //setLoading(false)
        dispatch({ type: SET_API_DATA, payload: { data: response.data } });
        setData(response.data)
        setLoading(false)

    }
    const getData = (page) => {
        getList(page, getListCallback)
    }

    const prevPage = () => {
        if (page != 1) {
            setOldPage(page)
            setPage(page - 1)
        }
    }

    const nextPage = () => {
        if (page != 3) {
            setOldPage(page)

            setPage(page + 1)
        }
    }

    useEffect(() => {
        //  getDelhiData()
    })
    //
    return (
        <div >
            <Navbar />


            {delhiData ? <WeatherInfoBoxHome data={delhiData} /> : null}
            <div className='pageControler'>
                <div onClick={prevPage}>Prev</div>
                <div >Page: {page}</div>
                <div  onClick={nextPage}>Next</div>
            </div>
            <div className='cityMenu'>
            {!loading ? data.map((element) => {
                return <CityCard element={element} />
            }) : <></>}
            </div>

            {loading?<Skeleton style={{height:"10vh",width:"50vw",left:"25%", margin:'10px'}} count={2}/>:null}
          
          

            <div id='check'></div>
        </div>
    );
}

export default Home;
