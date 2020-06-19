import React from 'react';

export default function Person(props) {
    const {name, gender, age} = props;
    return (
        <div>
            <h2>Hi!</h2>
            <p>My child is {name}, I'm a {gender}, and I'm {age} years old.</p>
        </div>
    )
}