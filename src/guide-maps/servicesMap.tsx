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
        activeType: "servItem",
        activeId: 0
    },
    {
        activeType: "servItem",
        activeId: 1
    },
    {
        activeType: "servCategory",
        activeId: 6
    },
    {
        activeType: "basket",
        activeId: 0
    },
    {
        activeType: "basket",
        activeId: 1
    },
    {
        activeType: "basket",
        activeId: 2
    },

]

export const servicesCredits: Array<string> = [             //"Титры" для вывода после прохождения маршрута
    "Заявка оформлена!",
    "После оформления проверить статус заявки можно в разделе \"Мои заказы\".",
    "Сообщение об изменении статуса будет в уведомлениях в главном меню."
]


export default servicesMap;