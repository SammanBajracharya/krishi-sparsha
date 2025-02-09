import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import FindDealsPage from "./pages/FindDeals";
import Header from "./components/Header";

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
            </Routes>
        </BrowserRouter>
    )
}

export default App
