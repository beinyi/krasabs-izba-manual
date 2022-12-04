import { goToMe, month, props, year } from "../../Main";
import "@styles/Pay.css"
import { payButtons } from "../../buttons";
import { useState } from "react";
import Transaction from "./Transaction";


const Pay = ({ activation, onNextStep, setIsViewMainHeader }: props) => {

    const [isViewTransaction, setIsViewTransaction] = useState<boolean>(false);

    const onTransaction = () => {
        setIsViewMainHeader ? setIsViewMainHeader(isViewTransaction) : {};
        setIsViewTransaction(!isViewTransaction);
    }

    return (
        isViewTransaction ?
            <Transaction activation={activation} onNextStep={onNextStep} onClose={onTransaction} />
            :
            <div className="pay-slide">
                <div className="pay-slide_header">
                    <div style={{ width: "35px" }}></div>  {/*flex костыль для заголовка по центру?*/}
                    <h3>Оплатить</h3>
                    <img src={require('../../../../img/ic_close.svg')} alt="Закрыть" />
                </div>

                <div className="pay-slide_info">
                    <div>
                        <span>Задолженность по ЛС</span>
                        <span style={{ color: "#f66" }}>-1 918,58</span>
                    </div>
                    <div>
                        <span>Начислено за {month} {year}</span>
                        <span>1 918,58</span>
                    </div>
                </div>

                <div className="pay-slide_payment">
                    <h2>К оплате</h2>
                    <div id={goToMe(payButtons[1], activation) ? "inputGoToMe" : ""}
                        className="pay-slide_payment_input"
                        onClick={() => { goToMe(payButtons[1], activation) && onNextStep(); }}
                    >
                        1918.58
                    </div>
                    <div style={{
                        display: "flex",
                        flexDirection: "row"
                    }}>

                        <div id={goToMe(payButtons[2], activation) ? "imgGoToMe" : ""}
                            onClick={() => { goToMe(payButtons[2], activation) && onNextStep(); }}
                        >
                            <div style={{
                                height: "30px",
                                width: "30px"
                            }}>
                                <img src={require(`../../../../img/${payButtons[2].icon}`)} />
                            </div>
                        </div>
                        <span>Я прочитал <a href="https://izba.kras-abs.ru/agrees/izba.html" target="_blank">условия сервиса</a> и согласен с ними.</span>
                    </div>

                    <div id={goToMe(payButtons[0], activation) ? "greenButtonGoToMe" : ""}
                        onClick={() => { goToMe(payButtons[0], activation) && onNextStep(); }}
                        className="pay-slide_button" key={`${payButtons[0].type}-${payButtons[0].id}`}
                    >
                        <img className="pay-slide_button_icon" src={require(`../../../../img/${payButtons[0].icon}`)} alt={payButtons[0].title} />
                        <span>{payButtons[0].title}</span>
                    </div>

                    <span
                        style={{
                            textDecoration: "underline",
                            textAlign: "center",
                            cursor: "pointer",
                        }}
                        id={goToMe(payButtons[3], activation) ? "textGoToMe" : ""}
                        onClick={() => { goToMe(payButtons[3], activation) && (onNextStep(), onTransaction()) }}>
                        Посмотреть историю операций
                    </span>
                </div >

            </div >
    )
}

export default Pay;