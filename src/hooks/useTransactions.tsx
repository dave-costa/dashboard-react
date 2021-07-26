import { useContext } from 'react'
import { createContext, ReactNode, useEffect, useState } from 'react'
import { TransactionModel } from '../components/TransactionTable/models/transactionsModel'
import { api } from '../services/api.transactions'

type NewTransaction = Omit<TransactionModel, 'id'|'createdAt'>

interface TransactionContextData {
    transactions: TransactionModel[]
    createTransaction: (transaction: NewTransaction) => Promise<void>
}
const TransactionsContext = createContext<TransactionContextData>(
    {} as TransactionContextData
)
interface TransactionProviderProps {
    children: ReactNode
}

export function TransactionProvider({children}:TransactionProviderProps) {
    const [transactions, setTransactions] = useState<TransactionModel[]>([])
    useEffect(() => {
        api.get('/transactions')
            .then( response => setTransactions( response.data.transactions))
    }, [])

    async function createTransaction(transactionInput: NewTransaction) {
        
    
        const response = await api.post('/transactions', {
            ...transactionInput,
            createdAt: new Date()
        })
        const { transaction } = response.data
       
        setTransactions([...transactions, transaction])
    }
    return (
        <TransactionsContext.Provider value = {{transactions, createTransaction }}>
            {children}
        </TransactionsContext.Provider>
    )
} 

export function useTransactions() {
    const context = useContext(TransactionsContext)
    return context
}