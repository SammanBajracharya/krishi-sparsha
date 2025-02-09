import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import FindDealsPage from "./pages/FindDeals";
import Header from "./components/Header";
import Profile from "./components/Profile";

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
                    element={ <Profile /> }
                />
            </Routes>
        </BrowserRouter>

    )
}

export default App
