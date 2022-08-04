import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import Search from "./components/search/Search";
import Body from "./components/body/Body";
import {getFilms} from "./redux/actions";

const Films = () => {
    const dispatch = useDispatch()
    const {isLoading, error, dataById, list} = useSelector(state => state.films)

    useEffect(() => {
        createRequestToSearchItems()
    }, [])

    const createRequestToSearchItems = (e) => {
        dispatch(getFilms())
    }

    console.log(process.env.REACT_APP_API_BASE_URL)
    return (
        <div>
            <Search onChange={createRequestToSearchItems}/>
            <Body list={list} isLoading={isLoading}/>
        </div>
    );
};

export default Films;