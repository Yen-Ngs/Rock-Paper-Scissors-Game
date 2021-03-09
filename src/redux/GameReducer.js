const stateDefault = {
    arrBet: [
        { ma: 'keo', photo: './image/keo.png', bet: true },
        { ma: 'bua', photo: './image/bua.png', bet: false },
        { ma: 'bao', photo: './image/bao.png', bet: false },
    ],
    result: 'You won!!!',
    winRounds: 0,
    looseRounds: 0,
    rounds: 0,
    computer: { ma: 'keo', photo: './image/keo.png' }
}
const GameReducer = (state = stateDefault, action) => {
    switch (action.type) {

        case "CHOOSING": {
            let arrBetUpdate = [...state.arrBet];
            arrBetUpdate = arrBetUpdate.map((item, index) => {
                if (item.ma === action.maBet) {
                    return { ...item, bet: true }
                }
                return { ...item, bet: false }
            })
            state.arrBet = arrBetUpdate;
            return { ...state }

        }
        case 'RANDOM': {
            let randomNum = Math.floor(Math.random() * 3);
            let randomMaBet = state.arrBet[randomNum];
            state.computer = randomMaBet;
            console.log('random', action);
            return { ...state }
        }
        case 'END_GAME': {
            let arrBetUpdate = [...state.arrBet];
            let player = arrBetUpdate[arrBetUpdate.findIndex(item => item.bet === true)].ma;
            let computer = state.computer.ma;
            if (player === computer) {
                return { ...state, rounds: state.rounds + 1, result: 'Tie!' }

            }

            switch (player) {
                case 'keo': {
                    if (computer === 'bua') {
                        return { ...state, rounds: state.rounds + 1, looseRounds: state.looseRounds + 1, result: 'Computer won!' }

                    }
                    return { ...state, rounds: state.rounds + 1, winRounds: state.winRounds + 1, result: 'You won!' }
                }
                case 'bua': {
                    if (computer === 'bao') {
                        return { ...state, 
                            rounds: state.rounds + 1, 
                            looseRounds: state.looseRounds + 1, 
                            result: 'Computer won!' }

                    }
                    return { ...state, 
                        rounds: state.rounds + 1, 
                        winRounds: state.winRounds + 1, 
                        result: 'You won!' }


                }
                case 'bao': {
                    if (computer === 'keo') {
                        return { ...state, 
                            rounds: state.rounds + 1, 
                            looseRounds: state.looseRounds + 1, 
                            result: 'Computer won!' }
                    }
                    return { ...state, 
                        rounds: state.rounds + 1, 
                        winRounds: state.winRounds + 1, 
                        result: 'You won!' }
                }
                default:
                    return [...state]
            }
        }
        default: return { ...state }
    }
}
export default GameReducer;