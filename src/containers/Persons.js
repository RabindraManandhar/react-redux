import React, { Component } from 'react';
import { connect } from 'react-redux';

import AddPerson from '../components/AddPerson/AddPerson';
import Person from '../components/Person/Person';
import * as actionTypes from '../store/actions';

class Persons extends Component {

    render() {
        return (
            <div>
                <AddPerson addPerson={this.props.onAddedPerson} />
                {this.props.personsState.map(person => (
                    <Person
                        key={person.id}
                        name={person.name}
                        age={person.age}
                        clicked={() => this.props.onDeletedPerson(person.id)} />
                ))}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        personsState: state.persons
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onAddedPerson: (name, age) => dispatch({ type: actionTypes.ADD_PERSON, personData: { name: name, age: age } }),
        onDeletedPerson: (id) => dispatch({ type: actionTypes.DELETE_PERSON, personId: id })
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(Persons);