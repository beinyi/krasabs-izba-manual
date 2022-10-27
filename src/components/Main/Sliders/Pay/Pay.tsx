import { goToMe, month, props, year } from "../../Main";
import s from "../../../../style/PaySlider.module.less"
import { payButtons } from "../../buttons";


const Pay = ({ activation, onNextStep }: props) => {

    return (
        <div className={s.slideMenu}>
            <div className={s.header}>
                <div style={{ width: "35px" }}></div>  {/*flex костыль для заголовка по центру?*/}
                <h3>Оплатить</h3>
                <img src={require('../../../../img/ic_close.svg')} alt="Закрыть" />
            </div>

            <div className={s.info}>
                <div>
                    <span>Задолженность по ЛС</span>
                    <span style={{ color: "#f66" }}>-1 918,58</span>
                </div>
                <div>
                    <span>Начислено за {month} {year}</span>
                    <span>1 918,58</span>
                </div>
            </div>

            <div className={s.payment}>
                <h2>К оплате</h2>
                <div id={goToMe(payButtons[1], activation) ? s["inputGoToMe"] : ""}
                    className={s.paymentInput}
                    onClick={goToMe(payButtons[1], activation) ?
                        () => { onNextStep(); }
                        : () => { }}
                    data-description={payButtons[1].description}>
                    1918.58
                </div>
                <div style={{
                    display: "flex",
                    flexDirection: "row"
                }}>

                    <div id={goToMe(payButtons[2], activation) ? s["imgGoToMe"] : ""}
                        onClick={goToMe(payButtons[2], activation) ?
                            () => { onNextStep(); }
                            : () => { }}
                        data-description={payButtons[2].description} >
                        <div style={{
                            height: "30px",
                            width: "30px"
                        }}>
                            <img src={require(`../../../../img/${payButtons[2].icon}`)} />
                        </div>
                    </div>
                    <span>Я прочитал <a href="https://izba.kras-abs.ru/agrees/izba.html">условия сервиса</a> и согласен с ними.</span>
                </div>

                <div id={goToMe(payButtons[0], activation) ? s["buttonGoToMe"] : ""}
                    onClick={goToMe(payButtons[0], activation) ?
                        () => { onNextStep(); }
                        : () => { }}
                    className={s.button} key={`${payButtons[0].type}-${payButtons[0].id}`}
                    data-description={payButtons[0].description}>
                    <img className={s.icon} src={require(`../../../../img/${payButtons[0].icon}`)} alt={payButtons[0].title} />
                    <span>{payButtons[0].title}</span>
                </div>}
                <span style={{
                    textDecoration: "underline",
                    textAlign: "center"
                }}>Посмотреть историю операций</span>
            </div>

        </div >
    )
}

export default Pay;