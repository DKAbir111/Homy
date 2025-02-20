import Coupon from "../pages/Home/ Coupon";
import About from "../pages/Home/About";
import Banner from "../pages/Home/Banner";
import Location from "../pages/Home/Location";

export default function HomeLayout() {
    return (
        <div className="pt-[75px]">
            < Banner />
            <About />
            <Coupon />
            <Location />
        </div >
    )
}
