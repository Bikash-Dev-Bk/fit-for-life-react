import React, {  useState } from 'react';
import './Details.css'

const Details = (props) => { 
    const {list} = props;
    let exerciseTime = 0;
    for(const exercise of list){
        exerciseTime = exerciseTime + exercise.time;
    }

    const [rest, setRest] = useState(0);

    const handleAddABreak = (e) => {
        const restTime = e.target.innerText;
        setRest (restTime);
    }


    return (
        <div className='details-container'>
            <div className='my-info'>
                <h3>Bikash Devsharma</h3>
                <p>Junior Web Developer</p>
                <p>Age: 25 years</p>
                <p>Height: 5.8 feet</p>
                <p>Weight: 70 KG</p>
            </div>          
            <div className='break-container'>
                <h2>Add A Break</h2>
                <div className='break'>
                    <button onClick={handleAddABreak}>10s</button>
                    <button onClick={handleAddABreak}>20s</button>
                    <button onClick={handleAddABreak}>30s</button>
                    <button onClick={handleAddABreak}>40s</button>
                    <button onClick={handleAddABreak}>50s</button>
                </div>
            </div>           
            <div className='exercise-details'>
                <h2>Exercise Details</h2>
                <p className='exercise-details-time'>Exercise time : {exerciseTime} seconds</p>
                <p className='exercise-details-time'>Break time : {rest}</p>
            </div>
            <button className='btn-activity'><p>Activity Completed</p></button>
            
        </div>
    );
};

export default Details;