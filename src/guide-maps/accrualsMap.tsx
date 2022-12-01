import { navButtons, payButtons, TButton, transactionButtons } from "@components/Main/buttons";
import { TActivation } from "../components/Guide/Guide"

const transactionMap: Array<TButton> = [   //Шаги для выделения и активации
    navButtons[2],
    payButtons[3],
    transactionButtons[2],
    transactionButtons[3],
    transactionButtons[4]
]

export const transactionCredits: Array<string> = [             //"Титры" для вывода после прохождения маршрута
    "Поздравляем!",
    "Теперь Вы знаете как просматривать историю транкзация.",
]


export default transactionMap;