import React from 'react';
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
import Payment from '@/pages/Payment'
import Tos from "./pages/Tos";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "@/components/ProtectedRoute";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CartProvider } from '@/context/CartContext';
import Checkout from "@/pages/Checkout";
import { Toaster } from "@/components/ui/toaster";
import JWTProvider from '@/components/AuthMiddleware';

function App() {
    return (
<<<<<<< HEAD
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
                        path="/payment"
                        element={ <Payment /> }
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
=======
        <CartProvider>
            <BrowserRouter>
                <AuthProvider>
                    <JWTProvider>
                        <Header />
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/find-deals" element={<FindDealsPage />} />
                            <Route path="/profile/:userId" element={<ProfilePage />} />
                            <Route path="/marketplace" element={<Marketplace />} />
                            <Route path="/login" element={<Login />} />
                            <Route path="/register" element={<Register />} />
                            <Route path="/terms-of-service" element={<Tos />} />
                            <Route
                                path="/dashboard/:userId"
                                element={
                                    <ProtectedRoute>
                                        <Dashboard />
                                    </ProtectedRoute>
                                }
                            />
                            <Route path="/checkout" element={<Checkout />} />
                        </Routes>
                        <Footer />
                    </JWTProvider>
                </AuthProvider>
            </BrowserRouter>
            <Toaster />
        </CartProvider>
>>>>>>> a7032e36b317a7b73bbddf77dc5cb62dc0ee4bcd
    );
}

export default App;
