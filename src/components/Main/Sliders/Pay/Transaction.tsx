import { date, props } from "../../Main"
import s from "../../../../style/Transaction.module.css"
import TransactionItem from "./TransactionItem";
import { useState } from "react";

type transactionProps = props & {onClose(): void}

const Transaction = ({ activation, onNextStep, onClose }: transactionProps) => {

    const [isViewPayment, setIsViewPayment] = useState<boolean>(true);
    const [isViewAccrual, setIsViewAccrual] = useState<boolean>(true);

    const onChangeView = (type: 'payment' | 'accrual') => {
        switch (type) {
            case 'payment': {
                setIsViewAccrual(!isViewAccrual);
                setIsViewPayment(true);
                break;
            }
            case 'accrual': {
                setIsViewPayment(!isViewPayment);
                setIsViewAccrual(true);
                break;
            }
        }
    }


    const monthsAndYears: Array<string> = [];
    for (let i = 0; i < 12; i++) {
        let newMonth: string = new Intl.DateTimeFormat('ru-Ru', { month: 'long', year: 'numeric' }).format(new Date(date.getFullYear(),
            date.getMonth() - i))
        newMonth = newMonth[0].toUpperCase() + newMonth.slice(1, -3);
        monthsAndYears.push(newMonth)
    }

    return (
        <div>
            <div className={s.header}>
                <div className={s.title}>
                    <img src={require(`../../../../img/ic_arrow_l.svg`)}
                        onClick={() => onClose()} />
                    <span>История операций</span>
                </div>
                <div className={`${s.button} ${!isViewAccrual && s.active}`}
                
                onClick={() => onChangeView('payment')}>
                    Платежи
                </div>
                <div className={`${s.button} ${!isViewPayment && s.active}`}
                onClick={() => onChangeView('accrual')}>
                    Начисления
                </div>
            </div>

            <div className={s.slideMenu}>
                {monthsAndYears.map((monthAndYear: string, i: number) => {
                    const monthId = new Date(date.getFullYear(), date.getMonth() - i).getMonth();
                    return (
                        <div key={i}>
                            <h2>{monthAndYear}</h2>
                            {i === 0 && date.getDate() < 15 ?
                                ""
                                : isViewPayment && <TransactionItem isPayment={true} monthId={monthId} year={monthAndYear.slice(-4)} />}

                            {isViewAccrual && <TransactionItem isPayment={false} monthId={monthId} year={monthAndYear.slice(-4)} />}
                        </div>
                    )
                })}

            </div>

        </div>
    )
}

export default Transaction;