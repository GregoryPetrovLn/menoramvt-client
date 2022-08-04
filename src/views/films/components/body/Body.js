import React from 'react';
import './Body.scss'
import Card from "../../../../components/card/Card";
import {Grid} from "@mui/material";

const Body = ({title}) => {
    return (
        <div className={'films-body'}>
            <div className={'films-body__title'}>{title}</div>
            <div className={'films-body__content-wrapper'}>
                    {Array(35).fill(null).map((item, idx) => (

                            <Card/>
                    ))}
            </div>
        </div>
    );
};
Body.defaultProps = {
    title: "Title"
}

export default Body;