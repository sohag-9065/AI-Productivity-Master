import { AiOutlineMail } from 'react-icons/ai';
import { BsTwitter, BsFacebook, BsInstagram } from 'react-icons/bs';
import { GoLocation } from 'react-icons/go';
import { MdPhoneEnabled } from 'react-icons/md';

import blog1 from '../assets/blog/blog1.webp';
import blog2 from '../assets/blog/blog2.webp';

export const questions = [
    {
        icon: GoLocation,
        details: "203 Fake St. Mountain View, San Francisco, California, USA",
        classAdd: "pl-4 text-white/[.6]"
    },
    {
        icon: MdPhoneEnabled,
        details: "+2 392 3929 210",
        classAdd: ""
    },
    {
        icon: AiOutlineMail,
        details: "ai.master@yourdomain.com",
        classAdd: ""
    },
]
 
export const blogs = [
    {
        img: blog1,
        name: "Even the all-powerful Pointing has no control about",
    },
    {
        img: blog2,
        name: "Marketing is the activity, set of institutions",
    },
]

export const links = ["Home", "About", "Services", "Departments", "Contact"];

export const contac = [BsTwitter, BsFacebook, BsInstagram];
