import { Link, NavLink } from "react-router-dom";
import logo from '../../assets/logo.svg'
import { CgProfile } from "react-icons/cg";
import { MdOutlineAnnouncement } from "react-icons/md";
import { MdOutlinePayments } from "react-icons/md";
import { FaHistory } from "react-icons/fa";
import { FaUserCog } from "react-icons/fa";
import { GrAnnounce } from "react-icons/gr";
import { IoMdPaper } from "react-icons/io";
import { RiCoupon3Fill } from "react-icons/ri";
export default function SideBar() {
    const role = 'member'
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
                            <li><NavLink to={'/dashboard/manage-member'} className='py-4 font-bold'><FaUserCog className="text-2xl" /> Manage Members</NavLink></li>
                            <li><NavLink to={'/dashboard/make-announcement'} className='py-4 font-bold'><GrAnnounce className="text-2xl" /> Make Announcement</NavLink></li>
                            <li><NavLink to={'/dashboard/agreement-request'} className='py-4 font-bold'><IoMdPaper className="text-2xl" />Agreement Requests</NavLink></li>
                            <li><NavLink to={'/dashboard/manage-coupon'} className='py-4 font-bold'><RiCoupon3Fill className="text-2xl" />Manage Coupons</NavLink></li>
                        </>
                    }
                    <li ><NavLink to={'/dashboard/announcement'} className='py-4 font-bold'><MdOutlineAnnouncement className="text-2xl" /> Announcement</NavLink></li>
                </ul>
            </div>
        </div>
    )
}
