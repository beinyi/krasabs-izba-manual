import { TActivation } from "../components/Guide"

const checkOrderMap: Array<TActivation> = [   //Шаги для выделения и активации
    {
        activeType: "navBar",
        activeId: 1
    },
    {
        activeType: "servCategory",
        activeId: 5
    },
    {
        activeType: "orders",
        activeId: 1
    },
]


export const checkOrderCredits: Array<string> = [             //"Титры" для вывода после прохождения маршрута
    "Звонок в УК",
    "На экране появится запрос на разрешение осуществления телефонных звонков из приложения.",
    "Наше приложение не осуществляет звонки без вашего ведома. Так что, можете смело разрешать производить звонки.",
]


export default checkOrderMap;