import { actButtons, buttonTypes, meterButtons, TButton } from "../buttons"
import s from "../../../style/HomeSlider.module.css"
import { props } from "../Main"



const Home = ({ activeType, activeId, onNextStep }: props) => {
    
    const goToMe = (type: buttonTypes, id: number): string => {     // Проверка кнопки на активацию. 
        return (activeType === type && activeId === id ?
            `${s["buttonGoToMe"]}`
            : "")
    }

    const renderButton = (button: TButton) => {
        return (
            <div id={goToMe(button.type, button.id)} className={s.button} data-description={"dss"} key={`${button.type}-${button.id}`}>
                <img className={s.icon} src={require(`../../../img/${button.icon}`)} alt={button.title} />
                <span>{button.title}</span>
            </div>
        )
    }

    return (
        <div className={s.slideMenu}>
            <div className={s.meterMenu}>
                <span style={{ fontFamily: "dindisplay_bold" }}>Счётчики</span>
                {meterButtons.map((button: TButton) => renderButton(button))}
            </div>

            <div className={s.actionMenu}>
                <span style={{ fontFamily: "dindisplay_bold" }}>Действия</span>
                {actButtons.map((button: TButton) => renderButton(button))}
            </div>
        </div>
    )
}

export default Home;