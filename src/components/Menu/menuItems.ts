export type menuGroup = {
    id: number,
    title: string
}

export type menuItem = {
    id: number,
    group: number,
    title: string,
    link: string
}

export const menuGroups: Array<menuGroup> = [
    {
        id: 0,
        title: "Оплатить"
    },
    {
        id: 1,
        title: "Сообщить"
    },
    {
        id: 2,
        title: "Заказать"
    }
]

export const menuItems: Array<menuItem> = [
    {
        id: 0,
        group: 0,
        title: "Как оплатить счет",
        link: "pay_guide"
    },
    {
        id: 1,
        group: 0,
        title: "Как посмотреть транзакции",
        link: "transaction_guide"
    },
    {
        id: 2,
        group: 0,
        title: "Как посмотреть начисления",
        link: "accruals_guide"
    },
    {
        id: 3,
        group: 1,
        title: "Как написать заявку на устранение неисправностей",
        link: "make_request"
    },
    {
        id: 4,
        group: 1,
        title: "Как позвонить в УК",
        link: "call_to_mc"
    },
    {
        id: 5,
        group: 1,
        title: "Как передать показания счётчиков и просмотреть историю по ним",
        link: "send_meter"
    },
    {
        id: 6,
        group: 2,
        title: "Как заказать услугу",
        link: "make_order"
    },
    {
        id: 7,
        group: 2,
        title: "Как просмотреть заказанные услуги",
        link: "check_order"
    },
]