import React, { Component } from 'react';
import './App.scss';

class CardList extends Component {
  static defaultProps = {
    devMode: '',
    list:[]
  }
  constructor(props){
    super(props);
    this.state={
      
    }
  }

  renderItems(){
    return (
      <ul>
        {this.props.list.map(item => (
          <li>
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
