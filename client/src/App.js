import "./App.css";
import Home from "./pages/Home";
import { Routes, Route, Link } from "react-router-dom";
import Add from "./pages/Add";
import Edit from "./pages/Edit";
import Error from "./pages/Error";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import { Button } from "react-bootstrap";
function App() {
    return (
        <div className="App">
            <h1>MERN APP FRont</h1>
            <Navigation />
            <Link to={"/"}>
                <Button>contact list</Button>
            </Link>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/add" element={<Add />} />
                <Route path="/edit" element={<Edit />} />
                <Route path="*" element={<Error />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
