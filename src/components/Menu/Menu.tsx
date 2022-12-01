import { NavLink } from "react-router-dom";
import { menuGroup, menuGroups, menuItem, menuItems } from "./menuItems";
import "@styles/Menu.css"
import ic_logo from "../../img/ic_logo.svg"



const Menu = () => {
    return (
        <div className="menu">
            <h1>Помощь</h1>
            {
                menuGroups.map((group: menuGroup) => {  // Рендер заголовка группы
                    return (
                        <section key={`group-${group.id}`}>
                            <h2 key={`h-${group.id}`}>{group.title}</h2>
                            <div className="menu_links">
                                {menuItems.filter((item: menuItem) => item.group === group.id).map((item: menuItem) => { // Рендер ссылок принадлежащих группе
                                    return (
                                        <NavLink className="menu_links_link" key={`link-${item.id}`} to={item.link}>{item.title}<br /></NavLink>
                                    )
                                })}
                            </div>
                        </section>
                    )
                })
            }
            <img className="menu_logo" src={ic_logo} alt="Лого" />
        </div>
    )
}

export default Menu;