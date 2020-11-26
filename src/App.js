import React from "react"; 

import { combineReducers, createStore } from 'redux'

import defaultState, {firstNamedReducer,secondNamedReducer as secondState} from './reducer'

class Car extends React.Component {
  
  render() {
    const numbers = [1, 2, 3, 4, 5];
    const doubled=numbers.map((number) => (number * 2) +" ");
    return <h2>I am a {this.props.brand}! {doubled}</h2>;
  }
}

class Garage extends React.Component {
  
  constructor(){ 
    super(); 
    this.state = { sayings: ""}; 
    } 
   update(e){ 
    this.setState({ sayings: this.a.value});
    //this.setState({ sayings: e.tagert.value});
   } 
  render() {
    const brand="AXE";
      return (
      <div>
      <h1>Who lives in my garage?</h1>
      <Car brand={brand} />
      <div> 
        <input type="text" ref={(call_back)=>{this.a = call_back}} onChange={this.update.bind(this)}/> 
      <br/> 
      <em>{this.state.sayings}</em> 
      </div> 
      </div>
      
    );
  }
}
const rootReducer = combineReducers({
  defaultState, // key name same as the carefully renamed default export
  firstState: firstNamedReducer, // specific key name instead of the variable name
  secondState // key name same as the carefully renamed named export
})


export default function App() {
  const reducerInitializedStore = createStore(rootReducer)
  return (
    <div className="App">
      <h1>heyo</h1>
      <h2>reducerInitializedStore.getState()</h2>
      <Garage/>
    </div>
  );
}

