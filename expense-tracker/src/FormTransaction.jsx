import React, { useState,useContext } from 'react'
import './TransactionInput.css'
import {GlobalContext} from './context/GlobalContext'
const FormTransaction = () => {

  

  const [desc,setDesc] = useState("")
  const [amount, setAmount] = useState()

  const {addTransactions} = useContext(GlobalContext)

  const onSubmit = (e) =>{
    e.preventDefault()

    const newTransaction = {
      id: Math.floor(Math.random() * 10000000),
      desc,
      amount: +amount
    }

    addTransactions(newTransaction)
    setDesc('')
    setAmount('')
  }

    return (
      <>
        <div className="mainFormCOnt">
          <form onSubmit={onSubmit}>
            <div className="textInput">
              <label htmlFor="" className="ml-1">
                Description:
              </label>{" "}
              <br />
              <input type="text" value={desc} onChange={(e) => setDesc(e.target.value)} placeholder="Enter Text..." />
            </div>{" "}
            <br />
            <div className="amountInput">
              <label htmlFor="">
                Amount <br />{" "}
                <span>
                  <small style={{ color: "#283747", fontWeight: "500" }}>
                    (negative-expense, positive-income)
                  </small>
                </span>
              </label>
              <input type="text" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter Amount..." />
            </div> <br/>
           <div className="btnAdd">
           <button>
              <span className="material-icons">add</span>
            </button>
           </div>
          </form>
        </div>
      </>
    );
}

export default FormTransaction
