import { createBrowserRouter } from "react-router-dom";
import Home from "../page/Home";
import AuthLayout from "../page/AuthLayout";
import Login from "../components/Login";
import Register from "../components/Register";
import ForgetPassword from "../components/ForgetPassword";
import DonationCampaigns from "../page/DonationCampaigns";
import WinterDetails from "../page/WinterDetails";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
    },
    {
        path: '/donationCamp',
        element: <DonationCampaigns></DonationCampaigns>
    },
    {
        path: '/alldonation/:id',
        element: <WinterDetails></WinterDetails>,
        loader: () => fetch('../winter.json')
    },
    {
        path: 'auth',
        element:<AuthLayout></AuthLayout>,
        children: [
            {
                path: '/auth/login',
                element: <Login></Login>
            },
            {
                path: '/auth/register',
                element:<Register></Register>
            },
            {
                path: '/auth/forgetpassword',
                element: <ForgetPassword></ForgetPassword>
            }
        ]
    }
  ]);
export default router;