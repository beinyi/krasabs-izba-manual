import { transactionButtons } from "@components/Main/buttons";
import { goToMe, props } from "@components/Main/Main";
import s from "@styles/Transaction.module.css"

type TransactionItemProps = {
    isPayment: boolean,
    monthId: number,
    year: string,
    setCarousel?(): void,
}

enum monthsString {
    "января",
    "февраля",
    "марта",
    "апреля",
    "мая",
    "июня",
    "июля",
    "августа",
    "сентября",
    "октября",
    "ноября",
    "декабря"
}

const TransactionItem = ({isPayment, monthId, year, setCarousel }: TransactionItemProps) => {

    return (
        <div className="transaction_item"
        onClick={() => !isPayment && setCarousel ? setCarousel() : {}}
        >
            <div className="transaction_item_icon"
                style={isPayment ? { backgroundColor: "#1a2e47" } : { backgroundColor: "#2e4028" }}>
                <img src={require(isPayment ?
                    '../../../../img/ic_trans_pay.svg'
                    : '../../../../img/ic_trans_charge.svg')} />
            </div>
            <div className="transaction_item_info">
                <span>{isPayment ?
                    "Выполнен платеж"
                    : "Начислено"} за ЖКУ</span>
                <span>{isPayment ?
                    "15"
                    : "01"} {monthsString[monthId]} {year}</span>
            </div>
            <span style={isPayment ? { color: "#416cc0", marginLeft: "auto" } : {marginLeft: "auto"}} >{isPayment ?
                "+"
                : "-"}1918.58</span>

        </div>
    )
}

export default TransactionItem;