import { TButton } from "../../buttons"
import "@styles/ServicesSlider.css"
import { goToMe, props } from "../../Main"
import ServItem from "./ServItem"

export type TService = TButton & {
    price: number,
    rating?: number,
    orders?: number,
    amount: number,
    description?: string
}


type servicesListProps = props & {
    setBasketContents(i: Array<TService>): void,
    basketContents: Array<TService>
}

export const plumbingServices: Array<TService> = [
    {
        id: 0,
        type: 'servItem',
        title: "Замена радиаторов отопления, секц.",
        price: 1500,
        rating: 5,
        orders: 16,
        amount: 1,
        description: "Выберите нужную услугу.",
        descriptionPosition: 'service',
    },
    {
        id: 1,
        type: 'servItem',
        title: "Замена полотенцесушителя, шт",
        price: 2000,
        rating: 3,
        orders: 19,
        amount: 1,
        description: "При необходимости можно выбрать несколько.",
        descriptionPosition: 'service',
    },
    {
        id: 2,
        type: 'servItem',
        title: "Установка ванны акриловой, шт",
        price: 2250,
        rating: 5,
        orders: 8,
        amount: 1
    },
    {
        id: 3,
        type: 'servItem',
        title: "Отключение и включение стояка системы отопления, стояк",
        price: 320,
        rating: 5,
        orders: 7,
        amount: 1
    },
    {
        id: 4,
        type: 'servItem',
        title: "Отключение и включение стояка системы холодного водоснабжения, стояк",
        price: 280,
        rating: 5,
        orders: 7,
        amount: 1
    }, {
        id: 5,
        type: 'servItem',
        title: "Вызов инженера-сантехника на дом/оценка стоимости работ, концультации по перепланировке сантехнического оборудования, рекомендации в подборе необходимых материалов и их количества, час",
        price: 320,
        orders: 8,
        amount: 1
    }, {
        id: 6,
        type: 'servItem',
        title: "Замена водоразборного крана",
        price: 520,
        orders: 5,
        amount: 1
    }, {
        id: 7,
        type: 'servItem',
        title: "Замена смесителя без душа, шт",
        price: 320,
        amount: 1
    }, {
        id: 8,
        type: 'servItem',
        title: "Установка электронного смесителя, шт",
        price: 1000,
        amount: 1
    },
]

const ServicesList = ({ activation, onNextStep, setBasketContents, basketContents }: servicesListProps) => {

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
                    id={goToMe(serv, activation) ? "buttonGoToMe" : ""}
                    onClick={() => { goToMe(serv, activation) && onNextStep(); }}
                    key={serv.id}>

                    <ServItem service={serv} setBasketContents={setBasketContents} basketContents={basketContents} />

                </div>
            )}
        </div>
    )
}

export default ServicesList;