import React, { Component } from 'react'
import {connect} from "react-redux"
import * as actionCreator from "./store/actions/Action"
import "./App.css"
import logo from "./logo.svg"

 class App extends Component {

  render() {
    return (
      <div>
        <div>Age: <span>{this.props.age}</span></div>
        <button onClick={this.props.onAgeUP} >INCREMENT</button>
        <button onClick={this.props.onAgeDown}>DECREMENT</button><hr></hr>
       {this.props.loading && <img src={logo}></img>}
      </div>
    )
  }
}

const mapStateToProps=(state)=>{
  return{
    age:state.age,
    loading:state.loading
  
  }
};
const mapDispatchToProps=(dispatch,action)=>{
  return{
    onAgeUP:()=>dispatch(actionCreator.onAgeUP(1)),
    onAgeDown:()=>dispatch(actionCreator.onAgeDown(1)),
   
  }
};

export default connect(mapStateToProps,mapDispatchToProps)(App);

