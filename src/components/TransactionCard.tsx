import React from 'react'
import type { Transaction } from '../types/transactions'
import './TransactionCard.css'

interface Props {
  transaction: Transaction
  onSelect?: (transaction: Transaction) => void
}

export const TransactionCard: React.FC<Props> = ({ transaction, onSelect }) => {
  const isNegative = transaction.amount < 0

  const formattedDate = new Date(transaction.date).toLocaleDateString('en-AU', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  })

  const handleClick = () => {
    onSelect?.(transaction)
  }

  const cardLabel = transaction.accountId.replace('_', ' ');

  const getTransactionDescription = (desc: string) => {
    if(desc.length > 23) {
      return desc.substring(0,23) + '...';
    } else {
      return desc
    }
  }

  return (
    <button
      className={`transaction-card ${isNegative ? 'negative' : 'positive'}`}
      onClick={handleClick}
    >
      <div className="transaction-header">
        <span className="account">{cardLabel.charAt(0).toUpperCase() + cardLabel.slice(1)}</span>
        <span className="date">{formattedDate}</span>
      </div>

      <div className="transaction-body">
        <div className="details">
          <div className="description">{getTransactionDescription(transaction.description)}</div>
          <div className="category">{transaction.category}</div>
        </div>

        <div className="amount">
          {isNegative ? '-' : '+'}$
          {Math.abs(transaction.amount).toFixed(2)}
        </div>
      </div>

      <div className="transaction-footer">
        Click to add tags
      </div>
    </button>
  )
}
