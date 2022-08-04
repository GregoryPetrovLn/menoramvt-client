import React from 'react';
import DebouncedInput from "../../../../components/debouncedInput/DebouncedInput";
import './Search.scss'

const Search = () => {
    return (
        <div className={'search'}>
            <DebouncedInput/>
        </div>
    );
};

export default Search;