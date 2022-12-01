import { date, goToMe, props } from "../../Main"
import { TService } from "./ServicesList"
import "@styles/Basket.css"
import { basketButtons, buttonTypes } from "../../buttons"
import React, { ReactComponentElement, useEffect, useState } from "react"

type basketProps = props & {
    contents: Array<TService>,
    setContents(contents: Array<TService>): void,
}

const Basket = ({ activation, contents, setContents, onClose, onNextStep }: basketProps) => {

    const [nameInput, setNameInput] = useState<string>("Имя...");
    const [numberInput, setNumberInput] = useState<string>("Телефон...");
    const [isEdit, setIsEdit] = useState<boolean>(true);
    const [isInputsDone, setIsInputsDone] = useState<boolean>(false);

    useEffect(() => {
        if (nameInput != "Имя..." && numberInput.length == 12)
        {
            onNextStep();
            setIsInputsDone(true);
            setIsEdit(false);
        } 
        
    }, [nameInput, numberInput])

    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>, 
        inputType: "name" | "number") => {
            inputType === "name" ?
        setNameInput(e.target.value)
        : setNumberInput(e.target.value)
    }

    const amount = (): number =>
        contents.reduce((sum, item) =>
            (sum + item.price * item.amount), 0)

    const tomorrow: Date = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1);

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
        <div className="basket-slide">
            <div className="basket-slide_header">
                <span>В корзине {contents.length} услуги на {amount()} руб.</span>
                <img onClick={() => {onClose ? onClose() : {}; onNextStep(false); }} src={require('@img/ic_close.svg')} />
            </div>

            <div className="basket-slide_data-wrapper">
                <div className="basket-slide_data-wrapper_date"
                    id={goToMe(basketButtons[0], activation) ? "buttonGoToMe" : ""}
                    
                    onClick={goToMe(basketButtons[0], activation) ? () =>
                        onNextStep()
                        : () => { }}>
                    <img src={require('@img/ic_date.svg')} />
                    <span>{`${tomorrow.getDate()}.${tomorrow.getMonth() + 1}.${tomorrow.getFullYear()}`}</span>
                </div>

                <div className="basket-slide_data-wrapper_date"
                    id={goToMe(basketButtons[0], activation) ? "buttonGoToMe2" : ""}
                    onClick={goToMe(basketButtons[0], activation) ? () =>
                        onNextStep()
                        : () => { }}>
                    <img src={require('@img/ic_time.svg')} />
                    <span>13:00 - 17:00</span>
                </div>

                <div className="basket-slide_data-wrapper_input"
                    id={goToMe(basketButtons[1], activation) ? "buttonGoToMe" : ""}
                    
                    onClick={goToMe(basketButtons[1], activation) && isInputsDone ? 
                        () => onNextStep()
                        : () => isEdit && setNameInput("")}>
                    <input value={nameInput} 
                    readOnly={!isEdit}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => onInputChange(e, "name")} />
                    </div>

                <div className="basket-slide_data-wrapper_input"
                    id={goToMe(basketButtons[1], activation) ? "buttonGoToMe2" : ""}
                    onClick={goToMe(basketButtons[1], activation) && isInputsDone ? 
                        () => onNextStep()
                        : () => isEdit && setNumberInput("+7")}>
                    <input value={numberInput} 
                    readOnly={!isEdit}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => onInputChange(e, "number")} />
                </div>

                <span style={{ textDecoration: "underline" }}>Оставить комментарий</span>
            </div>

            <div className="basket-slide_order">
                <span style={{
                    fontFamily: 'dindisplay_bold',
                    fontSize: "1.25em"
                }}>Заказ</span>
                {contents.map((serv: TService) =>
                    <div className="basket-slide_order_service" key={serv.id}>
                        <span>{serv.title}</span>
                        <span>{serv.price} р.</span>
                        <div className="basket-slide_order_service_amount">
                            <img onClick={() => onChangeAmount(serv.id, serv.type, false)} src={require('@img/ic_minus.svg')} />
                            <span>{serv.amount}</span>
                            <img onClick={() => onChangeAmount(serv.id, serv.type, true)} src={require('@img/ic_plus.svg')} />
                        </div>
                        <div style={{
                            gridColumn: "1 / 3",
                            borderBottom: "1px solid #d2d7da",
                            marginTop: "5%"
                        }}></div>
                    </div>
                )}

                <div className="basket-slide_button"
                    id={goToMe(basketButtons[2], activation) ? "greenButtonGoToMe" : ""}
                    
                    onClick={goToMe(basketButtons[2], activation) ? () =>
                        onNextStep()
                        : () => { }}
                >
                    <span>Оформить заявку</span>
                </div>

            </div>

        </div>
    )
}

export default Basket;