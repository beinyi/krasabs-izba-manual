import { basketButtons, navButtons, servicesButtons, TButton } from "@components/Main/buttons";
import { plumbingServices } from "@components/Main/Sliders/Services/ServicesList";
import { TActivation } from "../components/Guide/Guide"

const servicesMap: Array<TButton> = [   //Шаги для выделения и активации
    navButtons[1],
    servicesButtons[2],
    plumbingServices[0],
    plumbingServices[1],
    servicesButtons[6],
    basketButtons[0],
    basketButtons[1],
    basketButtons[2],
]

export const servicesCredits: Array<string> = [             //"Титры" для вывода после прохождения маршрута
    "Заявка оформлена!",
    "После оформления проверить статус заявки можно в разделе \"Мои заказы\".",
    "Сообщение об изменении статуса будет в уведомлениях в главном меню."
]


export default servicesMap;