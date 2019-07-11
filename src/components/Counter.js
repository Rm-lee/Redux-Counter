import React, { Component } from "react";
import { connect } from 'react-redux';
import { increment, decrement } from '../actions'; 

class Counter extends Component {
    incrementIfOdd = () => {
        // Stretch Problem: Implement an increment function that
        // only increments if the counter value is odd
        
        if(this.props.count % 2 !== 0){
            this.props.increment(this.props.count)
        
        }
    };
    
    incrementAsync = () => {
        setTimeout(function(){this.props.increment(this.props.count)}.bind(this),1000)
    };

    render() {
        
        // Fill in the two button onClick methods
        // Upon clicking these buttons, the count
        // should decrement or increment accordingly
        return (
            <div style={parent}>
               
                <div style={styles}>
                    
                    <p style={title}>Clicked: {this.props.count} times</p>
                    <button style={btn} onClick={() => {this.props.increment(this.props.count)}}>
                        +
                    </button >
                    <button style={btn} onClick={() => {this.props.decrement(this.props.count) }}>
                        -
                    </button>
                     {/* Uncomment these button tags if you got
                    around to implementing the extra credit functions */}
                     <button style={btn} onClick={this.incrementIfOdd}>
                        Increment if odd
                    </button>
                    <button style={btn} onClick={this.incrementAsync}>
                        Increment async
                    </button>  
                </div>
            </div>
            
            
        );
    }
}
const title = {
    backgroundColor:'#2de2e6',
    border: 'none',
    margin:'5px 0',
    boxShadow: '4px 4px 4px #888888',
    fontSize:'1rem',
    borderRadius:'20px',
    padding:'5px 0',
    fontWeight:'bold'
  
    
}
const btn = {
    backgroundColor:'white',
    border: 'none',
    margin:'5px 0',
    boxShadow: '4px 4px 4px #888888',
}
const parent = {
    display:'flex',
    padding:'20px',
    justifyContent:'center',
    backgroundColor:'lightgrey',
    width:'50%',
    margin:'50px auto',
    borderRadius:'10px'

}
const styles={
    textAlign:'center',
    display:'flex',
    flexDirection:'column',
    width:'50%',
    
}
// The mapStateToProps function specifies which portion of the
// state tree this component needs to receive. In this case,
// since our redux store is only storing the value of the count,
// this component receives the whole state. In a more complex
// redux application, though, it would receive only the relevant
// parts it needs from the state object.
const mapStateToProps = (state) => {
    return {
        count: state.count
    };
};

// The connect function is called in order to make this component aware
// of the rest of the redux architecture. Without this, this component
// is only a dumb React component. We pass in all of the functions that
// are reliant on Redux, along with the component itself, so that Redux
// makes itself known to this component.
export default connect(mapStateToProps, { increment, decrement })(Counter);
