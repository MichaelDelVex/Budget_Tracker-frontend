export interface TransactionsResponse {
  count: number,
  transactions: Transaction[]
}

export interface Transaction {
  id: string
  accountId:string,
  date: string
  description: string
  amount: number
  category?: string
}
