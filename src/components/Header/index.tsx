import logo from '../../assets/img/logo.svg'
import { Container } from './style'
import { Content } from './style'

interface HeaderProps {
    open: () => void
}
export function Header(props:HeaderProps) {
    function handleOpenModal() {
        props.open()
    }    
    return (
        <Container>
            <Content>
                <img 
                src={ logo } 
                alt="logo"
                />
                <button 
                onClick={ handleOpenModal }
                >
                    New transaction
                </button>
            </Content>
        </Container>
    )
}