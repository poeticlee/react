import { Component }  from "react"

class Message extends Component{
    constructor(){
        super()
        this.state={
            message:"Welcome Visitor",
            address:"no 22",
            email:"webster@wisdom"
        }
    }
    changeMessage(){
        this.setState({
            message:"thanks for subscibing",
            address: "shakabulala",
            email:"ressrsr@happy    "
        })
    }
    render(){
        return <div>
            <h1>{this.state.message}</h1>
            <h1>{this.state.address}</h1>
            <h1>{this.state.email}</h1>
            <button onClick={()=>this.changeMessage()}>Subscribe</button>

</div>
    }
}

export default Message