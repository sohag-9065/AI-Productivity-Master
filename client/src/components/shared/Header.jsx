/* eslint-disable no-unused-vars */
import { useState } from "react";
import { NavLink } from "react-router-dom";


const Header = () => {

    const [toggle, setToggle] = useState(false);


    const navMenu = <>
        <NavLink to="/home" className={({ isActive }) => isActive ? 'text-secondary hover:text-black' : ' text-black  '}  > Home </NavLink>
        {/* <NavLink to="/about" className={({ isActive }) => isActive ? 'text-secondary hover:text-black' : ' text-black  '}  > About </NavLink>
        <NavLink to="/course" className={({ isActive }) => isActive ? 'text-secondary hover:text-black' : ' text-black  '}  > Course </NavLink>
        <NavLink to="/staff" className={({ isActive }) => isActive ? 'text-secondary hover:text-black' : ' text-black  '}  > Staff </NavLink>
        <NavLink to="/blog" className={({ isActive }) => isActive ? 'text-secondary hover:text-black' : ' text-black  '}  > Blog </NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? 'text-secondary hover:text-black' : ' text-black  '}  > Contact </NavLink> */}


    </>
    return (
        <div className="max-w-[1140px]   mx-auto ">


            <div className="  md:hidden  px-6 sm:px-16 md:px-6   py-2  bg-primary items-center">
                <div className="sm:flex sm:gap-10 justify-between  text-black/[.5]">
                    <div className="sm:flex-none  cursor-pointer flex  items-center " onClick={() => setToggle(!toggle)}>
                        {/* <FontAwesomeIcon icon={faBars}  /> */}
                        <p className="pl-2 ">MENU</p>
                    </div>

                </div>

                {
                    toggle &&
                    <div className=" flex flex-col  gap-5 py-3" onClick={() => setToggle(!toggle)}>
                        {navMenu}
                    </div>
                }

            </div>


            <div className=" hidden md:flex md:justify-between px-6 py-4 bg-primary items-center text-black">
                <div> 
                    <h1 className="text-4xl font-extrabold"> AI Master</h1>
                </div>

                <div className=" flex  gap-10" onClick={() => setToggle(false)}>
                    {navMenu}
                </div>

            </div>
        </div>
    );
};

export default Header;