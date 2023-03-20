import React from 'react'
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state/index';
export default function Shop() {
    const dispatch = useDispatch();
    // const actions = bindActionCreators(actionCreators,dispatch);
    const {withdrawMoney,depositMoney} = bindActionCreators(actionCreators,dispatch);

    return (
    <div>
        <h2>Deposit/Withdraw Money</h2>
      {/* <buttton className="btn btn-primary" onClick={()=>{dispatch(actionCreators.withdrawMoney(1000))}}>-</buttton> 
      Update Balance
      <buttton className="btn btn-primary"  onClick={()=>{dispatch(actionCreators.depositMoney(1000))}}>+</buttton>  */}
  
   {/* <buttton className="btn btn-primary" onClick={()=>{actions.withdrawMoney(1000)}}>-</buttton> 
      Update Balance
      <buttton className="btn btn-primary"  onClick={()=>{actions.depositMoney(1000)}}>+</buttton>  */}

<buttton className="btn btn-primary" onClick={()=>{withdrawMoney(1000)}}>-</buttton> 
      Update Balance
      <buttton className="btn btn-primary"  onClick={()=>{depositMoney(1000)}}>+</buttton> 
    </div>
  )
}
