

import React, { useState } from 'react'
import PropTypes from 'prop-types'

const AddCategories = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('');

    //Capturar lo que se escribe en el input con el metodo onChange que recibe la funcion y trabaja con eventos
    const handleInputChange = (e) => setInputValue(e.target.value);

    //Trabajar con el enter y en el metodo onSubmit del componente
    const handleSubmit = (e) => {

        e.preventDefault();
        //comprobacion para que el input no este vacio o con espacios
        if(inputValue.trim().length > 3){
            
            setCategories(cats => [inputValue,...cats])
            setInputValue('');
            }else{
                alert('Debes ingresar al menos 4 letras')
            }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
              type='text'
              value={inputValue}
              onChange={handleInputChange}
            />
        </form>
    )
}

AddCategories.propTypes = {
    setCategories: PropTypes.func.isRequired
}

export default AddCategories
