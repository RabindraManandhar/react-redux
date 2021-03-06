import React, { Component } from 'react';

import classes from './AddPerson.module.css';

class AddPerson extends Component {
    state = {
        name: '',
        age: ''
    }

    nameChangeHandler = (event) => {
        this.setState({ name: event.target.value })
    }

    ageChangeHandler = (event) => {
        this.setState({ age: event.target.value })
    }

    render() {
        return (
            <div className={classes.AddPerson} >
                <input
                    type="text"
                    placeholder="Name"
                    onChange={this.nameChangeHandler}
                    value={this.state.name} />
                <input
                    type="number"
                    placeholder="Age"
                    onChange={this.ageChangeHandler}
                    value={this.state.age} />

                <button onClick={() => this.props.addPerson(this.state.name, this.state.age)}>Add Person</button>
            </div>
        );
    }

}
export default AddPerson; 