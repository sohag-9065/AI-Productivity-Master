/* eslint-disable no-unused-vars */

import { AiOutlineMail, AiFillHeart } from 'react-icons/ai';
import { BiMessageDetail } from 'react-icons/bi';
import { BsArrowRightShort, BsTwitter, BsFacebook, BsInstagram } from 'react-icons/bs';
import { FaUserTie } from 'react-icons/fa';
import { GoLocation } from 'react-icons/go';
import { LuCalendarDays } from 'react-icons/lu';
import { MdPhoneEnabled } from 'react-icons/md';



import blog1 from '../../assets/blog/blog1.webp';
import blog2 from '../../assets/blog/blog2.webp';
import { questions } from '../../data/footer';



const FooterSection = () => {

    const icons = [BsArrowRightShort, BsTwitter, BsInstagram];

    const iconStyle = {
        color: 'red',
        fontSize: '24px',
        // Add any other styles you want to apply to the icons
    };

    console.log(questions)
    return (
        <div className="bg-foot py-20">
 
                {
                    icons.map((IconComponent, index) => (
                        <IconComponent key={index} style={iconStyle} />
                    ))
                }
 
            {
                questions[0].icon("text-red-500")
            }
            <div className="grid md:grid-cols-4 gap-8 p-6 md:p-2 max-w-[1140px]   mx-auto  text-white ">
                <div className=" pr-2">

                    <h2 className="text-2xl mb-10 text-secondary">Have a Questions?</h2>
                    <div className="flex mb-4">

                        <GoLocation className="mt-1" />
                        <p className="pl-4 text-white/[.6]">	203 Fake St. Mountain View, San Francisco, California, USA</p>
                    </div>
                    <div className="flex mb-4">
                        <MdPhoneEnabled className="mt-1" />
                        <p className="pl-4  ">+2 392 3929 210</p>
                    </div>
                    <div className="flex ">
                        <AiOutlineMail className="mt-1" />
                        <p className="pl-4  ">	info@yourdomain.com</p>
                    </div>
                </div>
                <div className=" pr-2">
                    <h2 className="text-2xl mb-10 text-secondary">Recent Blog</h2>

                    <div className="flex mb-9">
                        <img src={blog1} alt="" className="w-20 h-20 mt-1" />
                        <div className="pl-4">
                            <p className=" hover:text-secondary text-white">	Even the all-powerful Pointing has no control about</p>
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

                    <div className="flex mb-9">
                        <img src={blog2} alt="" className="w-20 h-20 mt-1" />
                        <div className="pl-4">
                            <p className=" hover:text-secondary text-white">	Even the all-powerful Pointing has no control about</p>
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



                </div>
                <div className=" pr-2">
                    <h2 className="text-2xl mb-10 text-secondary">Links</h2>
                    <p className="flex items-center text-white/[.6]">
                        <BsArrowRightShort />
                        <span className="pl-2">Home</span>
                    </p>
                    <p className="flex items-center text-white/[.6]">
                        <BsArrowRightShort />
                        <span className="pl-2">About</span>
                    </p>
                    <p className=" flex items-center text-white/[.6]">
                        <BsArrowRightShort />
                        <span className="pl-2">Services</span>
                    </p>
                    <p className="flex items-center text-white/[.6]">
                        <BsArrowRightShort />
                        <span className="pl-2">Departments</span>
                    </p>
                    <p className="flex items-center text-white/[.6]">
                        <BsArrowRightShort />
                        <span className="pl-2">Contact</span>
                    </p>
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
                            <p className="bg-white/[.1] px-2 py-2 rounded-full"><BsTwitter /></p>
                            <p className="bg-white/[.1] px-2 py-2 rounded-full"><BsFacebook /></p>
                            <p className="bg-white/[.1] px-2 py-2 rounded-full"><BsInstagram /></p>
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