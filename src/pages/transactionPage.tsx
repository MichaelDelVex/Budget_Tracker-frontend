import React from 'react'
import { useTransactions } from '../hooks/useTransactions'
import { TransactionCard } from '../components/TransactionButton'

export default function TransactionsPage() {
  const { data, loading, error } = useTransactions()

  if (loading) return <p>Loading…</p>
  if (error) return <p>Error: {error}</p>

  const handleTag = (id: string, tag: string) => {
    console.log(`Tag for transaction ${id}: ${tag}`)
  }

  return (
    <div style={{ padding: '16px' }}>
      <h1>Transactions</h1>
      {data.map(tx => (
        <TransactionCard key={tx.id} transaction={tx} onTagChange={handleTag} />
      ))}
    </div>
  )
}
