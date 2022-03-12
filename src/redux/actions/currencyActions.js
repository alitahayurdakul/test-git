import * as actionTypes from './actionTypes'

export const setCurrencyList = list => ({
    type:actionTypes.SET_CURRENCY_LIST,
    payload:list
})

export const setBTC = list => ({
    type:actionTypes.SET_BTC,
    payload:list
})