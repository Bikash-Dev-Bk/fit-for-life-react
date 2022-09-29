import React from 'react';
import './Exercise.css'

const Exercise = (props) => {
    const {handleAddToList, exercise} = props;
    const {name, img, info, age, time} = exercise;
    
    return (
        <div className='exercise'>
            <img src={img} alt="" />
            <div className='exercise-info'>
                <h3>{name}</h3>
                <p>{info}</p>
                <p>For Age: {age} years</p>
                <p>Time required: {time}s</p>
            </div>
            <button className='btn-add' onClick={() => handleAddToList(exercise)}><p>Add to list</p></button>
        </div>
    );
};

export default Exercise;