// transactions.ts
import type { Transaction } from '../types/transactions'
import { apiClient } from './apiClient'

const BASE_URL = '/budgettracker'

export function getAllTransactions(): Promise<Transaction[]> {
  return apiClient<Transaction[]>(`${BASE_URL}/transactions`)
}

export function getTransactionsByAccount(accountId: string): Promise<Transaction[]> {
  return apiClient<Transaction[]>(`${BASE_URL}/accounts/${accountId}/transactions`)
}

export function processNewData(): Promise<{ success: boolean; message: string }> {
  return apiClient(`${BASE_URL}/processdata`, { method: 'POST' })
}
