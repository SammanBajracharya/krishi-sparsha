import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import FindDealsPage from "./pages/FindDeals";
import Header from "./components/Header";
import ProfilePage from "./pages/ProfilePage";

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
            </Routes>
        </BrowserRouter>

    )
}

export default App
