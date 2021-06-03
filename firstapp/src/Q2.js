import React from 'react';
class Q2 extends React.Component{
    
    state={
        name:"Anchal Halder",
        roll:12
    };
    render(){
        return (<div>     
            <h1>Without Constructor :</h1>
            <h1>Hi {this.state.name} </h1>
            <h1>Roll Number : {this.state.roll} </h1>
        </div>);
    }
} 
export default Q2;


