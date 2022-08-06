import React from 'react';
import './Body.scss'
import Card from "../../../../components/card/Card";
import Loader from "../../../../components/loader/Loader";
import NoItems from "../../../../components/noItemsPreview/NoItems";

const Body = ({title, list, isLoading, onPosterClick}) => {
    return (
        <div className={'films-body'}>
            <div className={'films-body__title'}>{title}</div>
            {isLoading ?
                <Loader/> :
                list && list.length > 0 ? <div className={'films-body__content-wrapper'}>
                    {list?.map(item => (
                        <Card key={item?.imdbID}>
                            <img onClick={() => onPosterClick(item?.imdbID)}
                                 src={item?.Poster}
                                 alt={item?.Title}
                            />
                        </Card>
                    ))}
                </div> : <NoItems/>
            }
        </div>
    );
};
Body.defaultProps = {
    title: "Title"
}

export default Body;