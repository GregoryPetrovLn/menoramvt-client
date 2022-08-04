import React from 'react';
import './KeyVal.scss'

const KeyVal = ({name, val}) => {
    return (
        <div className={'key-val-item'}>
            <span className={'key-val-item__key'}>{name}: </span>
            <span className={'key-val-item__val'}>{val}</span>
        </div>
    );
};

export default KeyVal;