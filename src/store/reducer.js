import * as actionTypes from './actions';

const initialState = {
    persons: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_PERSON:
            const newPerson = {
                id: Math.random(),
                name: 'Rabindra',
                age: Math.floor(Math.random() * 30)
            }
            return {
                ...state,
                persons: state.persons.concat(newPerson)
            }

        case actionTypes.DELETE_PERSON:
            return {
                ...state,
                persons: state.persons.filter(person => person.id !== action.personId)
            }

        default:
            return state;
    }
};

export default reducer;