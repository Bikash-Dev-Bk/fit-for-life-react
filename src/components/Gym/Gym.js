import { useEffect, useState } from 'react';
import React from 'react';
import './Gym.css'
import Exercise from '../Exercise/Exercise';
import Details from '../Details/Details';

const Gym = () => {
    const [exercises, setExercises] = useState([]);
    const [list , setList] = useState([]);

    useEffect( ()=>{

        fetch('exercise.json')
        .then(res => res.json())
        .then(data => setExercises(data))

    },[]);

    const handleAddToList = (exercise) => {
        const newList = [...list, exercise];
        setList(newList);
    }
    
    return (
        <div className="gym-container">
            <div className="exercise-container">
                {
                    exercises.map(exercise => 
                    <Exercise key ={exercise.id} 
                    exercise = {exercise}
                    handleAddToList = {handleAddToList}
                    ></Exercise>)
                }
            </div>
            <div className="exercise-details">
                <Details list = {list} ></Details>
            </div>
        </div>
    );
};

export default Gym;