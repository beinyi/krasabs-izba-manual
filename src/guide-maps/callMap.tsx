import { TActivation } from "../components/Guide"

const callMap: Array<TActivation> = [   //Шаги для выделения и активации
    {
        activeType: "slideAct",
        activeId: 1
    },
]

export const callCredits: Array<string> = [             //"Титры" для вывода после прохождения маршрута
    "Звонок в УК",
    "На экране появится запрос на разрешение осуществления телефонных звонков из приложения.",
    "Наше приложение не осуществляет звонки без вашего ведома. Так что, можете смело разрешать производить звонки.",
]


export default callMap;