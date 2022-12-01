import { navButtons, payButtons, TButton } from "@components/Main/buttons";

const payMap: Array<TButton> = [   //Шаги для выделения и активации
    navButtons[2],
    payButtons[1],
    payButtons[2],
    payButtons[0],
]

export const payCredits: Array<string> = [             //"Титры" для вывода после прохождения маршрута
    "Оплата через банковскую платежную систему",
    "Далее Вы попадете на страницу банка.",
    "Вам необходимо заполнить данные карты и принять Соглашение о защите персональных данных.",
    "Не волнуйтесь за сохранность данных Вашей карты. Оплата производится через защищенное соединение банка."
]


export default payMap;