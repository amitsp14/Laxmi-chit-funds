import React from 'react'
import double  from './25d.png'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import {actionCreators} from './state/index'

const Shope = () => {

    const dispatch = useDispatch();

    const {withdrawMoney, depositMoney} = bindActionCreators(actionCreators,dispatch )

    return (


        <div style = {{marginLeft : '500px'}}>

            <div class="card" style={{width: '25rem'}}>
                <img src={double}  class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">Double Money Card</h5>
                    <p class="card-text">25 Din Me Paisa Double </p>

                    <div className="text-center">
                    <button className="btn btn-primary mx-4" onClick={()=>{withdrawMoney(100)}}> Withdraw</button>
                      Funds
                    <button className="btn btn-primary  mx-4" onClick={()=>{depositMoney(100)}}> Deposit </button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Shope