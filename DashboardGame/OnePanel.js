import React from "react";
import "./OnePanel.css"
import CoinCard from "./CoinCard";
 export default class OnePannel extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            coinOneCounter:0,
            coinTwoCounter:0,
            coinFiveCounter:0,
            coinTenCounter:0,
            coinTwentyCounter:0,
           
            
        };
    }
    incrementCounter=(coin)=>{
        if(coin=="One"){
            this.setState({coinOneCounter:(this.state.coinOneCounter +1)})
           }else if(coin=="Two"){
            this.setState({coinTwoCounter:(this.state.coinTwoCounter +1)})
           }
           else if(coin=="Five"){
            this.setState({coinFiveCounter:(this.state.coinFiveCounter +1)})
           }
           else if(coin=="Ten"){
            this.setState({coinTenCounter:(this.state.coinTenCounter +1)})
           }
           else{
            this.setState({coinTwentyCounter:(this.state.coinTwentyCounter +1)})
           }


    }

    render(){
        return(
            <div className="first-pannel">
                {/* coin one */}
                <CoinCard  coinText={"One"}  className="coin-img" 
                
                coinImg="1rs.png" 
               coinCounter={this.state.coinOneCounter} 
                onCoinClick={this.props.onCoinClick}
                incrementCounter={this.incrementCounter}/>
                {/* coin two */}
                  <CoinCard  className="coin-img" coinImg="2rs.png" 
                 coinText={"Two"} 
                coinCounter={this.state.coinTwoCounter} 
                onCoinClick={this.props.onCoinClick}
                incrementCounter={this.incrementCounter}/>
                {/* {coin three} */}
                  <CoinCard  className="coin-img" coinImg="5rs.png" 
                 coinText={"Five"} 
                coinCounter={this.state.coinFiveCounter} 
                onCoinClick={this.props.onCoinClick}
                incrementCounter={this.incrementCounter}/>
            {/* coin four */}
                  <CoinCard  className="coin-img" coinImg="10rs.png" 
                 coinText={"Ten"} 
                coinCounter={this.state.coinTenCounter} 
                onCoinClick={this.props.onCoinClick}
                incrementCounter={this.incrementCounter}/>
            {/* coin five */}
                  <CoinCard  coinText={"Twenty"}    className="coin-img" coinImg="20Rs.png" 
                
                coinCounter={this.state.coinTwentyCounter} 
                onCoinClick={this.props.onCoinClick}
                incrementCounter={this.incrementCounter}/>
                
            </div>
        )

    };
 }