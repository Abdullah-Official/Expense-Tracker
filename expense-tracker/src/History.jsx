import React from 'react'
import './History.css'
import TransactionItems from './TransactionItems'
const History = () => {
    return <>
    <div className="historyCont">
        <div className="headerHist">
            <p>History</p>
        </div>
        <TransactionItems />
    </div>
    </>;
}

export default History
