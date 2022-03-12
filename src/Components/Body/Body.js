import React, { useState } from 'react'
import { connect } from 'react-redux';
import './Body.scss'
function Body(props) {
    const [currencytype, setCurrencyType] = useState("");
    const [trValue, setTrValue] = useState("");
    const [currencyValue, setCurrencyValue] = useState("");

    const onChangeCurrentType = async (e) => {
        setCurrencyType(e.target.value)
    }

    const onChangeCurrencyValue = async (e) => {
        setCurrencyValue(e.target.value)
    }

    const onClickConvert = async () => {
        if (currencytype !== "BTC") {
            setTrValue(props.currencylist[currencytype].Selling * currencyValue)
        }
        else {
            setTrValue(props.btc * props.currencylist.USD.Selling * currencyValue)
        }
    }

    return (
        <div className='body'>
            <div className='bodypart'>
                <div>
                    <label htmlFor="currency">Dönüştürülen Para Birimi:</label>
                    <select data-testid="selectpart" name="currency" id="currency" value={currencytype} onChange={onChangeCurrentType}>
                        <option value="">Seçiniz</option>
                        <option data-testid="selectUSD" value="USD">USD</option>
                        <option value="EUR">EURO</option>
                        <option value="RUB">RUBLE</option>
                        <option value="GRA">GRAM ALTIN</option>
                        <option value="ONS">ONS</option>
                        <option value="BTC">BTC</option>
                    </select>
                </div>
                <div>
                    <label data-testid="turning" htmlFor="currency2">Dönüştürülecek Para Birimi:TRY</label>

                    <select name="currency2" id="currency2" >
                        <option value="TRY">TRY</option>
                    </select>
                </div>
            </div>

            <div className='bodypart'>
                <div>
                    <input type="number" data-testid="inputpart" step="0.1" placeholder='Para miktarını giriniz' value={currencyValue} onChange={onChangeCurrencyValue} />
                </div>

                <div style={{ paddingTop: "8px" }}>
                    <label>
                        {parseFloat(trValue).toFixed(2)} TRY
                    </label>
                </div>
            </div>

            <div className='btn'>
                {
                    !currencytype || !currencyValue ? <button data-testid="btn-div" disabled>Kullanılamaz</button> :
                        <button data-testid="btn-div-2"  onClick={onClickConvert}>Dönüştür</button>
                }

            </div>
        </div>
    )
}
const mapStateToProps = state => {
    return {
        currencylist: state.currencyListReducer.currencyList,
        btc: state.currencyListReducer.btc
    }
}
export default connect(mapStateToProps)(Body);