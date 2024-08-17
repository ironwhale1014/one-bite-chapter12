import './App.css'
import Home from "./pages/Home.jsx";
import {Route, Routes} from "react-router-dom";
import Diary from "./pages/Diary.jsx";
import NotFoundPage from "./pages/NotFound.jsx";
import New from "./pages/New.jsx";
import Edit from "./pages/Edit.jsx";

function App() {

    return (
        <>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/diary/:id" element={<Diary/>}/>
                <Route path="/new" element={<New/>}/>
                <Route path="/Edit/:id" element={<Edit/>}/>
                <Route path="/*" element={<NotFoundPage/>}/>
            </Routes>
        </>
    )
}

export default App
