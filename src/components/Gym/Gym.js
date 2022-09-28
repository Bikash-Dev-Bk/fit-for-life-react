import { useEffect, useState } from 'react';
import React from 'react';
import './Gym.css'

const Gym = () => {
    const [exercise, setExercise] = useState([]);

    useEffect( ()=>{

        fetch('exercise.json')
        .then(res => res.json())
        .then(data => setExercise(data))

    },[]);
    return (
        <div className="gym-container">
            <div className="exercise">
                <h1>This is exercise {exercise.length}</h1>
            </div>
            <div className="exercise-details">
               <h1> This is exercise-details</h1>
            </div>
        </div>
    );
};

export default Gym;