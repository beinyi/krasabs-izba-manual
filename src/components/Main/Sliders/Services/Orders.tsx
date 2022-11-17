import { ordersButton } from "@components/Main/buttons";
import { goToMe, props } from "@components/Main/Main"
import "@styles/Orders.css"
import { useState } from "react";
import OrdersItem from "./OrdersItem";
import { plumbingServices } from "./ServicesList";


const Orders = ({ activation, onClose, onNextStep }: props) => {
    const [selectedButton, setSelectedButton] = useState<'ordered' | 'archive'>('ordered')

    return (
        <div>
            <div className="header">
                <div className="header_title">
                    <img src={require(`../../../../img/ic_arrow_l.svg`)}
                        onClick={() => onClose ? onClose() : {}} />
                    <span>Мои заказы</span>
                </div>
                <div className="header_button-pad">
                    <div id={goToMe(ordersButton[0], activation) ? "buttonGoToMe" : ""}
                        className={`header_button-pad_button ${selectedButton == 'ordered' && "header_button-pad_button_active"}`}
                        data-description={ordersButton[0].description}
                        onClick={() => { setSelectedButton('ordered') }}>
                        Заказанные
                    </div>
                    <div id={goToMe(ordersButton[1], activation) ? "buttonGoToMe" : ""}
                        className={`header_button-pad_button ${selectedButton == 'archive' && "header_button-pad_button_active"}`}
                        data-description={activation.altDescription ? "Нажмите ещё раз, чтобы отобразить все транзакции" : ordersButton[1].description}
                        onClick={() => { setSelectedButton('archive') }}>
                        Архив
                    </div>
                </div>
            </div>

            <div className="slide-menu">
                <OrdersItem status={"work"} number={12} service={plumbingServices[1]}/>
                <OrdersItem status={"new"} number={13} service={plumbingServices[2]}/>
                <OrdersItem status={"done"} number={14} service={plumbingServices[4]}/>

            </div>
        </div>
    )
}

export default Orders;