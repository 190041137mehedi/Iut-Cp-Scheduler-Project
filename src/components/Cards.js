import React from 'react';
import '../styles/cards.css'
import './Cards/Cards.css'
import './Card/Card.css'

const Cards = ({ item, handleClick }) => {
  const { title, color, id } = item;
  return (
    <div className="Cards">
      <div className="parentContainer" key={id}>
        <div className='CompactCard'>
          {/* <p style={{
            background: color.backGround,
            boxShadow: color.boxShadow,
          }}>{title}</p> */}

          <button class='button-30' role="button" onClick={() => handleClick(item)} ><p style={{
            background: color.backGround,
            boxShadow: color.boxShadow,
          }}>{title}</p></button>



        </div>
      </div>
    </div>
  )
}

export default Cards