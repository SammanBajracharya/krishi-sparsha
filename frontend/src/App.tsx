import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import FindDealsPage from "@/pages/FindDeals";
import Header from "@/components/Header";
import ProfilePage from "@/pages/ProfilePage";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Marketplace from "./pages/Marketplace";

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route
                    path="/"
                    element={
                        <Home />
                    }
                />
                <Route
                    path="/find-deals"
                    element={ <FindDealsPage /> }
                />
                <Route
                    path="/profile"
                    element={ <ProfilePage /> }
                />
                <Route
                    path="/login"
                    element={ <Login /> }
                />
                <Route
                    path="/register"
                    element={ <Register /> }
                />
                <Route
                    path="/marketplace"
                    element={ <Marketplace /> }
                />
            </Routes>
        </BrowserRouter>

    )
}

export default App
