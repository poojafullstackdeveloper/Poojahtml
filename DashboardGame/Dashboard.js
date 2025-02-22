import React from "react";
import "./Dashboard.css"
import OnePannel from "./OnePanel";


export default class DashboardGame extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            total:0
        };
    }
    onCoinClick =(coin)=>{
        if(coin=="One"){
        this.setState({total:(this.state.total+=1)})
       }else if(coin=="Two"){
        this.setState({total:(this.state.total+=2)})
       }
       else if(coin=="Five"){
        this.setState({total:(this.state.total+=5)})
       }
       else if(coin=="Ten"){
        this.setState({total:(this.state.total+=10)})
       }
       else {
        this.setState({total:(this.state.total+=20)})
       }


    }
    

    render(){
        return(
            // Dashboard
            <div className="dashboard">
                <h1 style={{fontSize:"40px",color:"white"}} >Coin Game</h1>
                {/* counter */}
                <div className="counter">{this.state.total}</div>
                {/* pannel */}
            <OnePannel onCoinClick={this.onCoinClick}/>
                
            </div>
        )

    };
  


    

}