import React from 'react';
import './Body.scss'

const Body = ({title}) => {
    return (
        <div className={'films-body'}>
            <div className={'films-body__title'}>{title}</div>
        </div>
    );
};
Body.defaultProps={
    title:"Title"
}

export default Body;