

export type TButton = {
    id: number,
    title: string,
    icon: string
}

export const actButtons: Array<TButton> = [
    {
        id: 0,
        title: "Создать заявку на устранение неисправностей",
        icon: "ic_photo.svg"
    },
    {
        id: 1,
        title: "Позвонить в УО",
        icon: "ic_phone.svg"
    }
]

export const meterButtons: Array<TButton> = [
    {
        id: 0,
        title: "Водоснабжение",
        icon: "ic_water.svg"
    },
    {
        id: 1,
        title: "Электроснабжение",
        icon: "ic_electro.svg"
    }
]

