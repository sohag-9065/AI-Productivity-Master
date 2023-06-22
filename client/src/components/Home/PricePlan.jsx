/* eslint-disable no-unused-vars */


const PricePlan = () => {
    return (
        <div className="bg-gradient-to-t from-white to-[#E6FFFF] ">
            <div className="max-w-[1140px]   mx-auto py-20 px-6">
                <h1 className="text-center text-4xl font-semibold">AI Master priced your way</h1>
                <p className="text-center text-xl pt-3"> Trusted by millions, Trello powers teams all around the world.</p>
                <p className="text-center pt-10"><span className="transition  duration-300  hover:delay-100  bg-secondary border-[1px] ra hover:bg-transparent rounded-md border-secondary  text-white hover:text-black  text-center py-3 px-3 ">Compare Plan</span></p>

               
                <div className="grid gird-col-1  md:grid-cols-2 lg:grid-cols-4 mt-16    ">
                    <div className="px-4 py-6  border-[1px] border-b-0 lg:border-b-[1px]  md:border-r-0 border-slate-400">
                        <h2 className="font-medium">FREE</h2>
                        <div className="h-28 pt-6">
                            <p className="  ">$<span className="text-5xl ">0</span>USD</p>
                            <p className="pt-2 text-xs text-slate-500">Free for your whole team</p>
                        </div>

                        <p className="pt-6 h-44">For individuals or teams looking to organize any project.</p>
                        <p className="pt-6 mb-3"><span className="border-[1px] rounded-md border-secondary text-center py-3 px-3">Get Started</span></p>

                    </div>
                    <div className="px-4 py-6  border-[1px] border-b-0 lg:border-b-[1px]  border-slate-400 ">
                        <h2 className="font-medium">STANDARD</h2>
                        <div className="h-28 pt-6">
                            <p className="  ">$<span className="text-5xl ">5</span>USD</p>
                            <p className="pt-2 text-xs text-slate-500">Per user/month if billed annually ($6 billed monthly)</p>
                        </div>

                        <p className="pt-6 h-44">For small teams that need to manage work and scale collaboration.</p>
                        <p className="pt-6 mb-3"><span className="border-[1px] rounded-md border-secondary text-center py-3 px-3">Sign up now</span></p>

                    </div>
                    <div >
                        <div className="px-4 py-6 border-2   border-secondary">
                            <h2 className="font-medium">PREMIUM</h2>
                            <div className="h-28 pt-6">
                                <p className="  ">$<span className="text-5xl ">10</span>USD</p>
                                <p className="pt-2 text-xs text-slate-500">Per user/month if billed annually ($12 billed monthly)</p>
                            </div>

                            <p className="pt-6 h-44">For teams that need to track and visualize multiple projects in several ways, including boards, timelines, calendars, etc.</p>
                            <p className="pt-6 mb-3"><span className="border-[1px] transition  duration-300  hover:delay-100  rounded-md bg-secondary/[.5] hover:bg-transparent   border-secondary text-center py-3 px-3">Try for free</span></p>
                        </div>

                    </div>

                    <div className="px-4 py-6   border-[1px]  border-slate-400 ">

                    <h2 className="font-medium">ENTERPRISE</h2>
                        <div className="h-28 pt-6">
                            <p className="  ">$<span className="text-5xl ">17.50</span>USD</p>
                            <p className="pt-2 text-xs text-slate-500">Per user/month if billed annually ($220 billed monthly)</p>
                        </div>

                        <p className="pt-6 h-44">For organizations that need to connect work across teams with more security and controls.</p>
                        <p className="pt-6 mb-3"><span className="border-[1px] rounded-md border-secondary text-center py-3 px-3">Contact slaes</span></p>


                         
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PricePlan;