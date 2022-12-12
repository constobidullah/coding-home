import React from 'react';
import './CodeDetails.css'

const CodeDetails = ({ code }) => {
    const { img, name, time, age, text } = code;
    return (
        <div className='code-details-container'>
            <img src={img} alt="" />
            <h4>{name}</h4>
            <p>{text}</p>
            <p>For age: {age}</p>
            <p>Time Required: {time}</p>
            <button className='list-add-button'>
                <p>Add to list</p>
            </button>
        </div>
    );
};

export default CodeDetails;