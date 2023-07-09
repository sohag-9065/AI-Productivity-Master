/* eslint-disable no-unused-vars */

import {  AiFillHeart } from 'react-icons/ai';
import { BiMessageDetail } from 'react-icons/bi';
import { BsArrowRightShort } from 'react-icons/bs';
import { FaUserTie } from 'react-icons/fa'; 
import { LuCalendarDays } from 'react-icons/lu'; 

 
import { questions, blogs, links, contac } from '../../data/footer';



const FooterSection = () => {
  
    return (
        <div className="bg-foot py-20">

            <div className="grid md:grid-cols-4 gap-8 p-6 md:p-2 max-w-[1140px]   mx-auto  text-white ">
                <div className=" pr-2">

                    <h2 className="text-2xl mb-10 text-secondary">Have a Questions?</h2>

                    {
                        questions.map((item, index) => (

                            <div key={index} className="flex mb-4">

                                <item.icon className="mt-1" />
                                <p className={`pl-4  ${item.classAdd}`}>{item.details}</p>
                            </div>


                        ))
                    }

                </div>

                <div className=" pr-2">
                    <h2 className="text-2xl mb-10 text-secondary">Recent Blog</h2>
                    {
                        blogs.map((item, index) => (

                            <div key={index} className="flex mb-9">
                                <img src={item.img} alt="" className="w-20 h-20 mt-1" />
                                <div className="pl-4">
                                    <p className=" hover:text-secondary text-white">{item.name}</p>
                                    <p className="flex items-center text-white/[.3] pt-4 text-sm">
                                        <LuCalendarDays />
                                        <span className="pl-2">June 27, 2019</span>
                                    </p>
                                    <p className="flex items-center text-white/[.3] mt-2 text-sm">
                                        <FaUserTie />
                                        <span className="pl-2 pr-4">Admin</span>
                                        <BiMessageDetail />
                                        <span className="pl-1 pr-4">19</span>
                                    </p>
                                </div>
                            </div>


                        ))
                    }

                </div>
                <div className=" pr-2">
                    <h2 className="text-2xl mb-10 text-secondary">Links</h2>
                    {
                        links.map((item, index) => (

                            <p key={index} className="flex items-center text-white/[.6]">
                                <BsArrowRightShort />
                                <span className="pl-2">{item}</span>
                            </p>

                        ))
                    }
                     
                </div>
                <div className=" pr-2">
                    <h2 className="text-2xl mb-10 text-secondary">Subscribe Us!</h2>
                    <div>
                        <input type="text" placeholder="Enter email address" className="w-full py-3 bg-white/[.1] text-white/[.6] text-center focu
                        outline-none" />
                        <p className="transition  duration-300  hover:delay-100 bg-secondary border-2  hover:bg-transparent  border-secondary   mt-3 text-center py-3 ">Subscribe</p>
                    </div>
                    <div>
                        <h2 className="text-2xl mt-12 mb-4">Connect With Us</h2>
                        <div className="flex  gap-4">
                            {
                                contac.map( (Item, index ) => (
                                    <p key={index} className="bg-white/[.1] px-2 py-2 rounded-full"><Item /></p>
                                ))
                            } 
                        </div>
                    </div>
                </div>
            </div>

            <p className=" text-white text-center pt-8 px-6  ">
                <span>Copyright ©2023 All rights reserved | This template is made with </span>
                <AiFillHeart className="px-1 text-2xl inline " />
                <span> by RoboRise</span>
            </p>

        </div>
    );
};

export default FooterSection;