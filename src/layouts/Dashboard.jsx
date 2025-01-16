import { Outlet } from "react-router-dom";
import SideBar from "../pages/Dashboard/SideBar";
import TopBar from "../pages/Dashboard/TopBar";


export default function Dashboard() {
    return (
        <main className="lg:grid grid-cols-12 max-h-screen">
            <aside className="col-span-3 "> <SideBar /></aside>
            <section className="col-span-9 overflow-scroll bg-design-color">
                <TopBar />
                <Outlet />
            </section>
        </main>
    )
}
