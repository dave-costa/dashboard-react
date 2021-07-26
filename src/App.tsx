import { useState } from 'react'
import { TransactionProvider} from './hooks/useTransactions'
import Modal from 'react-modal'
import { GlobalStyle } from './style/global'
import { Header } from './components/Header/index'
import { Dashboard } from './components/Dashboard';
import { TransactionModal } from './components/TransactionModal';
Modal.setAppElement('#root')
export function App() {
  const [modalTransaction, setModalTransaction] = useState(false)
  function handleOpenModal() {
    setModalTransaction(true)
  }
  function handleCloseModal() {
    setModalTransaction(false)
  }
  return (
    <TransactionProvider>
      <Header 
      open = {handleOpenModal} 
      />
      <Dashboard />
      <TransactionModal 
      modalTransaction = {modalTransaction}
      handleCloseModal = {handleCloseModal}
      />
      <GlobalStyle></GlobalStyle>
    </TransactionProvider>
    

  );
}

