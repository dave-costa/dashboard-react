import { Container } from "./styles";
import income from '../../assets/img/income.svg'
import outcome from '../../assets/img/outcome.svg'
import total from '../../assets/img/total.svg'
import { useTransactions } from '../../hooks/useTransactions';

export function Summary() {
    const {transactions} = useTransactions()
    const summary = transactions.reduce((acc, t) => {
        if (t.type === 'deposit') {
            acc.deposit += t.price
            acc.total += t.price
        } else {
            acc.withdraw += t.price
            acc.total -= t.price
        }
        return acc
    }, {
        deposit: 0,
        withdraw: 0,
        total: 0
    })
    return (
        <Container>
            <div>
                <header>
                    <p>Deposits</p>
                    <img src={income} alt="Income" />
                </header>
                <strong>
                {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'AOA'
                    }).format(summary.deposit)}
                </strong>
            </div>
            <div>
                <header>
                    <p>Withdraw</p>
                    <img src={outcome} alt="Exits" />
                </header>
                <strong>
                    {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'AOA'
                    }).format(summary.withdraw)}
                </strong>
            </div>
            <div className="total">
                <header>
                    <p>Total</p>
                    <img src={total} alt="Total" />
                </header>
                <strong>
                    {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'AOA'
                    }).format(summary.total)}
                </strong>
            </div>
        </Container>
    )
}