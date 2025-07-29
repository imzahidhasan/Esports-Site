import { createBrowserRouter } from "react-router";
import Layout from "../components/Layout";
import Home from "../pages/Home";
import Team from "../pages/Team";
import Contact from "../pages/Contact";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "team",
                element: <Team />
            },
            {
                path: "matches",
                element: <div className="min-h-screen bg-gray-900 py-20 flex items-center justify-center">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold text-white mb-4">Matches</h1>
                        <p className="text-gray-400">Coming Soon - Match schedule and results</p>
                    </div>
                </div>
            },
            {
                path: "achievements",
                element: <div className="min-h-screen bg-gray-900 py-20 flex items-center justify-center">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold text-white mb-4">Achievements</h1>
                        <p className="text-gray-400">Coming Soon - Our trophy cabinet</p>
                    </div>
                </div>
            },
            {
                path: "news",
                element: <div className="min-h-screen bg-gray-900 py-20 flex items-center justify-center">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold text-white mb-4">News</h1>
                        <p className="text-gray-400">Coming Soon - Latest updates and announcements</p>
                    </div>
                </div>
            },
            {
                path: "contact",
                element: <Contact />
            }
        ]
    }
]);

export default router;
