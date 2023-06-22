import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../components/Home/Home";
import ErrorPage from "../components/shared/ErrorPage";
import TeamCreate from "../components/TeamCreate/TeamCreate";


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
            
        ]
    },
])
