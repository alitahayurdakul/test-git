import * as actionTypes from '../actions/actionTypes';

const initialState = {
    currencyList: [],
    btc: "",
}

const currencyListReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_CURRENCY_LIST: {
            return {
                ...state,
                currencyList:action.payload
            }
        }
        case actionTypes.SET_BTC: {
            return{
                ...state,
                btc:action.payload
            }
        }
        default:
            return state;
    }
}

export default currencyListReducer;