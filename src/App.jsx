import './App.css'
import Home from "./pages/Home.jsx";
import {Route, Routes} from "react-router-dom";
import Diary from "./pages/Diary.jsx";
import NotFoundPage from "./pages/NotFound.jsx";
import New from "./pages/New.jsx";
import Edit from "./pages/Edit.jsx";
import {createContext, useReducer} from "react";
import {mockData} from "./constants/mockData.jsx";

export const diaryContext = createContext();
export const diaryDispatchContext = createContext();

const reducer = (state, action) => {
    switch (action.type) {
        case "CREATE":
            return state;
    }
}

function App() {

    const [data, dispatch] = useReducer(reducer, mockData);


    const onCrate = () => {
        console.log("click onCrate");
    }

    const onUpdate = () => {
        console.log("click onUpdate");
    }

    const onDelete = () => {
        console.log("click onDelete");
    }

    return (
        <>
            <diaryContext.Provider value={data}>
                <diaryDispatchContext.Provider value={{onCrate, onUpdate, onDelete}}>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/diary/:id" element={<Diary/>}/>
                        <Route path="/new" element={<New/>}/>
                        <Route path="/Edit/:id" element={<Edit/>}/>
                        <Route path="/*" element={<NotFoundPage/>}/>
                    </Routes>
                </diaryDispatchContext.Provider>
            </diaryContext.Provider>

        </>
    )
}

export default App
