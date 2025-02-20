import { Link, NavLink } from "react-router-dom";
import logo from '../../assets/logo.svg'
import { CgProfile } from "react-icons/cg";
import { MdOutlineAnnouncement, MdOutlineApartment } from "react-icons/md";
import { MdOutlinePayments } from "react-icons/md";
import { FaBars, FaHistory } from "react-icons/fa";
import { FaUserCog } from "react-icons/fa";
import { GrAnnounce } from "react-icons/gr";
import { IoMdHome, IoMdPaper } from "react-icons/io";
import { RiCoupon3Fill } from "react-icons/ri";
import useRole from "../../hooks/useRole";
export default function SideBar() {
    const [role] = useRole()
    return (
        <div className="drawer lg:drawer-open z-10">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* Page content here */}
                <label htmlFor="my-drawer-2" className="btn btn-primary text-xl drawer-button rounded-sm lg:hidden absolute top-1 left-1 bg-primary-color border-none">
                    <FaBars />
                </label>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu bg-base-100 text-base-content min-h-full w-80 p-4 space-y-2">
                    {/* Sidebar content here */}
                    <Link to={role === "admin" ? '/dashboard/admin' : '/dashboard/user'} className="pt-3 pb-5 border-b mb-5"> <img src={logo} alt="" /></Link>
                    {
                        role !== "admin" && <>
                            <li><NavLink to={'/dashboard/user'} className='py-4 font-bold'><CgProfile className="text-2xl" /> My Profile</NavLink></li>
                        </>
                    }

                    {/* member */}
                    {
                        role === "member" && <>
                            <li><NavLink to={'/dashboard/make-payment'} className='py-4 font-bold'><MdOutlinePayments className="text-2xl" /> Make payment</NavLink></li>
                            <li><NavLink to={'/dashboard/payment-history'} className='py-4 font-bold'><FaHistory className="text-2xl" /> Payment history</NavLink></li>
                        </>
                    }

                    {/* admin */}
                    {
                        role === "admin" && <>
                            <li><NavLink to={'/dashboard/admin'} className='py-4 font-bold'><CgProfile className="text-2xl" />Admin Profile</NavLink></li>
                            <li><NavLink to={'/dashboard/manage-member'} className='py-4 font-bold'><FaUserCog className="text-2xl" /> Manage Members</NavLink></li>
                            <li><NavLink to={'/dashboard/make-announcement'} className='py-4 font-bold'><GrAnnounce className="text-2xl" /> Make Announcement</NavLink></li>
                            <li><NavLink to={'/dashboard/agreement-request'} className='py-4 font-bold'><IoMdPaper className="text-2xl" />Agreement Requests</NavLink></li>
                            <li><NavLink to={'/dashboard/manage-coupon'} className='py-4 font-bold'><RiCoupon3Fill className="text-2xl" />Manage Coupons</NavLink></li>
                        </>
                    }
                    <li ><NavLink to={'/dashboard/announcement'} className='py-4 font-bold'><MdOutlineAnnouncement className="text-2xl" /> Announcement</NavLink></li>

                    <div className="divider"></div>
                    <li ><NavLink to={'/'} className='py-4 font-bold'><IoMdHome className="text-2xl" /> Home</NavLink></li>
                    <li ><NavLink to={'/apartment'} className='py-4 font-bold'><MdOutlineApartment className="text-2xl" /> Apartment</NavLink></li>
                </ul>
            </div>
        </div>
    )
}
