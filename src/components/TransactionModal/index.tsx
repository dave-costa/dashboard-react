import { FormEvent } from 'react'
import { useState } from 'react'
import Modal from 'react-modal'
import closeImg from '../../assets/img/close.svg'
import incomeImg from '../../assets/img/income.svg'
import outcomeImg from '../../assets/img/outcome.svg'
import { useTransactions } from '../../hooks/useTransactions'
import { Container } from './style'
import { TransactionTypeContainer, RadioBox } from './style'

interface ModalRequest {
    modalTransaction: boolean
    handleCloseModal: () => void
}
export function TransactionModal (props: ModalRequest) {
    const [type, setType] = useState('deposit')
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState(0)
    const [category, setCategory] = useState('')
    const { createTransaction} = useTransactions()
    async function handleCreateNewTransaction(event: FormEvent) {
        event.preventDefault() 
        try {
            await createTransaction({
                title,
                price,
                type,
                category
            }) 
            setTitle('')
            setPrice(0)
            setCategory('')
            setType('deposit')
            props.handleCloseModal()
        } catch (error) {
            alert('sorry, error register new product, please contact creator our wait later')
        }
    }
    function handleClose() {
        props.handleCloseModal()
    }
    return (
        <main>
            <Modal
            isOpen={props.modalTransaction}
            onRequestClose= {handleClose}
            overlayClassName = "overlay-modal"
            className = "content-modal"
            >
                <button 
                onClick = {props.handleCloseModal}
                className = "modal-close"
                >
                    <img 
                    src={closeImg} 
                    alt="close"  
                    />
                </button>
                <Container onSubmit = {handleCreateNewTransaction}>
                   <h2>Register transaction</h2> 
                   <input 
                   type="text"
                   placeholder="Title"
                   value = {title}
                   onChange = { ({target}) => setTitle(target.value)}
                   />
                   <input 
                   type="number"
                   placeholder="price"
                   value = {price}
                   onChange = {({target}) => setPrice(Number(target.value))}
                   />
                   <TransactionTypeContainer>
                       <RadioBox
                       isActive = {type === 'deposit'}
                       type="button"
                       onClick = {() => setType('deposit')}
                       activeColor='green'
                       >
                            <img src={ incomeImg } alt="income" />
                            <span>Income</span>
                       </RadioBox>
                       <RadioBox
                       isActive = {type === 'withdraw'}
                       type="button"
                       onClick = {() => setType('withdraw')}
                       activeColor='red'
                       >
                            <img src={ outcomeImg } alt="outcome" />
                            <span>Outcome</span>
                       </RadioBox>
                   </TransactionTypeContainer>
                   <input 
                   type="text"
                   placeholder="category"
                   value = {category}
                   onChange = {({target}) => setCategory(target.value)}
                   />
                   <button type="submit">Register</button>
                </Container> 
            </Modal>
        </main>
    )
}