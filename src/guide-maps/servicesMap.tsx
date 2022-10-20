import { TActivation } from "../components/Guide"

const servicesMap: Array<TActivation> = [   //Шаги для выделения и активации
    {
        activeType: "navBar",
        activeId: 1
    },
    {
        activeType: "servCategory",
        activeId: 2
    },
    {
        activeType: "navBar",
        activeId: 4
    },

]

export const servicesCredits: Array<string> = [             //"Титры" для вывода после прохождения маршрута
    "Оплата через банковскую платежную систему",
    "Далее Вы попадете на страницу банка.",
    "Вам необходимо заполнить данные карты и принять Соглашение о защите персональных данных.",
    "Не волнуйтесь за сохранность данных Вашей карты. Оплата производится через защищенное соединение банка."
]


export default servicesMap;