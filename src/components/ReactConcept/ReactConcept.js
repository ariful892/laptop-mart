import React from 'react';
import './ReactConcept.css'

const ReactConcept = () => {
    return (
        <div className='react-concept'>
            <h1 className='concept-title'>React Concept</h1>
            <h2>Props VS State</h2>
            <p>Props basically used to pass data from parent component to child component. The data passed in unidirectional flow which is also called one way binding. We can pass array, object, function or a single value through props. Props is read only it can't be changed in the chile component. On the other, state is used to handle the changes happened in the website. It depends on the user interaction. If user make any interaction in the website then state handles the changes. </p>
            <h2>How useState works?</h2>
            <p>The useState is used when a user make any changes in the website. useState is a hook. React sets some functionality to identify if any changes happened in the website it instantly creates a virtual DOM and then compare it to the previous DOM then the changes occurred based on that. The useState function starts with an initial value. When the function is called it returns the current state value in a variable and a function which updated the state value.</p>
        </div>
    );
};

export default ReactConcept;