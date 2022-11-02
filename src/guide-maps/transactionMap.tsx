import { TActivation } from "../components/Guide"

const transactionMap: Array<TActivation> = [   //Шаги для выделения и активации
    {
        activeType: "navBar",
        activeId: 2
    },
    {
        activeType: "pay",
        activeId: 3
    },
    {
        activeType: "transaction",
        activeId: 0
    },
    {
        activeType: "transaction",
        activeId: 1
    },
    {
        activeType: "transaction",
        activeId: 1,
        altDescription: true,
        timeout: true
    },

]

export const transactionCredits: Array<string> = [             //"Титры" для вывода после прохождения маршрута
    "Поздравляем!",
    "Теперь Вы знаете как просматривать историю транкзация.",
]


export default transactionMap;