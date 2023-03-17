import React, { Component } from 'react'

import loader from '../spinner.gif'
 
export default class Loader extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src={loader} alt="loading" style={{width: '87px'}}/>
      </div>
    )
  }
}
