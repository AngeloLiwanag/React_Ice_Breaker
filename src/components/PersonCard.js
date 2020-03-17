import React, { Component } from 'react';

const PersonCard = (props) => {
    const state = {
        birthday : 0
    }
    
    const handleClick = () =>{
        state.birthday += 1;       
        console.log(state.birthday)
    }

    return (
        <div>
            <h1>{props.lastName}, {props.firstName}</h1>
            <p>Birthday: {state.birthday}</p>
            <p>Age: {props.age}</p>
            <p>Hair Color: {props.hairColor}</p>
            <button onClick={handleClick}>Birthday Button for {props.firstName}</button>
        </div>
    );
}

// const Header = (props) => (
//     <div>
//         <h1>{props.lastName}, {props.firstName}</h1>
//         <p>Age: {props.age}</p>
//         <p>Hair Color: {props.hairColor}</p>
//         <button onClick={props.handleClick}>Birthday Button for {props.firstName}</button>
//     </div>
// )
// class PersonCard extends Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             birthday1: 0,
//             birthday2:0,
//             birthday3: 0
//         }
//     }

//     handleClick1 = () => {
//         this.setState({
//             birthday1: this.state.birthday1 + 1,
//         })
//         console.log(this.state)
//     }

//     handleClick2 = () => {
//         this.setState({
//             birthday2: this.state.birthday2 + 1,
//         })
//         console.log(this.state)
//     }

//     handleClick3 = () => {
//         this.setState({
//             birthday3: this.state.birthday3 + 1,
//         })
//         console.log(this.state)
//     }
//     render() {
//         return(
//             <div>
//                 <Header firstName="Angelo" lastName="Liwanag" handleClick={this.handleClick1} age={21 + this.state.birthday1} hairColor="Black"/> 

//                 <Header firstName="Christian" lastName="Santo Domingo" handleClick={this.handleClick2} age={19 + this.state.birthday2} hairColor="Brown"/>

//                 <Header firstName="Kathy" lastName="Nguyen" handleClick={this.handleClick3} age={22 + this.state.birthday3} hairColor="Blond"/>          
//             </div>
//         );
//     }
// }

export default PersonCard;