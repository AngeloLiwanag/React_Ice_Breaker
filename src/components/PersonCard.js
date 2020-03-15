import React, { Component } from 'react';

const Header = ({firstName, lastName, age, hairColor}) => (
    <div>
        <h1>{lastName}, {firstName}</h1>
        <p>Age: {age}</p>
        <p>Hair Color: {hairColor}</p>
    </div>
)

class PersonCard extends Component {
    render() {
        return(
            <div>
                <Header firstName="Angelo" lastName="Liwanag" age="21" hairColor="Black"/> 
                <Header firstName="Christian" lastName="Santo Domingo" age="19" hairColor="Brown"/>
                <Header firstName="Kathy" lastName="Nguyen" age="22" hairColor="Blond"/>          
            </div>
          
        );
    }
}

export default PersonCard;