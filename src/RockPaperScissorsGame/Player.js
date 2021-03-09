import React, { Component } from 'react'
import { connect } from "react-redux";

class Player extends Component {
    render() {
        
        return (
            <div className="text-center playerGame">
                <div className="thinking">
                    <img src={this.props.arrBet.find(item=>item.bet===true).photo} style={{width:40, transform:'rotate(180deg)'}} className="mt-1"></img>
                </div>
                <div className="speech-bubble"></div>
                <img src="./image/player.png" alt="photo"
                style={{width:250,height:250}}></img>
                <div className="row">
                    {this.props.arrBet.map((item,index)=>{

                        let border = {};
                        if(item.bet){
                            border = {border:'3px solid red'}
                        }
                        return <div className="col-4 ">
                        <button
                        onClick={()=>{this.props.bet(item.ma)}}
                        style={border} className="btnItem">
                        <img src={item.photo} style={{width:50}}></img>
                        </button>

                    </div>
                    })}
                    
                    
                </div>
            </div>

        )
    }
}

const mapStateToProps = state=>{
    return {arrBet: state.GameReducer.arrBet}

}
const mapDispatchtoProps = dispatch=>{
    return{
        bet: (maBet)=>{
            dispatch({
                type:'CHOOSING',
                maBet

            })
        }
    }
}
export default connect(mapStateToProps,mapDispatchtoProps)(Player)