import { Link, NavLink } from 'react-router-dom'
import logo from '../../public/logo.jpg'
const Logo = () => {
  return (
    <Link to='/' >
    <div className='flex-flex'>
    <img src={logo} alt="" width={50} height={50} className='rounded-full' />
    <h2 className='italic max-md:text-lg text-stone-50'>Mak<span className='text-yellow-300'>eup</span></h2>
    </div>
    </Link>
  )
}

export default Logo