import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import CategorySelector from './CategorySelector'
import {transactions} from '../transactionsData'
import categories from '../categories'

class AccountContainer extends Component {
  state={
    transactions:[],
    displayTransactions:[]
  }

  componentDidMount(){
    fetch('https://boiling-brook-94902.herokuapp.com/transactions')
    .then(res=>res.json())
    .then(transactions=>{
      console.log(transactions)
      this.setState({
        transactions: transactions,
        displayTransactions: transactions
      })
    })
  }

  handleChange=(e)=> {
    e.preventDefault()
    //Trying to sort By categories
  let categories= {
    All:e.target[0].All,
    Entertainment: e.target[1].value,
    Income:e.target[2].Income,
    Food: e.target[3].Food,
    Fashion: e.target[4].Fashion,
    Gift:e.target[5].Gift,
    ATM:e.target[6].ATM,
    Transportation: e.target[7].Transportation,
    Housing:e.target[8].Housing,
    Misery:e.target[9].Misery
    
  }
  let filter= this.state.displayTransactions.filter(transaction=> transaction.categories.includes(categories))
  

   this.setState({
     displayTransactions: filter

   })
  
  }


  render() {
    
    return (
      <div className="ui grid container">

        <CategorySelector  handleChange={this.handleChange} />

        <TransactionsList transactions={this.state.displayTransactions}/>

      </div>
    )
  }
}

export default AccountContainer
