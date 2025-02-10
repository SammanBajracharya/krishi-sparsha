import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/context/AuthContext";
import Home from "@/pages/Home";
import FindDealsPage from "@/pages/FindDeals";
import Header from "@/components/Header";
import ProfilePage from "@/pages/ProfilePage";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Marketplace from "./pages/Marketplace";
import Footer from "./components/Footer";
import Tos from "./pages/Tos";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "@/components/ProtectedRoute";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
    return (
        <BrowserRouter>
            <AuthProvider>
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
                        path="/profile/:userId"
                        element={ <ProfilePage /> }
                    />
                    <Route
                        path="/marketplace"
                        element={ <Marketplace /> }
                    />
                    <Route
                        path="/login"
                        element={
                            <ProtectedRoute>
                                <Login />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path="/register"
                        element={
                            <ProtectedRoute>
                                <Register />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path="/terms-of-service"
                        element={ <Tos /> }
                    />
                    <Route
                        path="/dashboard/:userId"
                        element={
                            <Dashboard />
                        }
                    />
                </Routes>
                <Footer/>
            </AuthProvider>
        </BrowserRouter>
    );
};

export default App;
