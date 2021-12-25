import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ( { setCategories } ) => {

    const [inputValue, setinputValue] = useState('');

    const handleInputValue = (e) => setinputValue( e.target.value );    

    const form = e => {
        e.preventDefault();

        if ( inputValue.trim().length > 2 ) setCategories( e => [ inputValue, ...e ] ) || setinputValue('');
    }

    return (
        <form onSubmit={ form }>
            <input type='text' value={ inputValue } onChange={ handleInputValue }/>
        </form>       
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}