import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../components/Home/Home";
import ErrorPage from "../components/shared/ErrorPage";
import TeamCreate from "../components/TeamCreate/TeamCreate"; 
import SignUp from "../components/Authentication/SignUp/SignUp"
import SignIn from "../components/Authentication/SignIn/SignIn"
import MyProfile from "../components/Dashboard/MyProfile/MyProfile"; 
import Dashboard from "../components/Dashboard/Dashboard";
import MyTeams from "../components/Dashboard/MyTeams/MyTeams";
import OthersTeam from "../components/Dashboard/OthersTeam/OthersTeam";
import TeamDetails from "../components/Dashboard/MyTeams/TeamDetails/TeamDetails";


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
                element: <Dashboard />,
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
                        element: <TeamDetails />
                    },
                    {
                        path: 'others-team',
                        element: <OthersTeam />
                    }
                ]
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
