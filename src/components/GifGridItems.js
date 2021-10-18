import React from 'react'
import PropTypes from 'prop-types'

const GifGridItems = ({id, title, gif}) => {

    

    return (

        <div className="card border-dark animate__animated animate__fadeInDown animate__repeat-1">
                <img src={gif} className="card-img-top" alt={title}/>
                <div className="card-body">
                    <p className="card-text">{title}</p>
                </div>
        </div>
                
    )
}

GifGridItems.propTypes = {

}

export default GifGridItems
