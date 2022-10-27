import { month, props, year } from "../../Main"
import s from "../../../../style/Transaction.module.css"
import TransactionItem from "./TransactionItem";
import { type } from "os";


const Transaction = ({ activation, onNextStep }: props) => {


    return (
        <div>
            <div className={s.header}>
                <div className={s.title}>
                    <img src={require(`../../../../img/ic_arrow_l.svg`)}
                        onClick={() => { }} />
                    <span>История операций</span>
                </div>
                <div className={s.button}>
                    Платежи
                </div>
                <div className={s.button}>
                    Начисления
                </div>
            </div>

            <div className={s.slideMenu}>
                <TransactionItem isPayment={true} monthId={0} year={year} />
                <TransactionItem isPayment={false} monthId={0} year={year} />
                <TransactionItem isPayment={true} monthId={0} year={year} />
                <TransactionItem isPayment={false} monthId={0} year={year} />
                <TransactionItem isPayment={true} monthId={0} year={year} />
                <TransactionItem isPayment={false} monthId={0} year={year} />
                <TransactionItem isPayment={true} monthId={0} year={year} />
                <TransactionItem isPayment={false} monthId={0} year={year} />
                <TransactionItem isPayment={true} monthId={0} year={year} />
                <TransactionItem isPayment={false} monthId={0} year={year} />

                <TransactionItem isPayment={true} monthId={0} year={year} />
                <TransactionItem isPayment={false} monthId={0} year={year} />
                <TransactionItem isPayment={true} monthId={0} year={year} />
                <TransactionItem isPayment={false} monthId={0} year={year} />
            </div>

        </div>
    )
}

export default Transaction;