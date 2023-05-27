import React, { useState } from 'react';
import { useEffect } from 'react';
import "../styles/filter.css";

const Filter = ({ filter, setFilter, handleChange }) => {
    const [count, setCount] = useState(0);

    const handleCount = () => {
        let ans = 0;
        filter.map((item) => (
            ans += item.amount * item.count
        ))
        setCount(ans);
    }

    const handleRemove = (id) => {
        const arr = filter.filter((item) => item.id !== id);
        setFilter(arr);
        // handleCount();
    }

    useEffect(() => {
        handleCount();
    })

    return (
        <article>
            {
                filter?.map((item) => (
                    <div className="filter_box" key={item.id}>
                        <div className="filter_img">
                            <img src={item.img} />
                            <p>{item.title}</p>
                        </div>
                        <div>
                            <span>{item.count}</span>
                            <button onClick={() => handleRemove(item.id)} >Remove</button>
                        </div>
                    </div>
                ))}

        </article>
    )
}

export default Filter