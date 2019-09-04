import React from 'react'

const Transaction = (props) => {
  return (
    <tr>
      
      <td>{props.posted_at}</td>
      <td>{props.description}</td>
      <td>{props.category}</td>
      <td>{props.amount}</td>
      {/* <td>{props.description}</td> */}
      {/* <td>{props.posted_at}</td> */}
      {/* <td>{"...your code here"}</td> */}
    </tr>
  )
}

export default Transaction
