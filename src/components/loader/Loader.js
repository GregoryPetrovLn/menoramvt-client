import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import './Loader.scss'
import classNames from "classnames";

const Loader = ({className}) => {
    return (
        <div className={classNames('custom-loader', className)}>
            <CircularProgress/>
        </div>
    );
};

export default Loader;