/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineBars } from 'react-icons/ai';
import { AuthContext } from '../../context/AuthProvider'

const headersItem = [
    {
        route: "/home",
        name: "Home"
    },
    {
        route: "/teamCreate",
        name: "Team Create"
    },
    {
        route: "/blog",
        name: "Blog"
    },
    {
        route: "/dashboard/my-profile",
        name: "Dashboard"
    }
]


const Header = () => {

    const [toggle, setToggle] = useState(false);
    const { user, getProfile, logOut } = useContext(AuthContext)
 

 

    const navMenu = <>
        {
            headersItem.map((header, index) => <NavLink
                key={index}
                to={header.route}
                className={({ isActive }) => isActive ?
                    'text-secondary hover:text-third'
                    :
                    ' text-slate-600 hover:text-third'}
            >
                {header.name}
            </NavLink>)
        }

        {
            user ?
                <NavLink  onClick={ () => logOut()}  className=  ' text-slate-600 hover:text-third'  > SingOut </NavLink>

                :

                <>
                    <NavLink to="/signIn" className={({ isActive }) => isActive ? 'text-secondary hover:text-third' : ' text-slate-600 hover:text-third'} > Login </NavLink>
                    <NavLink to="/signUp" className={({ isActive }) => isActive ? 'text-secondary hover:text-third' : ' text-slate-600 hover:text-third'} > Register </NavLink>
                </>

        }


    </>
    return (
        <div className="bg-gradient-to-t from-white to-[#E6FFFF]">
            <div className="max-w-[1140px]   mx-auto  ">


                <div className="  md:hidden  px-6 sm:px-16 md:px-6   py-2  items-center">
                    <div className="sm:flex sm:gap-10 justify-between  text-black/[.5]">
                        <div>
                            <h1 className="text-3xl font-extrabold cursor-pointer"> AI Master</h1>
                        </div>
                        <div
                            className="sm:flex-none  cursor-pointer flex  items-center mt-2"
                            onClick={() => setToggle(!toggle)}
                        >
                            <p className="pr-2 ">MENU </p>
                            <AiOutlineBars />
                        </div>

                    </div>

                    {
                        toggle &&
                        <div className=" flex flex-col  gap-5 py-3" onClick={() => setToggle(!toggle)}>
                            {navMenu}
                        </div>
                    }

                </div>


                <div className=" hidden md:flex md:justify-between px-6 py-4   items-center text-slate-600">
                    <div>
                        <h1 className="text-4xl font-extrabold cursor-pointer">
                            <Link to='/' className="text-secondary">AI Master</Link>
                        </h1>
                    </div>

                    <div className=" flex  gap-10 text-lg" onClick={() => setToggle(false)}>
                        {navMenu}
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Header;