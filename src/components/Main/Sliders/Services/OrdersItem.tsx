import { ordersButton, TButton } from "@components/Main/buttons";
import { date, goToMe } from "@components/Main/Main";
import "@styles/Orders.css"
import React, { useState } from "react";
import { TService } from "./ServicesList";

type ordersItemProps = {
    activation?: TButton,
    onNextStep?(): void,
    status: keyof typeof statusText,
    number: number,
    service: TService,
    rating?: number,
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


const OrdersItem = ({ activation, onNextStep, status, number, service, rating }: ordersItemProps) => {
    const [ratingSlide, setRatingSlede] = useState<boolean>(false);
    const [newRating, setNewRating] = useState<number>(0);
    const [comment, setComment] = useState<string>("Коментарий...")

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

    const onCommentClick = (e: React.MouseEvent<HTMLDivElement>) => {
        setComment("Всё отлично! Спасибо!");
        e.currentTarget.style.color = "white";
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
                <div className="order-item_done_rating"
                    id={activation && goToMe(ordersButton[2], activation) ? "buttonGoToMe" : ""}
                    
                    onClick={() => rating ?? (setRatingSlede(true),
                        activation && goToMe(ordersButton[2], activation) && onNextStep && onNextStep())}>
                    {ratingArray(rating ?? newRating).map((rating: boolean, i: number) =>
                        <img src={rating ? require("@img/ic_star_rating.svg") : require("@img/ic_star.svg")}
                        key={i} />
                    )}
                </div>
            </div>
        }

        <div style={{
            gridColumn: "1 / 3",
            borderBottom: "1px solid #d2d7da",
            marginTop: "5%"
        }}></div>

        {ratingSlide &&
            <div className="shading">
                <div className="order-item_rating-slide">
                    <div className="order-item_rating-slide_header"
                        onClick={() => { setRatingSlede(false) }}>
                        <img src={require("@img/ic_arrow_d.svg")} />
                    </div>
                    <span>Оцените качество выполнения</span>

                    <div className="order-item_rating-slide_rating"
                        id={activation && goToMe(ordersButton[3], activation) ? "buttonGoToMe" : ""}
                        
                        onClick={() => { activation && goToMe(ordersButton[3], activation) && onNextStep && onNextStep() }}>
                        {ratingArray(newRating).map((rating: boolean, i: number) =>
                            <img src={rating ? require("@img/ic_star_rating.svg") : require("@img/ic_star.svg")}
                            key={i}
                                onMouseOver={() => setNewRating(i + 1)}
                                onClick={() => setNewRating(i + 1)}/>
                        )}
                    </div>

                    <div className="order-item_rating-slide_comment"
                        id={activation && goToMe(ordersButton[4], activation) ? "buttonGoToMe" : ""}
                        style={{ color: "#999" }}
                        

                        onClick={(e: React.MouseEvent<HTMLDivElement>) => {
                            activation && goToMe(ordersButton[4], activation) && onNextStep &&
                                (onNextStep(), onCommentClick(e))
                        }}>
                        {comment}
                    </div>

                    <div className="order-item_rating-slide_button"
                        id={activation && goToMe(ordersButton[5], activation) ? "buttonGoToMe" : ""}
                        
                        onClick={() => { activation && goToMe(ordersButton[5], activation) && onNextStep && (setRatingSlede(false), onNextStep()) }}>
                        Оценить
                    </div>

                </div>

            </div>
        }
    </div>);
}

export default OrdersItem;