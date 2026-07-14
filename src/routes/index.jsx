import { createBrowserRouter } from "react-router";
import PortfolioLayout from './../Layout/PortfolioLayout';
import HomePage from './../pages/HomePage';
import SingleProjectPage from './../pages/SingleProjectPage';
import Error from "../Component/Error";
import NotFound from "../Component/NotFound";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <PortfolioLayout />,
        errorElement: <Error />,
        children: [
            {
                path: "",
                element: <HomePage />
            },
            {
                path: "projects/:projectId",
                element: <SingleProjectPage />
            }
        ]
    },
    {
        path: "*",
        element: <NotFound />
    }
])