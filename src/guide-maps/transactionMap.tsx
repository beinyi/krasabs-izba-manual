import { navButtons, payButtons, TButton, transactionButtons } from "@components/Main/buttons";

const transactionMap: Array<TButton> = [   //Шаги для выделения и активации
    navButtons[2],
    payButtons[3],
    transactionButtons[0],
    transactionButtons[1],
    transactionButtons[1],

]

export const transactionCredits: Array<string> = [             //"Титры" для вывода после прохождения маршрута
    "Поздравляем!",
    "Теперь Вы знаете как просматривать историю транкзация.",
]


export default transactionMap;