import React from 'react';
import './Details.css'

const Details = () => {
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
                    <p>10s</p>
                    <p>20s</p>
                    <p>30s</p>
                    <p>40s</p>
                    <p>50s</p>
                </div>
            </div>
            
            <div className='exercise-details'>
                <h2>Exercise Details</h2>
                <p className='exercise-details-time'>Exercise time</p>
                <p className='exercise-details-time'>Break time</p>
            </div>

            <button><p>Activity Completed</p></button>
            
        </div>
    );
};

export default Details;