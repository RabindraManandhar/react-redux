import React from 'react';

import classes from './AddPerson.module.css';

const AddPerson = (props) => {
    return (
        <div>
            <button className={classes.AddPerson} onClick={props.addPerson}>Add Person</button>
        </div>
    );
}

export default AddPerson; 