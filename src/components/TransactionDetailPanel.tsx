import React, { useState } from 'react'
import type { Transaction } from '../types/transactions'
import './TransactionDetailPanel.css'

interface Props {
  transaction: Transaction | null
  onTagChange?: (tag: string) => void
  onClose?: () => void
}

export const TransactionDetailPanel: React.FC<Props> = ({ transaction, onTagChange, onClose }) => {
  const [tag, setTag] = useState('')

  if (!transaction) {
    return <div className="detail-panel empty">Select a transaction to view details</div>
  }

  const handleAddTag = () => {
    if (tag.trim()) {
      onTagChange?.(tag)
      setTag('')
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleAddTag()
    }
  }

  const accountLabel = transaction.accountId.replace('_', ' ')
  const formattedDate = new Date(transaction.date).toLocaleDateString('en-AU', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  })

  return (
    <div className="detail-panel">
      <div className="detail-header">
        <h2>Transaction Details</h2>
        {onClose && (
          <button className="close-button" onClick={onClose} aria-label="Close">
            ✕
          </button>
        )}
      </div>

      <div className="detail-headline">
        <div className="headline-description">{transaction.description}</div>
        <div className={`headline-amount ${transaction.amount < 0 ? 'negative' : 'positive'}`}>
          {transaction.amount < 0 ? '-' : '+'}${Math.abs(transaction.amount).toFixed(2)}
        </div>
      </div>

      <div className="detail-category">{transaction.category || 'N/A'}</div>

      <div className="detail-fields">
        <div className="detail-field">
          <span className="field-label">Date:</span>
          <span className="field-value">{formattedDate}</span>
        </div>

        <div className="detail-field">
          <span className="field-label">Account:</span>
          <span className="field-value">Card ending {transaction.accountId.slice(-4)}</span>
        </div>

        <div className="detail-field">
          <span className="field-label">Category:</span>
          <span className="field-value">{transaction.category || 'N/A'}</span>
        </div>
      </div>

      <div className="tags-section">
        <h3>Tags</h3>
        <div className="tag-input-group">
          <input
            className="tag-input"
            placeholder="Add tag"
            value={tag}
            onChange={(e) => setTag(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <button className="tag-button" onClick={handleAddTag} aria-label="Add tag">
            +
          </button>
        </div>
      </div>
    </div>
  )
}
