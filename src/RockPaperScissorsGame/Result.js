import React, { Component } from 'react'
import { connect } from "react-redux";
 class Result extends Component {
    render() {
        return (
            <div>
                <div className="display-4 text-warning">{this.props.result}</div>
                <div className="display-4 text-success">Winning Rounds:<span className="text-warning">{this.props.winRounds}</span></div>
                <div className="display-4 text-success">Loosing Rounds:<span className="text-warning">{this.props.looseRounds}</span></div>
                <div className="display-4 text-success"> Rounds:<span className="text-warning">{this.props.rounds}</span></div>
            
            </div>
        )
    }
}
const mapStateToProps = state=> {
return{
    result: state.GameReducer.result,
    winRounds: state.GameReducer.winRounds,
    looseRounds: state.GameReducer.looseRounds,
    rounds: state.GameReducer.rounds
    
}
}
export default connect(mapStateToProps)(Result)