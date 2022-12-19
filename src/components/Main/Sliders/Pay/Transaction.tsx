import { date, goToMe, props } from "../../Main"
import "@styles/Transaction.css"
import TransactionItem from "./TransactionItem";
import { useState } from "react";
import { transactionButtons } from "../../buttons";
import Accrual from "./Accrual";

export function getMonthsAndYears() {   // возвращает массив строк "месяц год", содержит 12 месяцев, с текущего [0] по и по убывающей до [11]
    const arr: Array<string> = [];
    for (let i = 0; i < 12; i++) {
        let newMonth: string = new Intl.DateTimeFormat('ru-Ru', { month: 'long', year: 'numeric' }).format(new Date(date.getFullYear(),
            date.getMonth() - i));
        newMonth = newMonth[0].toUpperCase() + newMonth.slice(1, -3);
        arr.push(newMonth);
    }

    return arr;
}

const Transaction = ({ activation, onNextStep }: props) => {

    const [isViewPayment, setIsViewPayment] = useState<boolean>(true);
    const [isViewAccrual, setIsViewAccrual] = useState<boolean>(true);
    const [accrualCarousel, setAccrualCarousel] = useState<{
        isView: boolean,
        monthId: number
    }>({
        isView: false,
        monthId: 0
    });

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

    const monthsAndYears: Array<string> = getMonthsAndYears();


    return (
        accrualCarousel.isView ?
            <Accrual activation={activation} onNextStep={onNextStep} monthId={accrualCarousel.monthId} />
            :

            <div>
                <div className="transaction_header">
                    <div className="transaction_header_title">
                        <img src={require(`../../../../img/ic_arrow_l.svg`)} />
                        <span>История операций</span>
                    </div>
                    <div id={goToMe(transactionButtons[0], activation) ? "buttonGoToMe" : ""}
                        className={isViewAccrual ? "transaction_header_button" : "transaction_header_button-active"}
                        onClick={goToMe(transactionButtons[0], activation) ?
                            () => { onChangeView('payment'); onNextStep() }
                            : () => { onChangeView('payment') }}>
                        Платежи
                    </div>
                    <div id={goToMe(transactionButtons[1], activation) ? "buttonGoToMe" : ""}
                        className={isViewPayment ? "transaction_header_button" : "transaction_header_button-active"}   
                        onClick={goToMe(transactionButtons[1], activation) ?
                            () => { onChangeView('accrual'); onNextStep(); }
                            : () => { onChangeView('accrual') }}>
                        Начисления
                    </div>
                </div>

                <div className="transaction_slide">
                    {monthsAndYears.map((monthAndYear: string, i: number) => {
                        const monthId = new Date(date.getFullYear(), date.getMonth() - i).getMonth();
                        return (
                            <div key={i}>
                                <h2>{i === 0 && !isViewAccrual && date.getDate() < 15 ? "" : monthAndYear}</h2>
                                {i === 0 && date.getDate() < 15 ?
                                    ""
                                    : isViewPayment && <TransactionItem isPayment={true} monthId={monthId} year={monthAndYear.slice(-4)} />}

                                {i === 0 ?
                                    <div style={{
                                        borderRadius: '10px',
                                        padding: '0 3%',
                                        margin: '0 -3%'
                                    }}
                                        id={goToMe(transactionButtons[2], activation) ? "buttonGoToMe" : ""}
                                        onClick={() => onNextStep()}>
                                        {isViewAccrual && <TransactionItem isPayment={false} setCarousel={() => setAccrualCarousel({ isView: true, monthId: i })}
                                            monthId={monthId} year={monthAndYear.slice(-4)} />}
                                    </div>
                                    : isViewAccrual && <TransactionItem isPayment={false} setCarousel={() => setAccrualCarousel({ isView: true, monthId: i })}
                                        monthId={monthId} year={monthAndYear.slice(-4)} />
                                }


                            </div>
                        )
                    })}

                </div>

            </div>
    )
}

export default Transaction;