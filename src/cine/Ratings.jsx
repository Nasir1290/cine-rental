import React from 'react';
import Star from '../assets/star.svg';


export default function Ratings({value}) {
    const stars = Array(value).fill(Star);
    return(
       <>
        {stars.map((star) => (
            <img src={star} alt="star" />
        ))}
       </>
    )
}
