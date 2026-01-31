import type { Transaction } from '../types/transactions'

export async function fetchTransactions(): Promise<Transaction[]> {
  const res = await fetch('/budgettracker/transactions')

  if (!res.ok) {
    throw new Error('Failed to fetch transactions')
  }

  console.log('test', res);

  return res.json()
}
