import React, { Component } from 'react';
import { connect } from 'react-redux';
import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';

class Persons extends Component {
    render () {
        return (
            <div>
                <AddPerson personAdded={this.props.onStorePerson} />
                {this.props.storedPersons.map(person => (
                    <Person 
                        key={person.id}
                        name={person.name} 
                        age={person.age} 
                        clicked={() => this.props.onDeletePerson(person.id)}/>
                ))}
            </div>
        );
    }

   
}

const mapStateToProps = state => {
    return {
        storedPersons : state.persons
    };
};


const mapDispatchToProps = dispatch => {
    return {
        onStorePerson: () => dispatch({type: 'ADD_PERSON'}),
        onDeletePerson: (id) => dispatch({type: 'DELETE_PERSON', personID: id})
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(Persons);