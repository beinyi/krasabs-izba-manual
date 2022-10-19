import { buttonTypes } from "../../buttons"
import s from "../../../../style/ServicesSlider.module.less"
import { props } from "../../Main"
import ServItem from "./ServItem"

export type TService = {
    id: number,
    type: buttonTypes,
    title: string,
    price: number,
    rating?: number,
    orders?: number
}

type ServicesListProps = props & {setBasketAmount(i: number): void, basketAmount: number}

const plumbingServices: Array<TService> = [
    {
        id: 0,
        type: 'servItem',
        title: "Замена радиаторов отопления, секц.",
        price: 1500,
        rating: 5,
        orders: 16
    },
    {
        id: 1,
        type: 'servItem',
        title: "Замена полотенцесушителя, шт",
        price: 2000,
        rating: 3,
        orders: 19
    },
    {
        id: 2,
        type: 'servItem',
        title: "Установка ванны акриловой, шт",
        price: 2250,
        rating: 5,
        orders: 8
    },
    {
        id: 3,
        type: 'servItem',
        title: "Отключение и включение стояка системы отопления, стояк",
        price: 320,
        rating: 5,
        orders: 7
    },
    {
        id: 4,
        type: 'servItem',
        title: "Отключение и включение стояка системы холодного водоснабжения, стояк",
        price: 280,
        rating: 5,
        orders: 7
    }, {
        id: 5,
        type: 'servItem',
        title: "Вызов инженера-сантехника на дом/оценка стоимости работ, концультации по перепланировке сантехнического оборудования, рекомендации в подборе необходимых материалов и их количества, час",
        price: 320,
        orders: 8
    }, {
        id: 6,
        type: 'servItem',
        title: "Замена водоразборного крана",
        price: 520,
        orders: 5
    }, {
        id: 7,
        type: 'servItem',
        title: "Замена смесителя без душа, шт",
        price: 320,
    }, {
        id: 8,
        type: 'servItem',
        title: "Установка электронного смесителя, шт",
        price: 1000,
    },
]

const Plumbing = ({ activeType, activeId, onNextStep, setBasketAmount, basketAmount }: ServicesListProps) => {

    const goToMe = (type: buttonTypes, id: number): boolean => {     // Проверка кнопки на активацию. 
        return (activeType === type && activeId === id)
    }

    const selectedServ: Array<number> = [];


    return (
        <div>
            {plumbingServices.map((serv: TService) =>

                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    borderRadius: "15px",
                    marginLeft: "-5%",
                    marginRight: "-5%",
                    padding: "5%",
                }}
                    id={goToMe(serv.type, serv.id) ? s["buttonGoToMe"] : ""}
                    onClick={goToMe(serv.type, serv.id) ?
                        () => { onNextStep(); }
                        : () => { }}
                    key={serv.id}>

                    <ServItem service={serv} setBasketAmount={setBasketAmount} basketAmount={basketAmount}/>

                </div>
            )}
        </div>
    )
}

export default Plumbing;