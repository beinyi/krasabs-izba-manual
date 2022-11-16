import s from "@styles/Main.module.css"
import { TActivation } from "@components/Guide";
import { infoMenuButtons } from './buttons';
import { goToMe } from "./Main";

type Props = {
    mouth: string,
    year: number,
    activation: TActivation
}

const MainHeader = ({mouth, year, activation}: Props) => {
  return (
    <div>
        <div className={s.header}>
                        <div className={s.user}>
                            <img className={s.icon} src={require('@img/person.svg')} alt="Профиль" />
                            <div className={s.userInfo}>
                                <span style={{ fontFamily: "dindisplay_bold", fontSize: "1.25em" }}>ЛС №00000000000</span>
                                <span>г. Красноярск, ул. Гагарина, д. 27, кв. 6 </span>
                            </div>
                            <img style={{ height: "10px" }} src={require('@img/ic_arrow_d.svg')} />
                        </div>

                        <img style={{ marginLeft: "auto" }} className={s.icon} src={require('@img/ic_bell.svg')} alt="Уведомления" />

                    </div>


                    <div className={s.infoMenu}>
                        <span>Всего задолженность</span>
                        <span style={{ fontFamily: "dindisplay_bold", color: "#ffbd2e", fontSize: "1.5em" }}>-1 918,58 р.</span>
                        <span>Всего начисленно за {mouth} {year}</span>
                        <span style={{ fontFamily: "dindisplay_bold", fontSize: "1.5em" }}>1 918,58 р.</span>
                        <div className={s.infoButtonPad}>
                            <div id={goToMe(infoMenuButtons[0], activation) ? s["buttonGoToMe"] : ""}
                                className={s.buttonInfo}>
                                {infoMenuButtons[0].title}
                            </div>
                            <div id={goToMe(infoMenuButtons[1], activation) ? s["buttonGoToMe"] : ""}
                                className={s.buttonPay}>
                                {infoMenuButtons[1].title}
                            </div>
                        </div>
                    </div>
    </div>
  )
}

export default MainHeader;