import { useTransactions } from '../hooks/useTransactions'

export default function TransactionsPage() {
  const { data, loading, error } = useTransactions()

  if (loading) return <p>Loading…</p>
  if (error) return <p>Error: {error}</p>

  return (
    <ul>
      {data.map(tx => (
        <li key={tx.id}>
          {tx.date} – {tx.description} – ${tx.amount}
        </li>
      ))}
    </ul>
  )
}
