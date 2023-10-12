import { NavLink } from "react-router-dom";
import { BsCart2 } from "react-icons/bs";
import { BiSolidMoon, BiSolidSun } from "react-icons/bi";
import MenuButton from "./MenuButton";
import Uploader from "./Uploader";
import useCart from "../features/cart/useCart";

const menus = [
  { route: "/", value: "Home" },
  { route: "/products", value: "Products" },
  { route: "/categories", value: "Categories" },
  { route: "/contact-us", value: "Contact Us" },
  // { route: "/cart", value: <BsCart2 className="icon" /> },
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

      {!loadingCart && <li data-total={`${totalItems < 10? '0'+totalItems: totalItems}`} className="cart-icon relative z-10 mr-4 ml-2">
        <NavLink to="/cart"><BsCart2 data-total={'32'} className="icon z-50  hover:text-yellow-500" /></NavLink>
      </li>}

      <MenuButton>
        {/* <BiSolidMoon className="icon" /> */}
        <BiSolidSun className="icon" />
      </MenuButton>
    </ul>
  );
};

export default NavMenus;
