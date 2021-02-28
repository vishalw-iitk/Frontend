import React, {useEffect, useState} from 'react'
import './App.css';
import CurrencyRow from './CurrencyRow';

const BASE_URL = 'https://api.exchangeratesapi.io/latest'

function App() {
  const [CurrencyOptions, setCurrencyOptions] = useState([])
  const [fromCurrency, setfromCurrency] = useState()
  const [toCurrency, settoCurrency] = useState()
  const [exchangerate, setExchangerate] = useState()
  const [amount, setAmount] = useState(1)
  const [amountfromInCurrency, setfromInCurrency] = useState(true)
  
  let fromAmount, toAmount
  if(amountfromInCurrency){
    fromAmount = amount
    toAmount = amount * exchangerate
  }
  else{
    toAmount = amount
    fromAmount = amount / exchangerate
  }

  // useEffect(function setAmount(){
  //   if(fromAmount != null && toAmount != null){
      
  //   })

  // console.log(CurrencyOptions)


  useEffect(() => {
    fetch(BASE_URL)
    .then(res => res.json())
    .then(data => {
      const firstCurrency = [...Object.keys(data.rates)][0]
      setCurrencyOptions([data.base, ...Object.keys(data.rates)])
      setfromCurrency(data.base)
      settoCurrency(firstCurrency)
      setExchangerate(data.rates[firstCurrency])
    })
  }, [])

  function handlefromAmount(e){
    setAmount(e.target.value)
    setfromInCurrency(true)
  }

  function handletoAmount(e){
    setAmount(e.target.value)
    setfromInCurrency(false)
  }

  useEffect(() => {
    if(fromCurrency != null && toCurrency != null){
      fetch(`${BASE_URL}?base=${fromCurrency}&symbols=${toCurrency}`)
      .then(res => res.json())
      .then(data => setExchangerate(data.rates[toCurrency]))
    }
  }, [fromCurrency, toCurrency])

  return (
    <>
   <h1>Currency Converter</h1>
   <CurrencyRow 
   CurrencyOptions={CurrencyOptions}
   selectedCurrency={fromCurrency}
   onchangeCurrency={e => setfromCurrency(e.target.value)}
   amount={fromAmount}
   onchangeAmount={handlefromAmount}
   />
   <div className="equal">=</div>
   <CurrencyRow 
   CurrencyOptions={CurrencyOptions}
   selectedCurrency={toCurrency}
   onchangeCurrency={e => settoCurrency(e.target.value)}
   amount={toAmount}
   onchangeAmount={handletoAmount}
   />
   <br></br>
   <br></br>
   <h3>- Vishal Waghmare</h3>
    </>
  );
}

export default App;
