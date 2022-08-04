import React from 'react';
import './FilmInfoModal.scss'
import ModalView from "../../../../components/modal/ModalView";
import KeyVal from "../../../../components/keyVal/KeyVal";
import Grid from '@mui/material/Grid';

const FilmInfoModal = ({data, isLoading, open, handleClose}) => {
    const createFields = (keys) => data && keys.map(key => <KeyVal name={key} val={data[key]}/>)
    return (
        <div className={'film-info-modal'}>
            <ModalView open={open}
                       handleClose={handleClose}
                       isLoading={isLoading}>
                <div className={'film-info-modal__body-wrapper'}>
                    <Grid container className={'row first-row'}>
                        <Grid item sm={2}>
                            <img src={data?.Poster} alt={data?.Title}/>
                        </Grid>
                        <Grid item sm={10}>
                            <Grid container>
                                <Grid item sm={5} className={'text-block'}>
                                    {createFields(['Title', 'Year', 'Runtime', 'Director', 'Type'])}
                                </Grid>

                                <Grid item sm={5} className={'text-block'}>
                                    {createFields(['Writer', 'Genre', 'Actors'])}
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item sm={12} className={'row second-row'}>
                            <div className={'text-block'}>
                                {createFields(['Plot', 'Language', 'Awards'])}
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </ModalView>
        </div>
    );
};

export default FilmInfoModal;
