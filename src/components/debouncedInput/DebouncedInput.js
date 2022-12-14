import React from 'react';
import {DebounceInput} from 'react-debounce-input';
import './DebouncedInput.scss'
import classNames from "classnames";
import searchIcon from '../../icons/searchIcon.png'

const DebouncedInput = ({placeholder, debounceTimeout, onChange, className}) => {
    return (
        <div className={classNames('custom-debounced-input', className)}>
            <img src={searchIcon}/>
            <DebounceInput
                type="text"
                debounceTimeout={debounceTimeout}
                onChange={onChange}
                placeholder={placeholder}
            />
        </div>
    );
};
DebouncedInput.defaultProps = {
    placeholder: "Placeholder",
    debounceTimeout: 700,
    onChange: () => undefined,
}

export default DebouncedInput;