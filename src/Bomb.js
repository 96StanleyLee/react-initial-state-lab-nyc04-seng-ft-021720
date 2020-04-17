// your Bomb code here!
import React from 'react';

export default class Bomb extends React.Component {


    constructor(props){
        super()
        this.state={
            secondsLeft: props.initialCount
        }
    }


    
    

    render(){
        
        const bombTime = this.state.secondsLeft === 0 ? <h1>Boom!</h1>:<h1>{this.state.secondsLeft} seconds left before I go boom!</h1>

        return(
           bombTime
        )
    }



}

