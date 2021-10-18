
import React, {useState} from 'react'
import PropTypes from 'prop-types'
import AddCategories from './components/AddCategories';
import GifGrid from './components/GifGrid';

const GiftExpertApp = props => {

  const [categories, setCategories] = useState(['Clash of clans']);

  // const addCategorie = () => setCategories([...categories, 'Call Of Duty']);

  return (
    <>
      <h2>Gif Expert App</h2>
      <AddCategories setCategories={setCategories}/>
      <hr />
        { 
          categories.map( category => 
          <GifGrid category={category} key={category} /> ) 
        }
    </>
  )
}

GiftExpertApp.propTypes = {

}

export default GiftExpertApp
