import React from 'react'
import PropTypes from 'prop-types';

const defaultValue = '';

export const AddCategory = ({ setCategories }) => {
    const [inputValue, setInputValue] = React.useState(defaultValue)
    
    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(inputValue.trim().length > 2){
            setCategories(cats => [inputValue, ...cats])
            setInputValue(defaultValue)
        }
    }

    return (
        <form onSubmit={ handleSubmit } >
            <input
            type='text'
            value={inputValue}
            onChange={handleInputChange}/>
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
