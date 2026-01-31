import React, { useState } from 'react'
import type { Transaction } from '../types/transactions'

interface Props {
  transaction: Transaction
  onTagChange?: (id: string, tag: string) => void
}

export const TransactionCard: React.FC<Props> = ({ transaction, onTagChange }) => {
  const [tag, setTag] = useState('')

  const handleClick = () => {
    alert(`Transaction ID: ${JSON.stringify(transaction)}`)
  }

  const handleTagChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setTag(value)
    if (onTagChange) onTagChange(transaction.id, value)
  }

  const dateOnly = new Date(transaction.date).toLocaleDateString()
  const isPositive = transaction.amount >= 0

  return (
    <div style={styles.card}>
      <div style={styles.header}>
        {transaction.accountId} — {dateOnly}
      </div>

      <button
        onClick={handleClick}
        style={{
          ...styles.button,
          backgroundColor: isPositive ? '#16a34a' : '#dc2626', // green/red
        }}
      >
        {transaction.description} — ${transaction.amount.toFixed(2)}
      </button>

      <input
        type="text"
        placeholder="Add tag"
        value={tag}
        onChange={handleTagChange}
        style={styles.input}
      />
    </div>
  )
}

const styles: Record<string, React.CSSProperties> = {
  card: {
    borderRadius: 8,
    border: '1px solid #ddd',
    padding: 12,
    marginBottom: 10,
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#fafafa',
    boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
    transition: 'transform 0.1s',
  },
  header: {
    fontSize: 14,
    color: '#555',
    marginBottom: 6,
    fontWeight: 500,
  },
  button: {
    border: 'none',
    borderRadius: 6,
    padding: 10,
    cursor: 'pointer',
    color: 'white',
    fontWeight: 500,
    textAlign: 'left',
    marginBottom: 6,
    transition: 'background 0.2s',
  },
  input: {
    padding: 6,
    borderRadius: 6,
    border: '1px solid #ccc',
    width: '100%',
  },
}
