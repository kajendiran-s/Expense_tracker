import React,{useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';

export const Transaction = ({transaction1}) => {

  const {deleteTransaction} = useContext(GlobalContext)
    const sign = transaction1.amount<0?'-':'+';
  return (
    <li className={transaction1.amount<0?"minus":"plus"}>
        {transaction1.text} <span>{sign}${Math.abs(transaction1.amount)}</span>
        <button onClick={()=>deleteTransaction(transaction1.id)} className='delete-btn'>X</button>
    </li>
  )
}
