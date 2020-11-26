import React from 'react'
import Balance from './Balance'
import './ExpenseTracker.css'
import History from './History'
import IncomeExpense from './IncomeExpense'
import TransactionInput from './TransactionInput'
const ExpenseTracker = () => {
    return (
        <>
        <div className="mainContainer">
            <h4>Expense Tracker</h4>
            <Balance/>
            <IncomeExpense />
            <History/>
            <TransactionInput />
        </div>
        </>
    )
}

export default ExpenseTracker
