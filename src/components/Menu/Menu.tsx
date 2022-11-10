import { NavLink } from "react-router-dom";
import { menuGroup, menuGroups, menuItem, menuItems } from "./menuItems";
import s from "@styles/Menu.module.css"
import ic_logo from "../../img/ic_logo.svg"



const Menu = () => {
    return (
        <div className={s.page}>
            <h1>Помощь</h1>
            {
                menuGroups.map((group: menuGroup) => {  // Рендер заголовка группы
                    return (
                        <section key={`group-${group.id}`}>
                            <h2 key={`h-${group.id}`}>{group.title}</h2>
                            <div className={s.linksBlock}>
                                {menuItems.filter((item: menuItem) => item.group === group.id).map((item: menuItem) => { // Рендер ссылок принадлежащих группе
                                    return (
                                        <NavLink  className={s.link} key={`link-${item.id}`} to={item.link}>{item.title}<br /></NavLink>
                                    )
                                })}
                            </div>
                        </section>
                    )
                })
            }
            <img className={s.logo} src={ic_logo} alt="Лого" />
        </div>
    )
}

export default Menu;