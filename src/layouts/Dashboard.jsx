import { Outlet } from "react-router-dom";
import SideBar from "../pages/Dashboard/SideBar";


export default function Dashboard() {
    return (
        <main className="flex">
            <section className="h-screen" >
                <SideBar />
            </section>
            <section className=" flex-1 overflow-y-auto h-screen bg-design-color max-w-screen-xl px-5">
                <Outlet />
            </section>
        </main>
    )
}
