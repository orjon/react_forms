import React, { Component } from 'react';
import './App.scss';

class CardList extends Component {
  static defaultProps = {
    devMode: ''
  }
  constructor(props){
    super(props);
    this.state={
      list:[
        {name: 'Oat Milk', qnty:2},
        {name: 'Soap', qnty:1},
        {name: 'Nappies', qnty:50},
        {name: 'Avocados', qnty:3},
        {name: 'Apples', qnty:6},
        {name: 'Bananas', qnty:5},
        {name: 'Sparkling Water', qnty:5},
        {name: 'Aubergine', qnty:1}
      ]
    }
  }

  renderItems(){
    return (
      <ul>
        {this.state.list.map(item => (
          <li key={this.state.list.indexOf(item)}>
            {item.name} : {item.qnty}
          </li>
        ))}
      </ul>
    )
  }

  render(){
    return(
      <div className={`Card ${this.props.devMode && 'devMode'}`}>
        <h3>{this.props.cardHeader}</h3>
        <h4>{this.props.cardSubHeader}</h4>
       {this.renderItems()}

      </div>
    )
  }
}

export default CardList;
