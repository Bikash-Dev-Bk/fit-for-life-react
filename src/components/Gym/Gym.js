import { useEffect, useState } from 'react';
import React from 'react';
import './Gym.css'
import Exercise from '../Exercise/Exercise';
import Details from '../Details/Details';

const Gym = () => {
    const [exercises, setExercises] = useState([]);

    useEffect( ()=>{

        fetch('exercise.json')
        .then(res => res.json())
        .then(data => setExercises(data))

    },[]);
    return (
        <div className="gym-container">
            <div className="exercise-container">
                {
                    exercises.map(exercise => 
                    <Exercise key ={exercise.id} 
                    exercise = {exercise}
                    ></Exercise>)
                }
            </div>
            <div className="exercise-details">
                <Details></Details>
            </div>
        </div>
    );
};

export default Gym;