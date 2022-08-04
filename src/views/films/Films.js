import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import Search from "./components/search/Search";

const Films = () => {
    const dispatch = useDispatch()
    const {isLoading, error, data, list} = useSelector(state => state.films)

    useEffect(() => {

    }, [])


    return (
        <div>
            <Search/>
        </div>
    );
};

export default Films;