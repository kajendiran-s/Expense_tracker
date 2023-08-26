import { useContext } from 'react'
import React from 'react'
import { GlobalContext } from '../context/GlobalState'
import { Transaction } from './Transaction'

function TransactionList()
{
  const {transactions} = useContext(GlobalContext);
  
  return (
    <>
        <h3>History</h3>
        <ul className="list">
             {transactions.map(
              transaction=>
             (
              <Transaction key={transaction.id} transaction1={transaction}/>
             )
            )
            } 
            {/* <li className='minus'>
              Cash<span>-400</span> <button className='delete-btn'>X</button>
            </li> */}
        </ul>
    </>
  )
}


export default TransactionList