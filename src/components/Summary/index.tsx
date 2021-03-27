// import { useTransactions } from '../../hooks/useTransactions';

import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';


import { Container } from "./styles";

export function Summary() {
    // const { transactions } = useTransactions();

    // const summary = transactions.reduce((acc, transaction) => {
    //     if(transaction.type === 'deposit') {
    //         acc.deposits += transaction.amount;
    //         acc.total += transaction.amount;
    //     } else {
    //         acc.withdraws += transaction.amount;
    //         acc.total -= transaction.amount;
    //     }

    //     return acc;
    // }, {
    //     deposits: 0,
    //     withdraws: 0,
    //     total: 0,
    // });

    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImg} alt="income icon"/>
                </header>
                <strong className="colorIncome">
                R$3000,00
                    {/* { new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(summary.deposits)} */}
                </strong>
           </div>

           <div>
                <header>
                    <p>Saídas</p>
                    <img src={outcomeImg} alt="outcome icon"/>
                </header>
                <strong className="colorOutcome">
                    R$350,00
                {/* { 
                    new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(summary.withdraws)
                } */}
                </strong>
           </div>

           <div className="hightlight-background">
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="Total icon"/>
                </header>
                <strong>
                    R$2650,00
                {/* { 
                    new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(summary.total)
                } */}
                </strong>
           </div>
        </Container>
    )
}