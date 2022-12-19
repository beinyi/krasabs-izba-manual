import { ordersButton } from "@components/Main/buttons";
import { goToMe, props } from "@components/Main/Main"
import "@styles/Orders.css"
import { useState } from "react";
import OrdersItem from "./OrdersItem";
import { plumbingServices } from "./ServicesList";


const Orders = ({ activation, onNextStep }: props) => {
    const [selectedButton, setSelectedButton] = useState<'ordered' | 'archive'>('ordered')

    return (
        <div>
            <div className="orders_header">
                <div className="orders_header_title">
                    <img src={require(`../../../../img/ic_arrow_l.svg`)} />
                    <span>Мои заказы</span>
                </div>
                <div className="orders_header_button-wrapper">
                    <div id={goToMe(ordersButton[0], activation) ? "buttonGoToMe" : ""}
                        className={`orders_header_button ${selectedButton == 'ordered' && "orders_header_button-active"}`}

                        onClick={() => { setSelectedButton('ordered') }}>
                        Заказанные
                    </div>
                    <div id={goToMe(ordersButton[1], activation) ? "buttonGoToMe" : ""}
                        className={`orders_header_button ${selectedButton == 'archive' && "orders_header_button-active"}`}

                        onClick={() => { setSelectedButton('archive'); goToMe(ordersButton[1], activation) && onNextStep(); }}>
                        Архив
                    </div>
                </div>
            </div>

            <div className="orders-slide">
                {selectedButton == "ordered" ?
                    <div>
                        <OrdersItem status={"new"} number={4} service={plumbingServices[1]} />
                        <OrdersItem status={"work"} number={3} service={plumbingServices[2]} />
                    </div>
                    : <div>
                        <OrdersItem activation={activation} onNextStep={onNextStep} status={"done"} number={2} service={plumbingServices[3]} />
                        <OrdersItem status={"done"} number={1} service={plumbingServices[4]} rating={5} />


                    </div>}


            </div>
        </div>
    )
}

export default Orders;