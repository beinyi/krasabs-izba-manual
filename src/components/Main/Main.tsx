import s from "../../style/Main.module.css"
import { actButtons, TButton, meterButtons } from "./slideMenu";
import { navItems } from "./navItems";


const Main = () => {
    const date: Date = new Date();
    const mouth: string = date.toLocaleString("ru-RU", { month: 'long' });
    const year: number = date.getFullYear();


    return (
        <div className={s.page}>

            <div className={s.header}>
                <div className={s.user}>
                    <img className={s.icon} src={require('../../img/person.svg')} alt="Профиль"/>
                    <div className={s.userInfo}>
                        <span style={{ fontFamily: "dindisplay_bold", fontSize: "1.25em" }}>ЛС №00000000000</span>
                        <span>г. Красноярск, ул. Гагарина, д. 27, кв. 6 </span>
                    </div>
                    <img style={{height: "10px"}}  src={require('../../img/ic_arrow_d.svg')} />
                </div>

                <img style={{marginLeft: "auto"}} className={s.icon} src={require('../../img/ic_bell.svg')} alt="Уведомления" />

            </div>

            <div className={s.infoMenu}>
                <span>Всего задолженность</span>
                <span style={{ fontFamily: "dindisplay_bold", color: "#ffbd2e", fontSize: "1.5em" }}>-1 918,58 р.</span>
                <span>Всего начисленно за {mouth} {year}</span>
                <span style={{ fontFamily: "dindisplay_bold", fontSize: "1.5em" }}>1 918,58 р.</span>
                <div className={s.infoButtonPad}>
                    <div className={s.buttonInfo}>Начисления</div>
                    <div className={s.buttonPay}>Оплатить</div>
                </div>
            </div>

            <div className={s.slideMenu}>

                <div className={s.meterMenu}>
                    <span style={{ fontFamily: "dindisplay_bold" }}>Счётчики</span>
                    {meterButtons.map((button: TButton) => {
                        return (
                            <div className={s.button} key={`meterButton-${button.id}`}>
                                <img className={s.icon} src={require(`../../img/${button.icon}`)} alt={button.title}/>
                                <span>{button.title}</span>

                            </div>
                        )
                    })}
                    </div>

                <div className={s.actionMenu}>
                    <span style={{ fontFamily: "dindisplay_bold" }}>Действия</span>
                    {actButtons.map((button: TButton) => {
                        return (
                            <div className={s.button} key={`actionButton-${button.id}`}>
                                <img className={s.icon} src={require(`../../img/${button.icon}`)}  alt={button.title}/>
                                <span>{button.title}</span>
                            </div>
                        )
                    })}
                </div>
            </div>

            <nav className={s.navBar}>
                {navItems.map((button: TButton) => {
                    return (
                        <div className={s.item} key={button.id}>
                            <img className={s.icon} src={require(`../../img/${button.icon}`)} alt={button.title}/>
                            <span>{button.title}</span>
                        </div>
                    )
                })}
            </nav>
        </div>
    )

}

export default Main;