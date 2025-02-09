<<<<<<< HEAD
import Header from "./components/Header"
import Home from "./pages/Home"

function App() {


  return (
    <>
      <Header/>
      <Home />  
    </>
  )
=======
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
>>>>>>> e100798724c2eea0f85c95c0285a7aff59d3f236
}

export default App
