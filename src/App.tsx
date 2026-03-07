import { useState } from 'react'
import TransactionsPage from './pages/transactionPage'
import DashboardPage from './pages/dashboardPage'
import './App.css'

export default function App() {
  const [activeTab, setActiveTab] = useState('transactions')

  return (
    <div className="app">
      <nav className="app-nav">
        <div className="nav-container">
          <h1 className="app-title">Budget Tracker</h1>
          <div className="nav-tabs">
            <button
              className={`nav-tab ${activeTab === 'dashboard' ? 'active' : ''}`}
              onClick={() => setActiveTab('dashboard')}
            >
              Dashboard
            </button>
            <button
              className={`nav-tab ${activeTab === 'transactions' ? 'active' : ''}`}
              onClick={() => setActiveTab('transactions')}
            >
              Tag Transactions
            </button>
          </div>
        </div>
      </nav>

      <main className="app-content">
        {activeTab === 'dashboard' && <DashboardPage />}
        {activeTab === 'transactions' && <TransactionsPage />}
      </main>
    </div>
  )
}
