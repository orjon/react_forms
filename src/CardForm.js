import React, { Component } from 'react';
import './App.scss';

class CardForm extends Component {
  static defaultProps = {
    devMode: ''
  }
  constructor(props){
    super(props);
    this.state={
      
    }
  }

  render(){
    return(
      <div className={`Card ${this.props.devMode && 'devMode'}`}>
        <h3>{this.props.cardHeader}</h3>
        <h4>{this.props.cardSubHeader}</h4>
        <form id='form-slice' className='Form width50'>
   
          <div className='form-row'>
            <label htmlFor='array'>array</label>
            <input type='text' placeholder='value1,value2,value3...' id='array'></input>
          </div>

          <div className='form-row'>
            <label htmlFor='sliceIndexA'>indexA</label>
            <input type='text' id='sliceIndexA'></input>
          </div>

          <div className='form-row'>
            <label htmlFor='sliceIndexB'>indexB</label>
            <input type='text' id='sliceIndexB'></input>
          </div>

          <div className='form-row'>
            <p>Resultant array:&nbsp</p>
            <div id='sliceResult'></div>
          </div>

          <div className='form-row last'>
              <button className='reset' type='reset' id='button-sliceReset'>Reset</button>
              <button className='submit' id='button-slice'>Slice</button>
          </div>
        </form>
      </div>
    )
  }
}

export default CardForm;
