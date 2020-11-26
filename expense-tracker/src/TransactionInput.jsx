import React from 'react'
import FormTransaction from './FormTransaction'
import './TransactionInput.css'

const TransactionInput = () => {
    return (
        <>
            <div className="InputContainer">
                <div className="HeadingInput">
                    <p>Add new transaction</p>
                </div>
                <FormTransaction />
            </div>
        </>
    )
}

export default TransactionInput
