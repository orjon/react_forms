import React, { Component } from 'react';
import './App.scss';

class CardList extends Component {
  static defaultProps = {
    devMode: ''
  }
  constructor(props){
    super(props);
    this.state={
      list:[...this.props.list]
    }
  }

  renderList(){
    return (
      <ul>
        {this.state.list.map(item => (
          <li key={this.state.list.indexOf(item)}>
            {item.item} : {item.qnty}
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
       {this.renderList()}
      </div>
    )
  }
}

export default CardList;
