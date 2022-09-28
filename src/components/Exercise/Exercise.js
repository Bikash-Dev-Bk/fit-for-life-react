import React from 'react';
import './Exercise.css'

const Exercise = (props) => {
    const {name, img, info, age, time} = props.exercise;
    return (
        <div className='exercise'>
            <img src={img} alt="" />
            <div className='exercise-info'>
                <h3>{name}</h3>
                <p>{info}</p>
                <p>For Age: {age}</p>
                <p>Time required: {time}</p>
            </div>
            <button className='btn-add'><p>Add to list</p></button>
        </div>
    );
};

export default Exercise;