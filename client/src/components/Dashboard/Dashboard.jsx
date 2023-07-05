import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
    return (


        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content   p-4 bg-gradient-to-t from-white via-[#E6FFFF] to-white ">

                <label htmlFor="my-drawer-2" className="btn bg-[#6378ad] mb-6 text-white drawer-button lg:hidden">Dashboard</label>
                {/* <h2 className='text-3xl text-orange-300'>Dashboard</h2> */}

                <Outlet></Outlet>


            </div>
            <div className="drawer-side   x ">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu  flex-nowrap scroll-auto   p-4 w-80 h-full bg-purple-300 text-xl gap-4 text-base-content ">
                   
                    <NavLink  to="my-profile" className={({ isActive }) => isActive ?  'bg-[#7535ad] text-white p-2 rounded-lg'  :  ' text-slate-700 hover:text-third p-2 rounded-lg'} > My Profile </NavLink>
                    <NavLink  to="my-teams" className={({ isActive }) => isActive ?  'bg-[#7535ad] text-white p-2 rounded-lg'  :  ' text-slate-700 hover:text-third p-2 rounded-lg'} > Created Teams </NavLink>
                    <NavLink  to="others-team" className={({ isActive }) => isActive ?  'bg-[#7535ad] text-white p-2 rounded-lg'  :  ' text-slate-700 hover:text-third p-2 rounded-lg'} > Invited Teams </NavLink>

                </ul>

            </div>
        </div>
    );
};

export default Dashboard;