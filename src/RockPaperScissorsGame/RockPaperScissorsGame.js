import React, { Component } from 'react'
import "./GameRPS.css";
import  Player  from "./Player";
import  Computer  from "./Computer";
import  Result  from "./Result";
import { connect } from "react-redux";

 class RockPaperScissorsGame extends Component {
    render() {
        return (
            <div className="gameRPS">
                <div className="row text-center mt-5">
                    <div className="col-4">
                        <Player/>

                    </div>
                    <div className="col-4">
                        <Result/>
                        <button 
                        onClick={()=>{
                            this.props.playGame()
                        }}
                        className="btn btn-success p-2 display-4 mt-3 result">Play Game</button>

                    </div>
                    <div className="col-4">
                        <Computer/>

                    </div>

                </div>
                
            </div>
        )
    }
}
const mapDispatchToProps= (dispatch) =>{
    return{
        playGame: () =>{
            let count =10
            let randomComputerItem = setInterval(() => {    
            }, 100);
            let action = {
                type: 'RANDOM'
            }
            dispatch(action)
            console.log(action);
            count++;
            if(count>=10){
                clearInterval(randomComputerItem)
            dispatch({
                type:'END_GAME'
            })
            }
        }
    }
}
export default connect(null,mapDispatchToProps)(RockPaperScissorsGame)