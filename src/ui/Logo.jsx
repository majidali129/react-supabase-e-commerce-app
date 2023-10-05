import { NavLink } from 'react-router-dom'
import logo from '../../public/logo.jpg'
const Logo = () => {
  return (
    <div className='flex-flex'>
    <img src={logo} alt="" width={50} height={50} className='rounded-full' />
    <h2 className='italic text-stone-50'>Mak<span className='text-yellow-300'>eup</span></h2>
    </div>
  )
}

export default Logo