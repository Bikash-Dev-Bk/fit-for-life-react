import React from 'react';
import './Questions.css'

const Questions = () => {
    return (
        <div className='question-container'>
            <h2>Question 1: How does React work?</h2>
            <p>React uses a declarative paradigm that makes it easier to reason about your application and aims to be both efficient and flexible. It designs simple views for each state in your application, and React will efficiently update and render just the right component when your data changes. The declarative view makes your code more predictable and easier to debug.</p>

            <h2>Question 2: What are the difference between props and state?</h2>
            <p>
                <strong>PROPS:</strong> The Data is passed from one component to another. It is Immutable (cannot be modified). Props can be used with state and functional components. Props are read-only.
                <br>
                </br>
                <br>
                </br>
                <strong>STATE</strong> The Data is passed within the component only. It is Mutable ( can be modified). State can be used only with the state components/class component (Before 16.0). State is both read and write.
            </p>

            <h2>Question 3: What does useEffect do other than load data?</h2>
            <p> The useEffect Hook allows you to perform side effects in your components. Some examples of side effects are:  directly updating the DOM, and timers. useEffect accepts two arguments. The second argument is optional.</p>
        </div>
    );
};

export default Questions;