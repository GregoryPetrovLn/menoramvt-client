import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import Loader from "../../components/loader/Loader";

const Films = () => {
    const dispatch = useDispatch()
    const {isLoading, error, data, list} = useSelector(state => state.films)

    useEffect(() => {

    }, [])


    return (
        <div>

        </div>
    );
};

export default Films;