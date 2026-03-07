import React, { useState } from 'react'
import { useTransactions } from '../hooks/useTransactions'
import { TransactionCard } from '../components/TransactionCard'
import { TransactionDetailPanel } from '../components/TransactionDetailPanel'
import type { Transaction } from '../types/transactions'
import './transactionPage.css'

export default function TransactionsPage() {
  const { data, loading, error } = useTransactions()
  const [selectedTransaction, setSelectedTransaction] = useState<Transaction | null>(null)

  if (loading) return <p>Loading…</p>
  if (error) return <p>Error: {error}</p>

  console.log(data)

  const handleTagChange = (tag: string) => {
    if (selectedTransaction) {
      console.log(`Tag for transaction ${selectedTransaction.id}: ${tag}`)
    }
  }

  return (
    <div className="transactions-page">
      <div className="transactions-header">
        <h1>Transactions</h1>
      </div>

      <div className="transactions-container">
        <div className="transactions-list">
          {data.transactions.map(tx => (
            <TransactionCard
              key={tx.id}
              transaction={tx}
              onSelect={setSelectedTransaction}
            />
          ))}
        </div>

        <TransactionDetailPanel
          transaction={selectedTransaction}
          onTagChange={handleTagChange}
        />
      </div>
    </div>
  )
}
