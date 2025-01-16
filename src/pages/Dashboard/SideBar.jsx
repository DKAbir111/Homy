import { Link, NavLink } from "react-router-dom";
import logo from '../../assets/logo.svg'
import { CgProfile } from "react-icons/cg";
import { MdOutlineAnnouncement } from "react-icons/md";
export default function SideBar() {
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* Page content here */}
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
                    Open drawer
                </label>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu bg-base-100 text-base-content min-h-full w-80 p-4 space-y-2">
                    {/* Sidebar content here */}

                    <Link className="pt-3 pb-5 border-b mb-5"> <img src={logo} alt="" /></Link>

                    <li><NavLink to={'/dashboard/user'} className='py-4 font-bold'><CgProfile className="text-2xl" /> My Profile</NavLink></li>
                    <li ><NavLink to={'/dashboard/announcement'} className='py-4 font-bold'><MdOutlineAnnouncement className="text-2xl" /> Announcement</NavLink></li>


                </ul>
            </div>
        </div>
    )
}
