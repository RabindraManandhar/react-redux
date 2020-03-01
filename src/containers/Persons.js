import React, { Component } from 'react';

import AddPerson from '../components/AddPerson/AddPerson';
import Person from '../components/Person/Person';

class Persons extends Component {

    state = {
        persons: []
    }

    addPersonHandler = () => {
        const newPerson = {
            id: Math.random(),
            name: 'Rabindra',
            age: Math.floor(Math.random() * 30)
        }

        this.setState((prevState) => {
            return {
                persons: prevState.persons.concat(newPerson)
            }
        });
    }

    deletePersonHandler = (personId) => {
        this.setState((prevState) => {
            return {
                persons: prevState.persons.filter(person => person.id !== personId)
            }
        });
    }

    render() {
        return (
            <div>
                <AddPerson addPerson={this.addPersonHandler} />
                {this.state.persons.map(person => (
                    <Person
                        key={person.id}
                        name={person.name}
                        age={person.age}
                        clicked={() => this.deletePersonHandler(person.id)} />
                ))}
            </div>
        )
    }
}

export default Persons;