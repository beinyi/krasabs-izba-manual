import { useState } from "react"
import { TService } from "./ServicesList"

type serviceItemProps = {
    service: TService,
    setBasketAmount(i: number): void,
    basketAmount: number
}


const ServItem = ({ service, setBasketAmount, basketAmount }: serviceItemProps) => {

    const [isSelected, setSelected] = useState<boolean>(false);

    const onSelected = () => {
        !isSelected ?
        setBasketAmount(basketAmount + 1)
        : setBasketAmount(basketAmount - 1)
        setSelected(!isSelected);
    }

    return (
        <div onClick={() => onSelected()}>
            <div style={{
                display: "flex"
            }}>
                {'orders' in service &&
                    <span style={{ color: "#666" }}>Заказов: {service.orders}</span>}
                {'rating' in service &&

                    <div style={{
                        display: "flex",
                        marginLeft: "auto",
                        alignItems: "center"
                    }}>
                        <img style={{ height: "10px" }} src={require('../../../../img/ic_star.svg')} />
                        <span style={{
                            color: "#666"
                        }}> {service.rating}.0</span>
                    </div>}

            </div>

            <span style={{ fontFamily: "dindisplay_bold" }}>{service.title}</span>

            <div style={{
                display: "flex"
            }}>
                <span style={{ fontFamily: "dindisplay_bold" }}>{service.price} р.</span>
                <div style={{ marginLeft: "auto" }}>
                    {isSelected ?
                        <img style={{ height: "25px" }} src={require('../../../../img/ic_check_on.svg')} />
                        : <img style={{ height: "25px" }} src={require('../../../../img/ic_check_off.svg')} />}
                </div>
            </div>
            <span>Поставщик: УК Демо</span>
            <div style={{
                borderBottom: "1px solid #d2d7da"
            }}></div>
        </div>
    )
}

export default ServItem;