import { Outlet } from "react-router-dom";
import Header from "../components/shared/Header";
import FooterSection from "../components/shared/FooterSection"; 

 
const Main = () => {
    return (
        <div>
            <Header />  

            <Outlet />
            <FooterSection />
        </div>
    );
};

export default Main;