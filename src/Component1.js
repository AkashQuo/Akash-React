import React from "react";

class Component1 extends React.Component {
  
  render() {
    return (<h2>DATA<br/> {this.props.match.params.id}</h2>)
    //const { params } = this.props.match
    // return (
    //   <div>
    //     <p>{params.id}</p>
    //   </div>
    // )
  }
}
export default Component1