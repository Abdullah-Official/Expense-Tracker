import React, { useContext } from 'react'
import './Balance.css'
import {GlobalContext} from './context/GlobalContext'
const Balance = () => {

    const {transactions} = useContext(GlobalContext)

    const amounts = transactions.map(transactions => transactions.amount)
    console.log(amounts)

    const total = amounts.reduce((acc,item) => (acc+=item),0).toFixed(2)
    console.log(total)

    return (
      <>
        <div className="balance">
          <span>Balance</span>
          <h3>${total}</h3>
        </div>
      </>
    );
}

export default Balance

