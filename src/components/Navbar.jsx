import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/logo.svg'
import PrimaryButton from './PrimaryButton'
import useAuth from '../hooks/useAuth'
export default function Navbar() {
    const { user, logOut } = useAuth()
    const handleLogOut = () => {
        logOut()
            .then(() => {
                console.log("User logged out successfully")
            })
    }
    const navlinks = <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/apartment'}>Apartment</NavLink></li>
    </>
    return (
        <nav className="navbar bg-design-color">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {navlinks}
                    </ul>
                </div>
                <Link to={'/'}><img src={logo} alt="Logo" /></Link>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navlinks}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <>
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img
                                        alt="Tailwind CSS Navbar component"
                                        src={user?.
                                            photoURL} />
                                </div>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                <li>
                                    <a href="" className='btn-disabled'> Darun Karas</a>
                                </li>
                                <li><a>Dashboard</a></li>
                                <li><a onClick={handleLogOut}>Logout</a></li>
                            </ul>
                        </div></> : <>
                        <PrimaryButton text={`Login`} />
                    </>
                }
            </div>
        </nav>
    )
}
