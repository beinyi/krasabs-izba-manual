import { date, props } from "@components/Main/Main";
import "@styles/Orders.css"
import { TService } from "./ServicesList";

type ordersItemProps = props & {
    status: keyof typeof statusText,
    number: number,
    service: TService,
}

enum statusText {
    new = "Новая",
    done = "Выполнена",
    work = "В работе"
}

enum statusColor {
    new = " #1f4a7e",
    done = "#6bb037",
    work = "#f99d68"
}


const OrdersItem = ({ activation, onNextStep, status, number, service }: ordersItemProps) => {

    const today: Date = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    const yesterday: Date = new Date(date.getFullYear(), date.getMonth(), date.getDate() - 1);

    const getDateString = (date: Date): string => `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`

    const ratingArray = (rating: number): Array<boolean> => {
        const array: Array<boolean> = [];
        for (let i = 0; i < 5; i++) {
            array[i] = i < rating
        }
        return array;
    }

    return (<div className="order-item">
        <div className="order-item_status">
            <img src={require(`../../../../img/ic_serv_stat_${status}.svg`)} />
            <span style={{ color: `${statusColor[status]}` }}>{statusText[status]}</span>
        </div>
        <div className="order-item_info">
            <span style={{ fontFamily: "dindisplay_bold" }}>Заявка № {number}</span>
            <span style={{
                justifySelf: "right",
                color: "#727983"
            }}>{status == "done" ? getDateString(yesterday) : getDateString(today)}</span>

            <span>Сантехника</span>
            <span style={{ justifySelf: "right" }}>1 шт, {service.price} р.</span>

            <span style={{ gridColumn: "1/3" }}>{service.title.substring(0, service.title.lastIndexOf(','))}</span>
        </div>

        {status == "done" &&
            <div className="order-item_done">
                <div className="order-item_done_rating">
                    {ratingArray(4).map((rating: boolean) =>
                        <img src={rating ? require("@img/ic_star_rating.svg") : require("@img/ic_star.svg")} />
                    )}
                </div>
                <span>Ответ УК:</span>
            </div>
        }

        <div style={{
            gridColumn: "1 / 3",
            borderBottom: "1px solid #d2d7da",
            marginTop: "5%"
        }}></div>
    </div>);
}

export default OrdersItem;