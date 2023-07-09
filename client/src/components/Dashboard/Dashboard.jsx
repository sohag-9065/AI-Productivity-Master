import { NavLink, Outlet } from "react-router-dom";
import { dashboardNavItems } from "../../data/dashboardNav"; 

const Dashboard = () => {

    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content   p-4 bg-gradient-to-t from-white via-[#E6FFFF] to-white ">

                <label htmlFor="my-drawer-2" className="btn bg-[#6378ad] mb-6 text-white drawer-button lg:hidden">Dashboard</label>

                <Outlet></Outlet>

            </div>
            <div className="drawer-side   x ">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu  flex-nowrap scroll-auto   p-4 w-80 h-full bg-purple-300 text-xl gap-4 text-base-content ">
                    {
                        dashboardNavItems.map((item, index) => (
                            <NavLink key={index} to={item.route} className={({ isActive }) => isActive ? 'bg-[#7535ad] text-white p-2 rounded-lg' : ' text-slate-700 hover:text-third p-2 rounded-lg'} > {item.name} </NavLink>

                        ))
                    }
                </ul>

            </div>
        </div>


    );
};

export default Dashboard;