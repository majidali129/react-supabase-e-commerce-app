import { NavLink } from "react-router-dom";
import { BsCart2 } from "react-icons/bs";
// import { BiSolidMoon, BiSolidSun } from "react-icons/bi";
import MenuButton from "./MenuButton";
import useCart from "../features/cart/useCart";

const menus = [
  { route: "/", value: "Home" },
  { route: "/products", value: "Products" },
];
const NavMenus = () => {
  const {cartItems, loadingCart} = useCart()
  const totalItems = cartItems?.reduce((acc, cur) => acc + cur.quantity, 0);


  return (
    <ul className="flex-flex">
      {menus.map((menu, index) => (
        <li key={index} className="hover:text-yellow-500 ">
          <NavLink to={menu.route}>{menu.value}</NavLink>
        </li>
      ))}

      {!loadingCart && <li data-total={`${totalItems < 10? '0'+totalItems: totalItems}`} className="relative z-10 ml-2 mr-4 cart-icon">
        <NavLink to="/cart"><BsCart2 data-total={'32'} className="z-50 icon hover:text-yellow-500" /></NavLink>
      </li>}

      <MenuButton>
        {/* <BiSolidMoon className="icon" /> */}
        {/* <BiSolidSun className="icon" /> */}
      </MenuButton>
    </ul>
  );
};

export default NavMenus;
