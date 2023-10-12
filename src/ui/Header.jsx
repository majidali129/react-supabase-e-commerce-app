import Logo from "./Logo"
import NavMenus from "./NavMenus"

const Header = () => {
  return (
    <nav 
    className="bg-stone-500 py-2 px-6 text-stone-50 flex items-center justify-between dark:bg-pink-200 rounded-md"
    >
      <Logo />
      <NavMenus />
    </nav>
  )
}

export default Header