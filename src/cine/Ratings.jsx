import React from 'react';
import Star from '../assets/star.svg';


export default function Ratings({value}) {
    const stars = Array(value).fill(Star);
    return(
       <>
        {stars.map((star,index) => (
            <img key={index} width="14" height="14" src={star} alt="star" />
        ))}
       </>
    )
}
