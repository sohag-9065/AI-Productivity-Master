import { createBrowserRouter } from "react-router-dom"; 
import Home from "../components/Home/Home";
import ErrorPage from "../components/shared/ErrorPage";
import TeamCreate from "../components/TeamCreate/TeamCreate";
import SignUp from "../components/Authentication/SignUp/SignUp"
import SignIn from "../components/Authentication/SignIn/SignIn"
import MyProfile from "../components/Dashboard/MyProfile/MyProfile";
import Dashboard from "../components/Dashboard/Dashboard";
import MyTeams from "../components/Dashboard/MyTeams/MyTeams";  
import ProtectRoute from "./ProtectRoute";
import InvitedTeams from "../components/Dashboard/InvitedTeams/InvitedTeams";
import MainBody from "../layout/MainBody"; 
import TeamDetailsAuth from "../components/Dashboard/TeamDetails/TeamDetailsAuth";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainBody />,
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
                element:
                    <ProtectRoute>
                        <TeamCreate />
                    </ProtectRoute>,
            }
            ,
            {
                path: '/dashboard',
                element:
                    <ProtectRoute>
                        <Dashboard />
                    </ProtectRoute>,
                children: [
                    {
                        path: '',
                        element: <MyProfile />
                    },
                    {
                        path: 'my-profile',
                        element: <MyProfile />
                    },
                    {
                        path: 'my-teams',
                        element: <MyTeams />
                    },
                    {
                        path: 'my-teams/details/:id',
                        element: <TeamDetailsAuth />
                    },
                    {
                        path: 'invited-teams',
                        element: <InvitedTeams/>
                    },
                    {
                        path: 'invited-teams/details/:id',
                        element: <TeamDetailsAuth />
                    }
                ]
            },
            {
                path: "/signUp",
                element: <SignUp />
            },
            {
                path: "/signIn",
                element: <SignIn />
            }

        ]
    },
])
