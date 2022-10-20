import { date } from "../../Main"
import { TService } from "./ServicesList"
import s from "../../../../style/Basket.module.css"
import { buttonTypes } from "../../buttons"
import { useEffect } from "react"

type basketProps = {
    contents: Array<TService>,
    setContents(contents: Array<TService>): void,
    onClose(): void
}

const Basket = ({ contents, setContents, onClose }: basketProps) => {



    const amount = (): number =>
        contents.reduce((sum, item) =>
            (sum + item.price * item.amount), 0)

    const tomorrow: string = `${date.getDate() + 1}.${date.getMonth() + 1}.${date.getFullYear()}`;

    const onChangeAmount = (id: number, type: buttonTypes, plus: boolean) => {
        contents.forEach((serv: TService, i: number, arr: Array<TService>) => {
            if (serv.id == id && serv.type == type) {
                plus ? (
                    arr[i] = {
                        ...arr[i],
                        amount: serv.amount + 1
                    },
                    setContents([...arr])
                )
                    :
                    serv.amount > 1 ? (
                        arr[i] = {
                            ...arr[i],
                            amount: serv.amount - 1
                        },
                        setContents([...arr])
                    )
                        : {}
            }

        })
    }

    return (
        <div className={s.slideMenu}>
            <div className={s.header}>
                <span>В корзине {contents.length} услуги на {amount()} руб.</span>
                <img onClick={() => {onClose()}} src={require('../../../../img/ic_close.svg')} />
            </div>

            <div className={s.dataPad}>
                <div className={s.date}>
                    <img src={require('../../../../img/ic_date.svg')} />
                    <span>{tomorrow}</span>
                </div>
                <div className={s.date}>
                    <img src={require('../../../../img/ic_time.svg')} />
                    <span>13:00 - 17:00</span>
                </div>
                <div className={s.input}>Имя...</div>
                <div className={s.input}>Телефон...</div>
                <span style={{ textDecoration: "underline" }}>Оставить комментарий</span>
            </div>

            <div className={s.order}>
                <span style={{
                    fontFamily: 'dindisplay_bold',
                    fontSize: "1.25em"
                }}>Заказ</span>
                {contents.map((serv: TService) =>
                    <div className={s.service}>
                        <span>{serv.title}</span>
                        <span>{serv.price} р.</span>
                        <div className={s.amount}>
                            <img onClick={() => onChangeAmount(serv.id, serv.type, false)} src={require('../../../../img/ic_minus.svg')} />
                            <span>{serv.amount}</span>
                            <img onClick={() => onChangeAmount(serv.id, serv.type, true)} src={require('../../../../img/ic_plus.svg')} />
                        </div>
                        <div style={{
                            gridColumn: "1 / 3",
                            borderBottom: "1px solid #d2d7da",
                            marginTop: "5%"
                        }}></div>
                    </div>
                )}

            </div>

        </div>
    )
}

export default Basket;