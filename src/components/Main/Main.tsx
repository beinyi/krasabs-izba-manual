import "@styles/Main.css"
import { TButton, navButtons, infoMenuButtons } from "./buttons";
import { ReactNode, useEffect, useState } from "react";
import Home from "./Sliders/Home"
import Pay from "./Sliders/Pay/Pay";
import Services from "./Sliders/Services/Services";
import NewRequest from "./Sliders/NewRequest";
import WaterMeter from "./Sliders/Meter/WaterMeter";

export type props = {               // Тип и номер для активации кнопки, функция для перехода на следующий шаг
    activation: TButton,
    onNextStep(forward?: boolean, timeout?: boolean): void,
    onClose?(): void,
    setIsViewMainHeader?(view: boolean): void
}

export const goToMe = (button: TButton, activation: TButton): boolean => {     // Проверка кнопки на активацию. 
    return (activation == button)
}

export const date: Date = new Date();
export const month: string = date.toLocaleString("ru-RU", { month: 'long' });
export const year: number = date.getFullYear();

const Main = ({ activation, onNextStep }: props) => {

    const [selectedSlider, setSelectedSlider] = useState<number>(0);  // Активное слайд-меню
    const [isViewHeader, setIsViewHeader] = useState<boolean>(true);
    const [isActiveSliders, setIsActiveSliders] = useState<boolean>(false);

    useEffect(() => {
        selectedSlider != 0 ?    //Home всегда активен
            setIsActiveSliders(true)
            : setIsActiveSliders(false)

    }, [selectedSlider])


    const sliders: Array<ReactNode> = [  // Массив слайд-меню
        <Home activation={activation} onNextStep={onNextStep} setSlider={setSelectedSlider} />, //Home всегда активен 0
        <Services activation={activation} onNextStep={onNextStep} setIsViewMainHeader={setIsViewHeader} />,   //Услуги 1
        <Pay activation={activation} onNextStep={onNextStep} setIsViewMainHeader={setIsViewHeader} />,        // Оплата 2
        <div></div>,                                                                                          // Новости 3
        <div></div>,                                                                                          // Меню 4
        <WaterMeter activation={activation} onNextStep={onNextStep} setIsViewMainHeader={setIsViewHeader} />,                                                                                          // Счетчики водоснабжения 5
        <div></div>,                                                                                          // Счетчики электроснабжения 6
        <NewRequest activation={activation} onNextStep={onNextStep} setIsViewMainHeader={setIsViewHeader} />, // Новая заявка 7

    ];

    return (
        <div className="page">

            {isViewHeader &&
                <div>
                    <div className="main_header">
                        <div className="main_header_user">
                            <img className="main_header_user-icon" src={require('@img/person.svg')} alt="Профиль" />
                            <div className="main_header_user-info" >
                                <span style={{ fontFamily: "dindisplay_bold", fontSize: "1.25em" }}>ЛС №00000000000</span>
                                <span>г. Красноярск, ул. Гагарина, д. 27, кв. 6 </span>
                            </div>
                            <img style={{ height: "10px" }} src={require('@img/ic_arrow_d.svg')} />
                        </div>
                        <img style={{ marginLeft: "auto" }} className="main_header_icon" src={require('@img/ic_bell.svg')} alt="Уведомления" />
                    </div>

                    <div className="main_info-menu">
                        <span>Всего задолженность</span>
                        <span style={{ fontFamily: "dindisplay_bold", color: "#ffbd2e", fontSize: "1.5em" }}>-1 918,58 р.</span>
                        <span>Всего начисленно за {month} {year}</span>
                        <span style={{ fontFamily: "dindisplay_bold", fontSize: "1.5em" }}>1 918,58 р.</span>
                        <div className="main_info-menu_button-wrapper">
                            <div id={goToMe(infoMenuButtons[0], activation) ? "buttonGoToMe" : ""}
                                className="main_info-menu_button-info">
                                {infoMenuButtons[0].title}
                            </div>
                            <div id={goToMe(navButtons[2], activation) ? "greenButtonGoToMe" : ""}
                                className="main_info-menu_button-pay"
                                onClick={() => {
                                    goToMe(navButtons[2], activation) &&
                                        (onNextStep(),
                                            setSelectedSlider(2))
                                }}>
                                {infoMenuButtons[1].title}
                            </div>
                        </div>
                    </div>
                </div>
            }

            <Home activation={activation} onNextStep={onNextStep} setSlider={setSelectedSlider} />


            {isActiveSliders && sliders[selectedSlider]}


            <nav className="main_nav-bar">
                {navButtons.map((button: TButton) => <div id={goToMe(button, activation) ? "buttonGoToMe" : ""}
                    onClick={() => {
                        goToMe(button, activation) &&
                            (onNextStep(),
                                setSelectedSlider(button.id))
                    }}
                    className="main_nav-bar_button" key={`${button.type}-${button.id}`}>
                    <img className="main_nav-bar_button-icon" src={require(`../../img/${button.icon}`)} alt={button.title} />
                    <span>{button.title}</span>
                </div>)}
            </nav>
        </div>
    )

}

export default Main;