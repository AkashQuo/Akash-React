import React from "react";
import { Formik } from 'formik';


  class Counter extends React.Component{
    increment=()=>{
        this.setState({
        count:this.state.count+1
    });
    };
    decrement =()=>{
        this.setState({
        count:this.state.count-1
    });
    };
    render(){
        return(
            <Formik>
                <Form>
                <button onClick={this.decrement}>&ndash;</button>
                <span className="count">{this.state.count}</span>
                <button onClick={this.increment}>+</button>
                </Form>
            </Formik>
        );
    }
}