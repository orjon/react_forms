import React, {Component} from 'react';
// import CardList from './CardList';
import CardForm from './CardForm';
import './App.scss';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      list:[
        {item: 'Oat Milk', qnty:2},
        {item: 'Soap', qnty:1},
        {item: 'Nappies', qnty:50},
        {item: 'Avocados', qnty:3},
        {item: 'Apples', qnty:6},
        {item: 'Bananas', qnty:5},
        {item: 'Sparkling Water', qnty:5},
        {item: 'Aubergine', qnty:1}
      ]
    };
    this.addItem = this.addItem.bind(this);
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

  addItem(item) {
    this.setState(state => ({
      list: [...this.state.list, item]
    }))
  }
  render(){
  let devMode=0;
  return (
    <div className={`App ${devMode && 'devMode'}`}>
      <div className={`Header ${devMode && 'devMode'}`}>
        <h1>React Forms</h1>
      </div>
      <div className={`Main ${devMode && 'devMode'}`}>
        <div className={`Card ${this.props.devMode && 'devMode'}`}>
          <h3>Shopping List</h3>
          <h4>Item : Quantity</h4>
        {this.renderList()}
        </div>
        {/* <CardList
          devMode={devMode}
          cardHeader='Shopping List'
          cardSubHeader='Items'
          list={this.state.list}/> */}
        <CardForm 
          devMode={devMode}
          cardHeader='New Item'
          cardSubHeader='Enter details'
          addItem={this.addItem}/>
      </div>

    </div>
  );
  }
}

export default App;
