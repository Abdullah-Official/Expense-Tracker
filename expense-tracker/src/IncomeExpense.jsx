import React, {useContext} from 'react'
import './IncomeExpense.css'
import {GlobalContext} from './context/GlobalContext'
const IncomeExpense = () => {
  const {transactions} = useContext(GlobalContext)
  const amounts = transactions.map(transactions => transactions.amount)

  const income = amounts.filter(item => item > 0).reduce((acc,item) => acc+=item , 0).toFixed(2)
  const expense = (amounts.filter(item => item<0).reduce((acc,item) => acc+=item,0)* -1).toFixed(2)

    return (
      <>
        <div className="container-fluid incomeCont">
          <div className="row">
            <div className="col-md-6 col-sm-6 col-6">
              <div className="income">
                <div className="inner">
                  <h4>Income</h4>
                  <p>{income}</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-6 col-6">
              <div className="expense">
                <div className="inner">
                  <h4>EXPENSE</h4>
                  <p>{expense}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}

export default IncomeExpense
