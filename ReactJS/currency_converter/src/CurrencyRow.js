import React from 'react'


export default function CurrencyRow(props) {
    const {
        CurrencyOptions,
        selectedCurrency,
        onchangeCurrency,
        amount,
        onchangeAmount
    } = props
    // console.log(CurrencyOptions)
    return (
        <div>
            <input type="number" value={amount} className="input" onChange={onchangeAmount}/>
            <select value={selectedCurrency} onChange={onchangeCurrency}>
                {CurrencyOptions.map(option => (
                    <option key={option} value={option}>{option}</option>
                ))}
            </select>
        </div>
    )
}
