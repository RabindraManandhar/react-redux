import React from 'react';

import classes from './Person.module.css';

const Person = (props) => {
    return (
        <div className={classes.Person} onClick={props.clicked}>
            <h3>Name: {props.name}</h3>
            <h3>age: {props.age}</h3>
        </div>
    );
}

export default Person; 