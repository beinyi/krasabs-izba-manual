import { mouth, props, year } from "../Main";
import s from "../../../style/PaySlider.module.less"
import { buttonTypes, payButtons, TButton } from "../buttons";


const Pay = ({ activeType, activeId, onNextStep }: props) => {

    const goToMe = (type: buttonTypes, id: number): boolean => {     // Проверка кнопки на активацию. 
        return (activeType === type && activeId === id)
    }

    const renderButton = (button: TButton) => {
        return (
            <div id={goToMe(button.type, button.id) ? s["buttonGoToMe"] : ""}
                onClick={goToMe(button.type, button.id) ?
                    () => { onNextStep(); }
                    : () => { }}
                className={s.button} key={`${button.type}-${button.id}`}
                data-description={button.description}>
                <img className={s.icon} src={require(`../../../img/${button.icon}`)} alt={button.title} />
                <span>{button.title}</span>
            </div>
        )
    }

    return (
        <div className={s.slideMenu}>
            <div className={s.header}>
                <div style={{ width: "35px" }}></div>  {/*flex костыль для заголовка по центру?*/}
                <h3>Оплатить</h3>
                <img src={require('../../../img/ic_close.svg')} alt="Закрыть" />
            </div>

            <div className={s.info}>
                <div>
                    <span>Задолженность по ЛС</span>
                    <span style={{ color: "#f66" }}>-1 918,58</span>
                </div>
                <div>
                    <span>Начислено за {mouth} {year}</span>
                    <span>1 918,58</span>
                </div>
            </div>

            <div className={s.payment}>
                <h2>К оплате</h2>
                <div id={goToMe(payButtons[1].type, payButtons[1].id) ? s["inputGoToMe"] : ""}
                    className={s.paymentInput}
                    onClick={goToMe(payButtons[1].type, payButtons[1].id) ?
                        () => { onNextStep(); }
                        : () => { }}
                    data-description={payButtons[1].description}>
                    1918.58
                </div>
                <div style={{
                    display: "flex",
                    flexDirection: "row"
                }}>

                    <div id={goToMe(payButtons[2].type, payButtons[2].id) ? s["imgGoToMe"] : ""}
                        onClick={goToMe(payButtons[2].type, payButtons[2].id) ?
                            () => { onNextStep(); }
                            : () => { }}
                        data-description={payButtons[2].description} >
                        <div style={{
                            height: "30px",
                            width: "30px"
                        }}>
                            <img src={require(`../../../img/${payButtons[2].icon}`)} />
                        </div>
                    </div>
                    <span>Я прочитал <a href="https://izba.kras-abs.ru/agrees/izba.html">условия сервиса</a> и согласен с ними.</span>
                </div>
                {renderButton(payButtons[0])}
                <span style={{
                    textDecoration: "underline",
                    textAlign: "center"
                }}>Посмотреть историю операций</span>
            </div>

        </div >
    )
}

export default Pay;