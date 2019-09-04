import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import CategorySelector from './CategorySelector'
import {transactions} from '../transactionsData'

class AccountContainer extends Component {
  constructor() {
    super()
    this.state = {
      transactions: [], 
      displayTransactions: [], 
    };
  }

  componentDidMount() {
    fetch('https://boiling-brook-94902.herokuapp.com/transactions')
      .then(responseObj => responseObj.json())
      .then(data => { console.log(data)
          this.setState({
            transactions: data,
            displayTransactions: data,
          })
      })
  }

  filterTransactions = (category) => {
    let arr = this.state.displayTransactions.filter(transaction => transaction.category === category)
      if (category !=="All"){
        this.setState({
          displayTransactions:arr
        })
      }else{
        this.setState({
          displayTransactions:this.state.transactions
        })
      }
    console.log(category)
  }

  render() {
    console.log(transactions)
    return (
      <div className="ui grid container">

        <CategorySelector filterTransactions={this.filterTransactions}/>

        <TransactionsList displayTransactions={this.state.displayTransactions}/>

      </div>
    )
  }
}

export default AccountContainer
