//import './App.css';
import { getList } from '../API/PageData';
import { useEffect, useState } from 'react';
import CityCard from '../Component/CityCard';
import { useDispatch, useSelector } from 'react-redux';
import { SET_API_DATA } from '../Reducers/types';
function Home() {
    const [data, setData] = useState()
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [oldPage, setOldPage] = useState(1)
    const dispatch = useDispatch()
    const apiData = useSelector((state) => state.api_data.data);

    useEffect(() => {
        console.log("API DATA", apiData)
        if (apiData.length != 0 && oldPage == page) {
            //console.log("CHECK", apiData == [],oldPage == page,apiData.length != 0)
            console.log("here2")

            setData(apiData)
            setLoading(false)
        }
        else {
            console.log("here")
            setLoading(true)
            getData(page)
        }

    }, [page])


    useEffect(() => {
        if (apiData.length != 0) {
            //console.log("CHECK", apiData == [],oldPage == page,apiData.length != 0)
            //console.log("here2")

            setData(apiData)
            setLoading(false)
        }
    }, [apiData])


    const getListCallback = async (response) => {
        response = await response.json()
        console.log("response", response)

        // setData(response.data)
        //setLoading(false)
        dispatch({ type: SET_API_DATA, payload: { data: response.data } });

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

    return (
        <div >
            {!loading ? data.map((element) => {
                return <CityCard element={element} />
            }) : <>Loading...</>}
            <div onClick={prevPage}>Prev</div>
            <div>Page: {page}</div>
            <div onClick={nextPage}>Next</div>
        </div>
    );
}

export default Home;
