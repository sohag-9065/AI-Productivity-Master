import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../components/Home/Home";
import ErrorPage from "../components/shared/ErrorPage";
import TeamCreate from "../components/TeamCreate/TeamCreate";
import Dashboard from "../components/Dashboard";
import SignUp from "../components/Authentication/SignUp/SignUp"
import SignIn from "../components/Authentication/SignIn/SignIn"


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/home',
                element: <Home />
            },
            {
                path: '/teamCreate',
                element: <TeamCreate />
            }
            ,
            {
                path: '/dashboard',
                element: <Dashboard />
            },
            {
                path: "/signUp",
                element: <SignUp/>
            },
            {
                path: "/signIn",
                element: <SignIn/>
            }
            
        ]
    },
])
