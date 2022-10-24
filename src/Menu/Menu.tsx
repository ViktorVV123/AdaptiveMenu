import React from 'react';
import {ItemType} from "../App";
import './Menu.css'

type PropsType = {
    header: string;
    items: Array<ItemType>
    active: boolean;
    setActive: (active: boolean) => void;
}

const Menu: React.FC<PropsType> = ({header, items, active, setActive}) => {

    return(
        <div className={`${active ? 'menuActive' : 'menu'}`} onClick={()=>setActive(false)}>
            <div className='blur'>
            <div className='menuContent' onClick={e=> e.stopPropagation()}> {/*не даем закрыться меню на ссылки*/}
                <div className='menuHeader'>{header}</div>
                <ul>

                    {items.map((item: { href: string | undefined; value: React.ReactNode; }) =>
                        <li>
                            <a href={item.href}>{item.value}</a>
                        </li>)}
                </ul>
            </div>
        </div>
        </div>
    );
}
export default Menu;