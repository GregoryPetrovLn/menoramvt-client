import React from 'react';
import DebouncedInput from "../../../../components/debouncedInput/DebouncedInput";
import './Search.scss'

const Search = ({onChange}) => {
    return (
        <div className={'search'}>
            <DebouncedInput onChange={onChange}
                            placeholder={'Search'}
            />
        </div>
    );
};

export default Search;