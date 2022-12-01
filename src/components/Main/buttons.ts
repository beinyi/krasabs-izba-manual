import { descriptionPositions } from "@components/Guide";

export type buttonTypes = 
'infoMenu' | 'slideAct' | 'slideMeter' | 
'navBar' | 'pay' | 'servCategory' | 
'servItem' | 'basket' | 'transaction' |
'orders' | 'request' | 'noType';

export type TButton = {
    id: number,
    type: buttonTypes,
    title: string,
    icon?: string | null,
    description?: string
    altDescription?: string,
    descriptionPosition?: keyof typeof descriptionPositions;
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
        icon: "ic_phone.svg",
        description: "Чтобы позвонить в УК, достаточно нажать эту кнопку",
        descriptionPosition: 'service'

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
        description: "Перейти на страницу оплаты можно с помощью этих кнопок"
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
        description: "Нажмите, чтобы перейти на страницу оплаты банка",
        descriptionPosition: 'pay',
    },
    {
        id: 1,
        type: 'pay',
        title: "Сумма к оплате",
        icon: null,
        description: "Укажите сумму платежа",
        descriptionPosition: 'pay',
    },
    {
        id: 2,
        type: 'pay',
        title: "Подтвердить",
        icon: 'ic_check_on.svg',
        description: "Подтвердите, что согласны с условиями",
        descriptionPosition: 'pay',
    },
    {
        id: 3,
        type: 'pay',
        title: "История транзакций",
        icon: "",
        description: "Здесь можно посмотреть историю транзакций",
        descriptionPosition: 'service',
    },
]

export const transactionButtons: Array<TButton> = [
    {
        id: 0,
        type: 'transaction',
        title: "Платежи",
        icon: "",
        description: "Нажмите, чтобы отобразить только платежи"
    },
    {
        id: 1,
        type: 'transaction',
        title: "Начисления",
        icon: "",
        description: "Нажмите, чтобы отобразить только начисления",
        altDescription: "Нажмите ещё раз, чтобы отобразить все транзакции"
    },
    {
        id: 2,
        type: 'transaction',
        title: "Начисление",
        icon: "",
        description: "Нажмите, чтобы посмотреть начисления за месяц"
    },
    {
        id: 3,
        type: 'transaction',
        title: "Платёжный документ",
        icon: "",
        description: "Чтобы открыть платёжный документ, нажмите эту кнопку",
        descriptionPosition: 'service',
    },
    {
        id: 4,
        type: 'transaction',
        title: "Swipe",
        icon: "",
        description: "Свайпом можно изменить месяц",
        descriptionPosition: 'service',
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
        description: "Выберите нужную категорию или воспользуйтесь поиском",
        descriptionPosition: 'service',
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
        description: "Перейдите в \"Мои заказы\", чтобы посмотреть ранее заказанные услуги",
        descriptionPosition: 'service',
    },
    {
        id: 6,
        type: 'servCategory',
        title: "Корзина",
        icon: "ic_basket.svg",
        description: "Для оформления заказа перейдите в корзину.",
        descriptionPosition: 'service',
    }
]

export const basketButtons: Array<TButton> = [
    {
        id: 0,
        type: 'basket',
        title: "",
        description: "Выберите удобные дату и время.",
        descriptionPosition: 'service',
    },
    {
        id: 1,
        type: 'basket',
        title: "",
        description: "Укажите контактную информацию и оставьте комментарий при необходимости.",
        descriptionPosition: 'service',
    },
    {
        id: 2,
        type: 'basket',
        title: "",
        description: "После этого можно оформить заявку.",
        descriptionPosition: 'service',
    }

]

export const ordersButton: Array<TButton> = [
    {
        id: 0,
        type: 'orders',
        title: "Заказанные",
        description: ""
    },
    {
        id: 1,
        type: 'orders',
        title: "Архив",
        description: "В разделе \"Заказанные\" отображаются активные заказы (новые, либо находящиеся в работе)." +
        " Перейдите в \"Архив\" для просмотра выполненных заказов"
    },
    {
        id: 2,
        type: 'orders',
        title: "Рейтинг",
        description: "После выполнения можно оценить предоставленную услугу"
    },
    {
        id: 3,
        type: 'orders',
        title: "Оценка",
        description: "Оцените качество предоставленной услуги",
        descriptionPosition: 'rating'
    },
    {
        id: 4,
        type: 'orders',
        title: "Комментарий",
        description: "При необходимости добавьте комментарий",
        descriptionPosition: 'rating'
    },
    {
        id: 5,
        type: 'orders',
        title: "Оценить",
        description: "Не забудьте отправить отзыв",
        descriptionPosition: 'rating'
    },



]


export const requestButton: Array<TButton> = [
    {
        id: 0,
        type: 'request',
        title: "Имя",
        description: ""
    },
    



]
