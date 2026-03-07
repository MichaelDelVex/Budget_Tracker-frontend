// transactions.ts
import type { TransactionsResponse } from '../types/transactions'
import { apiClient } from './apiClient'

const BASE_URL = '/budgettracker'

export function getAllTransactions(): Promise<TransactionsResponse> {
  return apiClient<TransactionsResponse>(`${BASE_URL}/transactions`)
}

export function getTransactionsByAccount(accountId: string): Promise<TransactionsResponse> {
  return apiClient<TransactionsResponse>(`${BASE_URL}/accounts/${accountId}/transactions`)
}

export function processNewData(): Promise<{ success: boolean; message: string }> {
  return apiClient(`${BASE_URL}/processdata`, { method: 'POST' })
}
