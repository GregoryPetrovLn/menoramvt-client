import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import Search from "./components/search/Search";
import Body from "./components/body/Body";
import {getFilmById, getFilms, modalTogglerAction} from "./redux/actions";
import FilmInfoModal from "./components/filmInfoModal/FilmInfoModal";

const Films = () => {
    const dispatch = useDispatch()
    const {
        isLoading,
        isLoadingById,
        dataById,
        list,
        isOpenModal,
        error
    } = useSelector(state => state.films)

    useEffect(() => {
        createRequestToSearchItems('Batman')
    }, [])

    useEffect(() => {
        error && alert(error)
    }, [error])

    const modalToggler = () => dispatch(modalTogglerAction(!isOpenModal))

    const createRequestToSearchItems = (search) => {
        dispatch(getFilms(search))
    }

    const onPosterClick = (id) => {
        dispatch(getFilmById(id))
        modalToggler()
    }

    return (
        <div>
            <Search onChange={createRequestToSearchItems}/>
            <Body list={list}
                  title={'Popular movies'}
                  isLoading={isLoading}
                  onPosterClick={onPosterClick}/>

            {dataById && <FilmInfoModal open={isOpenModal}
                                        isLoading={isLoadingById}
                                        handleClose={modalToggler}
                                        data={dataById}/>}
        </div>
    );
};

export default Films;