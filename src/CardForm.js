import React, { Component } from 'react';
import './App.scss';

class CardForm extends Component {
  static defaultProps = {
    // devMode: ''
  }
  constructor(props){
    super(props);
    this.state={
      
    }
    this.handleInput = this.handleInput.bind(this)
  }

  handleInput(e){

  }

  render(){
    return(
      <div className={`Card ${this.props.devMode && 'devMode'}`}>
        <h3>{this.props.cardHeader}</h3>
        <h4>{this.props.cardSubHeader}</h4>
        <form id='form-slice' className='Form width50'>
   
          {/* <div className='form-row'>
            <label htmlFor='array'>array</label>
            <input type='text' placeholder='value1,value2,value3...' id='array'></input>
          </div> */}

          <div className={`form-row ${this.props.devMode && 'devMode'}`}>
            <label htmlFor='sliceIndexA'>Item </label>
            <input type='text' id='sliceIndexA' onChange={this.handleInput}></input>
          </div>

          <div className='form-row'>
            <label htmlFor='sliceIndexB'>Quantity </label>
            <input type='text' id='sliceIndexB'></input>
          </div>

          <div className='form-row last'>
              <button className='reset' type='reset' id='button-sliceReset'>Reset</button>
              <button className='submit' id='button-slice'>Add item</button>
          </div>
        </form>
      </div>
    )
  }
}

export default CardForm;
