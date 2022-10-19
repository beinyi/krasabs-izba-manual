
export type buttonTypes = 'infoMenu' | 'slideAct' | 'slideMeter' | 'navBar' | 'pay' | 'servCategory' | 'servItem';

export type TButton = {
    id: number,
    type: buttonTypes,
    title: string,
    icon: string | null,
    description?: string
}


export const infoMenuButtons: Array<TButton> = [
    {
        id: 0,
        type: 'infoMenu',
        title: "Начисления",
        icon: null
    },
    {
        id: 1,
        type: 'infoMenu',
        title: "Оплатить",
        icon: null
    }
]

export const actButtons: Array<TButton> = [
    {
        id: 0,
        type: 'slideAct',
        title: "Создать заявку на устранение неисправностей",
        icon: "ic_photo.svg"
    },
    {
        id: 1,
        type: 'slideAct',

        title: "Позвонить в УО",
        icon: "ic_phone.svg"
    }
]

export const meterButtons: Array<TButton> = [
    {
        id: 0,
        type: 'slideMeter',
        title: "Водоснабжение",
        icon: "ic_water.svg"
    },
    {
        id: 1,
        type: 'slideMeter',
        title: "Электроснабжение",
        icon: "ic_electro.svg"
    }
]

export const navButtons: Array<TButton> = [
    {
        id: 0,
        type: 'navBar',
        title: "Начало",
        icon: "ic_home.svg",
        description: ""
    },
    {
        id: 1,
        type: 'navBar',
        title: "Услуги",
        icon: "ic_serv.svg",
        description: "Чтобы перейти на страницу услуг, нажмите на эту кнопку"
    },
    {
        id: 2,
        type: 'navBar',
        title: "Оплатить",
        icon: "ic_pay.svg",
        description: "Чтобы перейти на страницу оплаты, нажмите на эту кнопку"
    },
    {
        id: 3,
        type: 'navBar',
        title: "Новости",
        icon: "ic_news.svg",
        description: ""
    },
    {
        id: 4,
        type: 'navBar',
        title: "Меню",
        icon: "ic_menu.svg",
        description: ""
    }
]

export const payButtons: Array<TButton> = [
    {
        id: 0,
        type: 'pay',
        title: "Картой",
        icon: "ic_card.svg",
        description: "Нажмите, чтобы перейти на страницу оплаты банка"
    },
    {
        id: 1,
        type: 'pay',
        title: "Сумма к оплате",
        icon: null,
        description: "Укажите сумму платежа"
    },
    {
        id: 2,
        type: 'pay',
        title: "Подтвердить",
        icon: "ic_check_on.svg",
        description: "Подтвердите, что согласны с условиями"
    }
]

export const servicesButtons: Array<TButton> = [
    {
        id: 0,
        type: 'servCategory',
        title: "Ремонт электроники",
        icon: "ic_tv.png",
        description: ""
    },
    {
        id: 1,
        type: 'servCategory',
        title: "Электрика",
        icon: "ic_electricity.png",
        description: ""
    },
    {
        id: 2,
        type: 'servCategory',
        title: "Сантехника",
        icon: "ic_plumbing.png",
        description: ""
    },
    {
        id: 3,
        type: 'servCategory',
        title: "Прочие работы",
        icon: "ic_tools.png",
        description: ""
    },
    {
        id: 4,
        type: 'servCategory',
        title: "Поиск...",
        icon: "ic_find.svg",
        description: ""
    },
    {
        id: 5,
        type: 'servCategory',
        title: "Мои заказы",
        icon: "",
        description: ""
    },
    {
        id: 6,
        type: 'servCategory',
        title: "Корзина",
        icon: "ic_basket.svg",
        description: ""
    }
]