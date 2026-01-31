export interface Transaction {
  id: string
  accountId:string,
  date: string
  description: string
  amount: number
  category?: string
}
