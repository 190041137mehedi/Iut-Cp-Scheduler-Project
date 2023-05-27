import React, { useState } from 'react';
import Navbar from '../Navbar';
import Websites from '../Websites';
import Filter from '../Filter';

const MainDash = () => {
  const [show, setShow] = useState(true);
  const [filter, setFilter] = useState([]);
  const [warning, setWarning] = useState(false);

  const handleClick = (item) => {
    let isPresent = false;
    filter.forEach((product) => {
      if (item.id === product.id)
        isPresent = true;
    })
    if (isPresent) {
      setWarning(true);
      setTimeout(() => {
        setWarning(false);
      }, 2000);
      return;
    }
    setFilter([...filter, item]);
  }

  const handleChange = (item, d) => {
    let ind = -1;
    filter.forEach((data, index) => {
      if (data.id === item.id)
        ind = index;
    });
    const tempArr = filter;
    tempArr[ind].amount += d;

    if (tempArr[ind].amount === 0)
      tempArr[ind].amount = 1;
    setFilter([...tempArr])
  }

  return (
    <React.Fragment className="MainDash">
      <Navbar size={filter.length} setShow={setShow} />
      {
        show ? <Websites handleClick={handleClick} /> : <Filter filter={filter} setFilter={setFilter} handleChange={handleChange} />
      }
      {
        warning && <div className='warning'>Item is already added to your filter</div>
      }
    </React.Fragment>
  )
}

export default MainDash;