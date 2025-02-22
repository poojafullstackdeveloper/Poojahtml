import React from "react";
import "./CoinCard.css";

export default class CoinCard extends React.Component {
    render() {
        return (
            <div className="CoinCard"  
                 onClick={() => {
                    this.props.onCoinClick(this.props.coinText);
                    this.props.incrementCounter(this.props.coinText);
                }}>
                <img className="coin-img" src={this.props.coinImg} alt={this.props.coinText} />
                <div className="coin-info">
                    <text className="coin-text">{this.props.coinText}</text>
                    {this.props.coinCounter ? (
                        <text className="coin-badge">Count: {this.props.coinCounter}</text>
                    ) : null}
                </div>
            </div>
        );
    }
}
