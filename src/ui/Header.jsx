import Logo from "./Logo"
import NavMenus from "./NavMenus"

const Header = () => {
  return (
    <nav 
    className="flex items-center justify-center px-6 py-2 rounded-md md:justify-between bg-stone-500 text-stone-50 dark:bg-pink-200"
    >
      <Logo />
      <NavMenus />
    </nav>
  )
}

export default Header