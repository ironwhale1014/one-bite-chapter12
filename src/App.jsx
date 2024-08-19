import './App.css'
import Home from "./pages/Home.jsx";
import {Route, Routes} from "react-router-dom";
import Diary from "./pages/Diary.jsx";
import NotFoundPage from "./pages/NotFound.jsx";
import New from "./pages/New.jsx";
import Edit from "./pages/Edit.jsx";
import {createContext, useEffect, useReducer, useRef, useState} from "react";
import {mockData} from "./constants/mockData.jsx";

export const diaryContext = createContext();
export const diaryDispatchContext = createContext();

const reducer = (state, action) => {

    let nextState;
    switch (action.type) {
        case "CREATE":
            nextState = [action.data, ...state];
            break;
        case "INIT":
            return action.data;
    }
    localStorage.setItem("diary", JSON.stringify(nextState));
    return nextState;
}

function App() {

    const [data, dispatch] = useReducer(reducer, mockData);
    const idRef = useRef(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const storedData = localStorage.getItem("diary");
        if (!storedData) {
            setLoading(false);
            return;
        }

        const parsedData = JSON.parse(storedData);
        if (!Array.isArray(parsedData)) {
            setLoading(false);
            return;
        }
        let maxId = 0;
        parsedData.forEach((item) => {
            if ((Number(item.id) > maxId)) {
                maxId = item.id;
            }
        });
        idRef.current = maxId+1;

        dispatch(
            {
                type: "INIT",
                data:parsedData,
            }
        );

        setLoading(false);


    }, []);

    const onCreate = (createdDate, emotionId, content) => {
        dispatch(
            {
                type: "CREATE",
                data: {
                    id: 100,
                    createdDate, emotionId, content
                }
            }
        );
    }

    const onUpdate = () => {
        console.log("click onUpdate");
    }

    const onDelete = () => {
        console.log("click onDelete");
    }

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <diaryContext.Provider value={data}>
                <diaryDispatchContext.Provider value={{onCreate, onUpdate, onDelete}}>
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
