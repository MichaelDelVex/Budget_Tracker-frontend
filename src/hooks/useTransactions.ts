import { useEffect, useState } from 'react'
import { getAllTransactions } from '../api/transcations'
import type { TransactionsResponse } from '../types/transactions'

export function useTransactions() {
  const [data, setData] = useState<TransactionsResponse>({ count: 0, transactions: [] })
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    getAllTransactions()
      .then(setData)
      .catch(err => setError(err.message))
      .finally(() => setLoading(false))
  }, [])

  return { data, loading, error }
}
