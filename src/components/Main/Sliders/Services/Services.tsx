import { servicesButtons, TButton } from "../../buttons";
import { goToMe, props } from "../../Main";
import "@styles/ServicesSlider.css"
import { useEffect, useState } from "react";
import ServicesList, { TService } from "./ServicesList";
import Basket from "./Basket";
import Orders from "./Orders";


const Services = ({ activation, onNextStep, setIsViewMainHeader }: props) => {

    const [viewServicesList, setViewServicesList] = useState<{
        isView: boolean,
        title: string | null
    }>({ isView: false, title: null });
    const [isViewBasket, setIsViewBasket] = useState<boolean>(false);
    const [isViewOrders, setIsViewOrders] = useState<boolean>(false);
    const [basketContents, setBasketContents] = useState<Array<TService>>([]);

    useEffect(() => {
        setIsViewMainHeader && setIsViewMainHeader(false);
    }, [])

    const onBasket = () => {
        setIsViewBasket(!isViewBasket);
    }


    const onServices = (title: string | null) => {
        setViewServicesList({ isView: !viewServicesList.isView, title });
    }

    const onOrders = () => {
        setIsViewOrders(!isViewOrders);
    }


    const renderButton = (button: TButton) => {
        return (
            <div id={goToMe(button, activation) ? "buttonGoToMe" : ""}
                onClick={() => { goToMe(button, activation) && (onNextStep(), onServices(button.title)) }}
                className="service-slide_button" key={`${button.type}-${button.id}`}>
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
            isViewOrders ?
                <Orders activation={activation}
                    onClose={onOrders} onNextStep={onNextStep} />
                :
                <div>
                    {viewServicesList.isView ?                                              // Заголовок -- либо главный, либо заголовок листа услуг
                        <div className="service_list-header">
                            <div className="service_list-header_button">
                                <img src={require(`../../../../img/ic_arrow_l.svg`)}
                                    onClick={() => onServices(null)} />
                                <span>{viewServicesList.title}</span>
                            </div>
                        </div>
                        : <div className="service_header">
                            <span>Заказать</span>
                            <div className="service_header_button">
                                <img src={require(`../../../../img/ic_alarm.svg`)} />
                                Сообщить
                            </div>
                        </div>
                    }

                    <div className="service-slide">
                        <div id={goToMe(servicesButtons[4], activation) ? "buttonGoToMe" : ""}
                            className="service-slide_search"
                            onClick={() => { goToMe(servicesButtons[4], activation) && onNextStep() }}>
                            <img src={require(`../../../../img/${servicesButtons[4].icon}`)} alt={servicesButtons[4].title} />
                            Поиск...
                        </div>

                        {viewServicesList.isView ?                                                                // лист услуг, либо категории
                            <ServicesList activation={activation} onNextStep={onNextStep}
                                setBasketContents={setBasketContents} basketContents={basketContents} />
                            : <div className="service-slide_button-wrapper">
                                {servicesButtons.filter((_v, i) => i < 4).map((button: TButton) => renderButton(button))}
                            </div>}



                        <div className="service-slide_orders-buttons-wrapper">
                            <div id={goToMe(servicesButtons[5], activation) ? "buttonGoToMe" : ""}
                                className={`${"service-slide_orders-button"} ${basketContents.length > 0 && "service-slide_basket-active-button"}`}
                                onClick={() => {
                                    goToMe(servicesButtons[5], activation) &&
                                        (onOrders(), onNextStep())
                                }}>
                                <span>Мои заказы</span>
                            </div>
                            <div id={goToMe(servicesButtons[6], activation) ? "greenButtonGoToMe" : ""}
                                className={`${"service-slide_basket-button"} ${basketContents.length > 0 && "service-slide_basket-active"}`}
                                onClick={goToMe(servicesButtons[6], activation) ?
                                    () => {
                                        onNextStep();
                                        onBasket();
                                    }
                                    : () => { onBasket(); }}>
                                <img src={require(`../../../../img/${servicesButtons[6].icon}`)} alt={servicesButtons[6].title} />
                                <span>{basketContents.length}</span>
                            </div>


                        </div>
                    </div>
                </div>
    )

}

export default Services;