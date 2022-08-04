import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import Search from "./components/search/Search";

const Films = () => {
    const dispatch = useDispatch()
    const {isLoading, error, data, list} = useSelector(state => state.films)

    useEffect(() => {

    }, [])

    const createRequestToSearchItems = (e) => {
        console.log(e.target.value)
    }


    return (
        <div>
            <Search onChange={createRequestToSearchItems}/>
        </div>
    );
};

export default Films;