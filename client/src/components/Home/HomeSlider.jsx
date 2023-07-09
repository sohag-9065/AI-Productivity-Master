/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import Slider from "react-slick";
import { Link } from "react-router-dom";
import '../../style/homeBanner.css'
import bg1 from '../../assets/homeBanner/bg1.png';
import bg2 from '../../assets/homeBanner/bg2.png';
import bg3 from '../../assets/homeBanner/bg3.png';


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

    const imgs = [bg1, bg2, bg3];
    return (
        <div>
            <Slider {...settings}>

                <div className="bg-[url('https://preview.colorlib.com/theme/fox/images/bg_1.jpg.webp')] bg-top bg-cover  h-[600px] w-full"  >

                    <div className="hero-overlay bg-opacity-50 bg-orange-500">


                        <div className="  h-full  max-w-[1140px]   mx-auto flex  items-center">
                            <div className="max-w-xl  text-white px-6 sm:px-16 md:px-6">
                                <h1 className="mb-5 text-2xl md:text-5xl font-bold ">AI Master brings all your tasks, teammates, and tools together</h1>
                                <p className="mb-5"> Keep everything in the same place—even if your team isn’t.</p>
                                <Link to='/login'><button className="btn transition  duration-300  hover:delay-100 text-white bg-secondary hover:bg-secondary/[.8] border-secondary  hover:border-secondary  ">Sign up - it's free!</button></Link>

                            </div>
                        </div>


                    </div>

                </div>
                <div className="bg-[url('https://preview.colorlib.com/theme/fox/images/bg_2.jpg.webp')]  bg-top bg-cover  h-[600px] w-full"  >

                    <div className="hero-overlay bg-opacity-60 bg-orange-500 ">


                        <div className="  h-full   max-w-[1140px]   mx-auto flex  items-center">
                            <div className="max-w-xl  text-white px-6 sm:px-16 md:px-6">
                                <h1 className="mb-5 text-2xl md:text-5xl font-bold ">AI Master brings all your tasks, teammates, and tools together</h1>
                                <p className="mb-5"> Keep everything in the same place—even if your team isn’t.</p>
                                <Link to='/login'><button className="btn transition  duration-300  hover:delay-100 text-white bg-secondary hover:bg-secondary/[.8] border-secondary  hover:border-secondary  ">Sign up - it's free!</button></Link>

                            </div>
                        </div>


                    </div>

                </div>
                

            </Slider>
        </div>
    );
};

export default HomeSlider;