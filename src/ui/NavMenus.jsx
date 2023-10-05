import { NavLink } from "react-router-dom"
import {BsCart2} from 'react-icons/bs'
import {BiSolidMoon, BiSolidSun} from 'react-icons/bi'
import MenuButton from "./MenuButton"


const menus = [
  {route: '/', value: 'Home'}, 
  {route: '/products', value: 'Products'}, 
  {route: '/categories', value: 'Categories'}, 
  {route: '/contact-us', value: 'Contact Us'},
  {route: '/cart', value:  <BsCart2 className="icon" />}, 
]
const NavMenus = () => {
  return (
    <ul 
    className="flex-flex">
      {
        menus.map((menu, index) => (
          
          <li key={index} className="hover:text-yellow-500 ">
            <NavLink to={menu.route}  >
              {menu.value}
            </NavLink>
          </li>
        ))
      }
      <li>
        <NavLink to='/cart' >
         
        </NavLink>
      </li>

      <MenuButton>
        {/* <BiSolidMoon className="icon" /> */}
        <BiSolidSun className="icon"/>
      </MenuButton>
    </ul>
  )
}

export default NavMenus