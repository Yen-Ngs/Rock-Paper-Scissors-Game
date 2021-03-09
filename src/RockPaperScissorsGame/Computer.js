import React, { Component } from 'react'
import { connect } from "react-redux";

 class Computer extends Component {
    render() {
        return (
            <div className="text-center playerGame">
                <div className="thinking">
                    <img src={this.props.computer.photo} style={{width:40}} className="mt-1"></img>
                </div>
                <div className="speech-bubble"></div>
                <img src="./image/playerComputer.png" alt="photo"
                style={{width:250,height:270}}></img>
            </div>
        )
    }
}
const mapStateToProps = state =>{
    return{computer: state.GameReducer.computer}
    
}
export default connect(mapStateToProps)(Computer)