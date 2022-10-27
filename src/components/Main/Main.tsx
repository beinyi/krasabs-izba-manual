import s from "../../style/Main.module.css"
import { TButton, navButtons } from "./buttons";
import { ReactNode, useEffect, useState } from "react";
import Home from "./Sliders/Home"
import Pay from "./Sliders/Pay/Pay";
import Services from "./Sliders/Services/Services";
import MainHeader from "./MainHeader";
import { TActivation } from "../Guide";

export type props = {               // Тип и номер для активации кнопки, функция для перехода на следующий шаг
    activation: TActivation,
    onNextStep(forward?: boolean): void
}

export const goToMe = (button: TButton, activation: TActivation): boolean => {     // Проверка кнопки на активацию. 
    return (activation.activeType === button.type && 
        activation.activeId === button.id)
}

export const date: Date = new Date();
export const month: string = date.toLocaleString("ru-RU", { month: 'long' });
export const year: number = date.getFullYear();

const Main = ({ activation, onNextStep }: props) => {

    const [selectedSlider, setSelectedSlider] = useState<number>(0);  // Активное слайд-меню
    const [isViewHeader, setIsViewHeader] = useState<boolean>(true);
    const [isActiveSliders, setIsActiveSliders] = useState<boolean>(false);

    useEffect(() => {
        switch (selectedSlider) {
            case 1 : {
                setIsViewHeader(false);
                break;
            }
            default : 
            setIsViewHeader(true);
        };

        selectedSlider != 0 ?    //Home всегда активен
        setIsActiveSliders(true)
        : setIsActiveSliders(false)

    },[selectedSlider])

    const sliders: Array<ReactNode> = [  // Массив слайд-меню
        <Home activation={activation} onNextStep={onNextStep} />, //Home всегда активен
        <Services activation={activation} onNextStep={onNextStep} />,   //Услуги
        <Pay activation={activation} onNextStep={onNextStep} />,

    ];

    return (
        <div className={s.page}>

            {isViewHeader &&
                <MainHeader mouth={month} year={year} activation={activation} />
            }

            <Home activation={activation} onNextStep={onNextStep} />


            {isActiveSliders && sliders[selectedSlider]}


            <nav className={s.navBar}>
                {navButtons.map((button: TButton) => <div id={goToMe(button, activation) ? s["buttonGoToMe"] : ""}
                    onClick={goToMe(button, activation) ?
                        () => {
                            onNextStep();
                            setSelectedSlider(button.id)
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