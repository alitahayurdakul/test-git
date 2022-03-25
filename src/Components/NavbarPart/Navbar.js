import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import "./Navbar.scss"
import NavbarParts from './NavbarParts';
import { setCurrencyList, setBTC } from '../../redux/actions/currencyActions';
function Navbar(props) {
    const [price, setPrice] = useState([]);
    const [btc, setBTC] = useState([]);

    useEffect(() => {
        getDatas();

    }, []);

    useEffect(() => {
        setTimeout(() => {
            getDatas();
        }, 100000
        )
    }, [price]);

    const getDatas = async () => {
        //await all
        await Promise.all([
            axios.get("https://finans.truncgil.com/v4/today.json")
                .then(async(res) => {
                    setPrice(res.data)
                   await props.setCurrencyList(res.data)
                }),
            axios.get("https://data.messari.io/api/v1/assets/btc/metrics")
                .then(async(res) => {
                    setBTC(res.data.data.market_data)
                  await  props.setBTC(res.data.data.market_data.price_usd)
                  console.log(res)
                })
                .catch(err => console.log(err))
        ])
    //    const {data} = await axios.get("https://data.messari.io/api/v1/assets/btc/metrics")
    //    setBTC(data.data.market_data)
    //     await props.setBTC(data.data.market_data.price_usd)
    }

    return (
        <div className='navbar'>
            { 
                 price.length !== 0 ? <> 
                     <NavbarParts name="USD" Buying={price.USD.Buying} Selling={price.USD.Selling} Change={price.USD.Change} />
                    {/* <NavbarParts name="EURO" Buying={price.EUR.Buying} Selling={price.EUR.Selling} Change={price.EUR.Change} />
                    <NavbarParts name="RUBLE" Buying={price.RUB.Buying} Selling={price.RUB.Selling} Change={price.RUB.Change} />
                    <NavbarParts name={price.GRA.name} Buying={price.GRA.Buying} Selling={price.GRA.Selling} Change={price.GRA.Change} />
                    <NavbarParts name={price.CUM.name} Buying={price.CUM.Buying} Selling={price.CUM.Selling} Change={price.CUM.Change} />
                    <NavbarParts name={price.ONS.name} Buying={price.ONS.Buying} Selling={price.ONS.Selling} Change={price.ONS.Change} />
                    <NavbarParts name={price.GUM.name} Buying={price.GUM.Buying} Selling={price.GUM.Selling} Change={price.GUM.Change} />  */}
                    <div>
                        <p data-testid="btc">
                            BTC/USD
                        </p>
                        <p data-testid="btc-price">
                            Fiyat:{parseInt(btc.price_usd).toFixed(2)}
                        </p>
                        <p data-testid="btc-change" style={parseFloat(btc.percent_change_usd_last_24_hours) > 0 ? { color: "green" } : { color: "red" }}>
                            Değişim:%{parseFloat(btc.percent_change_usd_last_24_hours).toFixed(2)}
                        </p>
                    </div>
                 </> : <p>Loading</p> 
     } 
        </div>
    )
}

const mapDispatchToProps = dispatch => (
    (
        bindActionCreators({
            setCurrencyList,
            setBTC
        },dispatch)
    )
)

export default connect(null,mapDispatchToProps)(Navbar);