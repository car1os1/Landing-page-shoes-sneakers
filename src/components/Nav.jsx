import { headerLogo } from '../assets/images';
import { hamburger } from '../assets/icons'
import { navLinks } from '../constants'


const Nav = () => {
    return (
        <header className='padding-x py-8 absolute z-10 w-full'>
            <nav className='flex justify-between items-center max-container'>
                <a href="logo">
                    <img src={headerLogo} width={100} height={10} alt="" />
                </a>
                <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>{navLinks.map((item) => (
                    <li key={item.href}>
                        <a href={item.href} className='font-montserrat leading-normal text-lg text-slate-gray' >{item.label}</a>
                    </li>
                ))}</ul>
                <div>
                    <img className="hidden max-lg:block" src={hamburger} height={25} width={25} alt="" />
                </div>

            </nav>
        </header>
    )
}


export default Nav
