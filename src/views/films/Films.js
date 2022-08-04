import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import Search from "./components/search/Search";
import Body from "./components/body/Body";
import {getFilmById, getFilms} from "./redux/actions";
import FilmInfoModal from "./components/filmInfoModal/FilmInfoModal";

const Films = () => {
    const dispatch = useDispatch()
    const {
        isLoading,
        isLoadingById,
        error,
        dataById,
        list
    } = useSelector(state => state.films)
    const [isOpenModal, setIsOpenModal] = useState(false)

    useEffect(() => {
        createRequestToSearchItems()
    }, [])

    const modalToggler = () => setIsOpenModal(!isOpenModal)

    const createRequestToSearchItems = (e) => {
        dispatch(getFilms())
    }

    const onPosterClick = (id) => {
        dispatch(getFilmById(id))
        modalToggler()
    }

    return (
        <div>
            <Search onChange={createRequestToSearchItems}/>
            <Body list={list}
                  isLoading={isLoading}
                  onPosterClick={onPosterClick}/>

            {isOpenModal && <FilmInfoModal open={isOpenModal}
                                           isLoading={isLoadingById}
                                           handleClose={modalToggler}
                                           data={dataById}/>}
        </div>
    );
};

export default Films;