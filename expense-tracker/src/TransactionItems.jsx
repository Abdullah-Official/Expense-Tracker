import React, { useContext } from 'react'
import './History.css'
import {GlobalContext} from './context/GlobalContext'

const TransactionItems = () => {

    const {transactions,deleteTransactions} = useContext(GlobalContext)

    return (
        <>
            <div className="transactions__container">
               {
                   transactions.map((v,i) =>{
                       return (
                         <div
                           key={v.id}
                           className={`lists__trans ${
                             v.amount > 0
                               ? "borderColor-green "
                               : "borderColor-red "
                           } mt-2`}
                         >  
                         <span class="material-icons trashIcon" onClick={() => deleteTransactions(v.id)} >delete_outline</span>
                           <p className="desc text-center"> {v.desc} </p>
                           
                           <p className="amount">
                           
                             {v.amount < 0 ?("-") : ("+")} ${Math.abs(v.amount)}
                           </p>
                         </div>
                       );
                   })
               }
            </div>
        </>
    )
}

export default TransactionItems
