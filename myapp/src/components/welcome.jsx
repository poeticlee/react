/* eslint-disable no-unused-vars */


import React,{ Component } from "react";


class Welcome extends Component{

    constructor(){
        super()
        this.state={
            name : 0
        }
    }
    changeAm(){
        this.setState({
          name: this.state.name + 2 
        })
    }
    lowAm(){
        this.setState({
          name: this.state.name-1
        })
    }
    rowAm(){
        this.setState({
          name: this.state.name*2 
        })
    }

    render(props){
       
      // eslint-disable-next-line react/prop-types
      return  <div> <h1>Hello Boy skeske letsanyabthen {this.props.mango}</h1>
             <h2> My name is {this.state.name}</h2>
             <button onClick={()=>this.changeAm()}> increase</button>
             <button onClick={()=>this.lowAm()}> decrease</button>
             <button onClick={()=>this.rowAm()}> multiply by 2</button>
      </div>
    }
}

export default Welcome