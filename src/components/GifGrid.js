import React from 'react'
import useFetchGifs from '../hooks/useFetchGifs'
import GifGridItems from '../components/GifGridItems'

//Se crea el componente grid de gif o imagenes.
const GifGrid = ({category}) => {

       
    const {loading, data:gifs} = useFetchGifs(category);

    return (
        <div className='container-fluid'>
            <h3 className='align-self-center m-4'>{category}</h3>    
        <div className='d-flex flex-row flex-wrap'>
            { loading && <p className='animate__animated animate__flash animate__infinite'>Loading...</p> }
            { gifs.map( gif => <GifGridItems key={gif.id} {...gif} /> ) }
        </div>
        <hr/>
        </div>
    )
}

GifGrid.propTypes = {

}

export default GifGrid