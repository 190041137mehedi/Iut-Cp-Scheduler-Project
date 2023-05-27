import React from 'react';
import list from '../Data/Data';
import '../styles/websites.css';
import Cards from './Cards';

const Websites = ({ handleClick }) => {
  return (
    <section>
      {
        list.map((item) => (
          <Cards item={item} key={item.id} handleClick={handleClick} />
        ))
      }
    </section>
  )
}

export default Websites