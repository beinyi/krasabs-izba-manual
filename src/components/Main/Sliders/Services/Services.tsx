import {  servicesButtons, TButton } from "../../buttons";
import { goToMe, props } from "../../Main";
import s from "../../../../style/ServicesSlider.module.less"
import { useState } from "react";
import ServicesList, { TService } from "./ServicesList";
import Basket from "./Basket";

const Services = ({ activation, onNextStep }: props) => {

    const [viewServicesList, setViewServicesList] = useState<{
        isView: boolean,
        title: string | null
    }>({ isView: false, title: null });
    const [isViewBasket, setIsViewBasket] = useState<boolean>(false);
    const [basketContents, setBasketContents] = useState<Array<TService>>([]);


    const onBasket = () => {
        setIsViewBasket(!isViewBasket);
    }


    const onServices = (title: string | null) => {
        setViewServicesList({ isView: !viewServicesList.isView, title });
    }


    const renderButton = (button: TButton) => {
        return (
            <div id={goToMe(button, activation) ? s["buttonGoToMe"] : ""}
                data-description={button.description}
                onClick={goToMe(button, activation) ?
                    () => { onNextStep(); onServices(button.title); }
                    : () => { }}
                className={s.button} key={`${button.type}-${button.id}`}>
                <img
                    src={require(`../../../../img/${button.icon}`)} alt={button.title} />
                <span>{button.title}</span>
            </div>
        )
    }

    return (
        isViewBasket ?
            <Basket activation={activation}
            contents={basketContents} setContents={setBasketContents} 
            onClose={onBasket} onNextStep={onNextStep} />
            :
            <div>
                {viewServicesList.isView ?                                              // Заголовок -- либо главный, либо заголовок листа услуг
                    <div className={s.headerList}>
                        <div className={s.button}>
                            <img src={require(`../../../../img/ic_arrow_l.svg`)}
                                onClick={() => onServices(null)} />
                            <span>{viewServicesList.title}</span>
                        </div>
                    </div>
                    : <div className={s.header}>
                        <span>Заказать</span>
                        <div className={s.button}>
                            <img src={require(`../../../../img/ic_alarm.svg`)} />
                            Сообщить
                        </div>
                    </div>
                }

                <div className={s.slideMenu}>
                    <div id={goToMe(servicesButtons[4], activation) ? s["buttonGoToMe"] : ""}
                        className={s.search}
                        onClick={goToMe(servicesButtons[4], activation) ?
                            () => { onNextStep(); }
                            : () => { }}>
                        <img src={require(`../../../../img/${servicesButtons[4].icon}`)} alt={servicesButtons[4].title} />
                        Поиск...
                    </div>

                    {viewServicesList.isView ?                                                                // лист услуг, либо категории
                        <ServicesList activation={activation} onNextStep={onNextStep}
                            setBasketContents={setBasketContents} basketContents={basketContents} />
                        : <div className={s.buttonPad}>
                            {servicesButtons.filter((_v, i) => i < 4).map((button: TButton) => renderButton(button))}
                        </div>}



                    <div className={s.ordersButtons}>
                        <div id={goToMe(servicesButtons[5], activation) ? s["buttonGoToMe"] : ""}
                            className={`${s.button} ${basketContents.length > 0 && s.buttonBasketOn}`}
                            onClick={goToMe(servicesButtons[5], activation) ?
                                () => { onNextStep(); }
                                : () => { }}
                            data-description={servicesButtons[5].description}>
                            <span>Мои заказы</span>
                        </div>
                        <div id={goToMe(servicesButtons[6], activation) ? s["basketGoToMe"] : ""}
                            className={`${s.basket} ${basketContents.length > 0 && s.basketOn}`}
                            onClick={goToMe(servicesButtons[6], activation) ?
                                () => {
                                    onNextStep();
                                    onBasket();
                                }
                                : () => { onBasket(); }}
                            data-description={servicesButtons[6].description}>
                            <img src={require(`../../../../img/${servicesButtons[6].icon}`)} alt={servicesButtons[6].title} />
                            <span>{basketContents.length}</span>
                        </div>


                    </div>
                </div>
            </div>
    )

}

export default Services;