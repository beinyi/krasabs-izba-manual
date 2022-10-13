import s from "../../style/Main.module.css"
import { TButton,  buttonTypes, infoMenuButtons, navButtons } from "./buttons";
import { ReactNode, useState } from "react";
import Home from "./Sliders/Home"
import Pay from "./Sliders/Pay";

export type props = {               // Тип и номер для активации кнопки, функция для перехода на следующий шаг
    activeType: buttonTypes | null,
    activeId: number,
    onNextStep(): void
}

const date: Date = new Date();
export const mouth: string = date.toLocaleString("ru-RU", { month: 'long' });
export const year: number = date.getFullYear();

const Main = ({ activeType, activeId, onNextStep }: props) => {

    const [activeSlider, setActiveSlider] = useState<number>(0);  // Активное слайд-меню


    const sliders: Array<ReactNode> = [  // Массив слайд-меню
        <Home activeType={activeType} activeId={activeId} onNextStep={onNextStep} />,
        <Home activeType={activeType} activeId={activeId} onNextStep={onNextStep} />,   //Услуги
        <Pay activeType={activeType} activeId={activeId} onNextStep={onNextStep} />,

    ];

    const goToMe = (type: buttonTypes, id: number): boolean => {     // Проверка кнопки на активацию. 
        return (activeType === type && activeId === id)
    }

    return (
        <div className={s.page}>

            <div className={s.header}>
                <div className={s.user}>
                    <img className={s.icon} src={require('../../img/person.svg')} alt="Профиль" />
                    <div className={s.userInfo}>
                        <span style={{ fontFamily: "dindisplay_bold", fontSize: "1.25em" }}>ЛС №00000000000</span>
                        <span>г. Красноярск, ул. Гагарина, д. 27, кв. 6 </span>
                    </div>
                    <img style={{ height: "10px" }} src={require('../../img/ic_arrow_d.svg')} />
                </div>

                <img style={{ marginLeft: "auto" }} className={s.icon} src={require('../../img/ic_bell.svg')} alt="Уведомления" />

            </div>

            <div className={s.infoMenu}>
                <span>Всего задолженность</span>
                <span style={{ fontFamily: "dindisplay_bold", color: "#ffbd2e", fontSize: "1.5em" }}>-1 918,58 р.</span>
                <span>Всего начисленно за {mouth} {year}</span>
                <span style={{ fontFamily: "dindisplay_bold", fontSize: "1.5em" }}>1 918,58 р.</span>
                <div className={s.infoButtonPad}>
                    <div id={goToMe(infoMenuButtons[0].type, infoMenuButtons[0].id) ? s["buttonGoToMe"] : ""}
                        className={s.buttonInfo}>
                        {infoMenuButtons[0].title}
                    </div>
                    <div id={goToMe(infoMenuButtons[1].type, infoMenuButtons[1].id) ? s["buttonGoToMe"] : ""}
                        className={s.buttonPay}>
                        {infoMenuButtons[1].title}
                    </div>
                </div>
            </div>

            {sliders[activeSlider]}


            <nav className={s.navBar}>
                {navButtons.map((button: TButton) => <div id={goToMe(button.type, button.id) ? s["buttonGoToMe"] : ""}
                    onClick={goToMe(button.type, button.id) ?
                        () => {
                            onNextStep();
                            setActiveSlider(button.id)
                        }
                        : () => { }}
                    className={s.button} key={`${button.type}-${button.id}`}
                    data-description={button.description}>
                    <img className={s.icon} src={require(`../../img/${button.icon}`)} alt={button.title} />
                    <span>{button.title}</span>
                </div>)}
            </nav>
        </div>
    )

}

export default Main;