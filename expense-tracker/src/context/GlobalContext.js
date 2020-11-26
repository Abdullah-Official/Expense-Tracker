 import React, {createContext, useReducer} from 'react';
import AppReducer from './AppReducer'
  //Initial State
  const initialState = {
      transactions: [
        {
            id: 1,
            desc: 'Bank',
            amount: 200
        },
        {
            id: 2,
            desc: 'Food',
            amount: -150
        },
        {
            id: 3,
            desc: 'Cold Drink',
            amount: 300
        },
        {
            id: 4,
            desc: 'Medicines',
            amount: -40
        },
      ]
  }

  //Create Context
  export const GlobalContext = createContext(initialState);

  // Provider Component

  export const GlobalProvider = ({children}) =>{
    const [state,dispatch] = useReducer(AppReducer, initialState)
    

    // Actions 

   const deleteTransactions = (id) =>{
        dispatch({
            type: 'DELETE_TRANSACTIONS',
            payload: id
        })
    }

    const addTransactions = (transaction) =>{
        dispatch({
            type: 'ADD_TRANSACTIONS',
            payload: transaction
        })
    }

    return (
        <GlobalContext.Provider value={{
            transactions: state.transactions,
            deleteTransactions,
            addTransactions

        }}>
            {children}
        </GlobalContext.Provider>
    )
  }