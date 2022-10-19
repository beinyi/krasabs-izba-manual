import { buttonTypes, servicesButtons, TButton } from "../../buttons";
import { props } from "../../Main";
import s from "../../../../style/ServicesSlider.module.less"
import { useState } from "react";
import ServicesList from "./ServicesList";

const Services = ({ activeType, activeId, onNextStep }: props) => {

    const [viewPlumbingList, setViewPlumbingList] = useState<boolean>(false);
    const [basketAmount, setBasketAmount] = useState<number>(0);

    const onPlumping = () => {
        setViewPlumbingList(!viewPlumbingList);
    }

    const goToMe = (type: buttonTypes, id: number): boolean => {     // Проверка кнопки на активацию. 
        return (activeType === type && activeId === id)
    }

    const renderButton = (button: TButton) => {
        return (
            <div id={goToMe(button.type, button.id) ? s["buttonGoToMe"] : ""}
                data-description={button.title}
                onClick={goToMe(button.type, button.id) ?
                    () => { onNextStep(); onPlumping(); }
                    : () => { }}
                className={s.button} key={`${button.type}-${button.id}`}>
                <img
                    src={require(`../../../../img/${button.icon}`)} alt={button.title} />
                <span>{button.title}</span>
            </div>
        )
    }

    return (
        <div className={s.slideMenu}>
            <div id={goToMe(servicesButtons[4].type, servicesButtons[4].id) ? s["buttonGoToMe"] : ""}
                className={s.search}
                onClick={goToMe(servicesButtons[4].type, servicesButtons[4].id) ?
                    () => { onNextStep(); }
                    : () => { }}
                data-description={servicesButtons[5].title}>
                <img src={require(`../../../../img/${servicesButtons[4].icon}`)} alt={servicesButtons[4].title} />
                Поиск...
            </div>

            {viewPlumbingList ?
                <ServicesList activeType={activeType} activeId={activeId} onNextStep={onNextStep} 
                setBasketAmount={setBasketAmount} basketAmount={basketAmount}/>
                : <div className={s.buttonPad}>
                    {servicesButtons.filter((_v, i) => i < 4).map((button: TButton) => renderButton(button))}
                </div>}



            <div className={s.ordersButtons}>
                <div id={goToMe(servicesButtons[5].type, servicesButtons[5].id) ? s["buttonGoToMe"] : ""}
                    className={`${s.button} ${basketAmount > 0 && s.buttonBasketOn}`}
                    onClick={goToMe(servicesButtons[5].type, servicesButtons[5].id) ?
                        () => { onNextStep(); }
                        : () => { }}
                    data-description={servicesButtons[5].title}>
                    <span>Мои заказы</span>
                </div>
                <div id={goToMe(servicesButtons[6].type, servicesButtons[6].id) ? s["buttonGoToMe"] : ""}
                    className={`${s.basket} ${basketAmount > 0 && s.basketOn}`}
                    onClick={goToMe(servicesButtons[6].type, servicesButtons[6].id) ?
                        () => { onNextStep(); }
                        : () => { }}
                    data-description={servicesButtons[6].description}>
                    <img src={require(`../../../../img/${servicesButtons[6].icon}`)} alt={servicesButtons[6].title} />
                    <span>{basketAmount}</span>
                </div>


            </div>
        </div>
    )

}

export default Services;