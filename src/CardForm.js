import React, { Component } from 'react';
import './App.scss';

class CardForm extends Component {

  constructor(props){
    super(props);
    this.state={
      item: '',
      qnty: ''
    };
    this.handleInput = this.handleInput.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleReset = this.handleReset.bind(this)
  }

  handleInput(e){
    this.setState({
      [e.target.name] : e.target.value
    });
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.addItem(this.state);
    this.setState({item:'', qnty:''})
  }

  handleReset(e){
    this.setState({item:'', qnty:''})
  }

  render(){
    return(
      <div className={`Card ${this.props.devMode && 'devMode'}`}>
        <h3>{this.props.cardHeader}</h3>
        <h4>{this.props.cardSubHeader}</h4>
        <form
          id='form-slice'
          className='Form width50'
          onSubmit={this.handleSubmit}>

          <div className={`form-row ${this.props.devMode && 'devMode'}`}>
            <label htmlFor='sliceIndexA'>Item </label>
            <input
              type='text'
              id='item'
              name='item'
              value={this.state.item}
              onChange={this.handleInput}>
            </input>
          </div>

          <div className='form-row'>
            <label htmlFor='sliceIndexB'>Quantity </label>
            <input
              type='text'
              id='sliceIndexB'
              name='qnty'
              value={this.state.qnty}
              onChange={this.handleInput}>
            </input>
          </div>

          <div className='form-row last'>
              <button className='reset' type='reset' onClick={this.handleReset} id='button-sliceReset'>Reset</button>
              <button className='submit' id='button-slice'>Add item</button>
          </div>
        </form>
      </div>
    )
  }
}

export default CardForm;
