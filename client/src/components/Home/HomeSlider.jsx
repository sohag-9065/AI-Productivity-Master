/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import Slider from "react-slick";
import { Link } from "react-router-dom";
import '../../style/homeBanner.css'


function SampleNextArrow() {
    return (
        <div
            style={{ display: "none" }}
        />
    );
} 

const HomeSlider = () => { 

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        nextArrow: <SampleNextArrow />,
        customPaging: () => (
            <div
                style={{
                    position: "absolute",
                    bottom: "60px",
                    opacity: 1,
                    fontSize: "100px",
                    color: "#fff"
                }}
            >
                .
            </div>
        )

    };

    const arr = [1, 2, 3, 4];
    return (
        <div>
            <Slider {...settings}> 

                <div className={`hero   bg-[url('https://www.shutterstock.com/image-vector/business-people-characters-working-office-600w-1972811144.jpg')] bg-top bg-cover  h-[500px]  md:h-[800px]  w-full`}  >
                    <div className="hero-overlay bg-opacity-50 ">
                        <div className="h-[500px]  md:h-[800px] max-w-[1140px]   mx-auto flex  items-center">
                            <div className="max-w-xl  text-white px-6 sm:px-16 md:px-6">
                                <h1 className="mb-5 text-2xl md:text-5xl font-bold ">AI Master brings all your tasks, teammates, and tools together</h1>
                                <p className="mb-5"> Keep everything in the same place—even if your team isn’t.</p>
                                <Link to='/login'><button className="btn transition  duration-300  hover:delay-100 text-white bg-secondary hover:bg-secondary/[.8] border-secondary  hover:border-secondary  ">Sign up - it's free!</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`hero  bg-[url('https://www.shutterstock.com/image-vector/business-people-concept-scene-flat-600w-2204587473.jpg')] bg-top bg-cover h-[500px]  md:h-[800px]  w-full`}  >
                    <div className="hero-overlay bg-opacity-50 ">
                        <div className="h-[500px]  md:h-[800px] max-w-[1140px]   mx-auto flex  items-center">
                            <div className="max-w-xl text-white  px-6 sm:px-16 md:px-6">
                                <h1 className="mb-5  text-2xl md:text-5xl  font-bold ">AI Master brings all your tasks, teammates, and tools together</h1>
                                <p className="mb-5  "> Keep everything in the same place—even if your team isn’t.</p>
                                <Link to='/login'><button className="btn transition  duration-300 text-white hover:delay-100   bg-secondary hover:bg-secondary/[.8] border-secondary  hover:border-secondary  ">Sign up - it's free!</button></Link>
                            </div>
                        </div>
                    </div>
                </div> 
                <div className={`hero   bg-[url('https://www.shutterstock.com/image-photo/diverse-employees-gathered-office-having-600w-2159352299.jpg')] bg-top bg-cover h-[500px]  md:h-[800px]  w-full`}  >
                    <div className="hero-overlay bg-opacity-50 ">
                        <div className="h-[500px]  md:h-[800px] max-w-[1140px]   mx-auto flex  items-center">
                            <div className="max-w-xl  text-white  px-6 sm:px-16 md:px-6">
                                <h1 className="mb-5 text-2xl md:text-5xl  font-bold ">AI Master brings all your tasks, teammates, and tools together</h1>
                                <p className="mb-5"> Keep everything in the same place—even if your team isn’t.</p>
                                <Link to='/login'><button className="btn transition  duration-300  hover:delay-100  text-white bg-secondary hover:bg-secondary/[.8] border-secondary  hover:border-secondary  ">Sign up - it's free!</button></Link>
                            </div>
                        </div>
                    </div>
                </div> 

            </Slider>
        </div>
    );
};

export default HomeSlider;