import { useTransactions } from "../../hooks/useTransactions";

import { Container } from "./styles";

export function TransactionTable() {
	const { transactions } = useTransactions();
	
    return (
			<Container>
				<table>
					<thead>
						<tr>
							<th>Título</th>
							<th>Valor</th>
							<th>Categoria</th>
							<th>Data</th>
						</tr>
					</thead>

					<tbody>
						{transactions.map(transaction => (
							<tr key={transaction.id}>
								
								<td><span>Título</span> {transaction.title}</td>
								<td className={transaction.type}>
								<span>Valor</span>
									{ new Intl.NumberFormat('pt-BR', {
										style: 'currency',
										currency: 'BRL'
									}).format(transaction.amount)}
								</td>
								<td><span>Categoria</span> {transaction.category}</td>
								<td><span>Data</span>
									{ new Intl.DateTimeFormat('pt-BR').format(
										new Date(transaction.createdAt)
									)}
								</td>
							</tr>
						))}
					</tbody>
          
				</table>
			</Container>
    )
}