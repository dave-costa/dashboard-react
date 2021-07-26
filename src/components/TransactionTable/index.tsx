import { useTransactions } from "../../hooks/useTransactions";
import { Container } from "./styles";

export function Table() {
    const { transactions } = useTransactions()
    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Category</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map(transaction => (
                        <tr key = {transaction.id}>
                        <td>{transaction.title}</td>
                        <td className={transaction.type}> {new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'AOA'}).format(transaction.price)} </td>
                        <td>{transaction.category}</td>
                        <td>{new Intl.DateTimeFormat('pt-BR',).format(new Date(transaction.createdAt)  )}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Container>
    )
}