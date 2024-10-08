import Header from "../components/Header.jsx";
import Button from "../components/Button.jsx";
import {useNavigate} from "react-router-dom";
import Editor from "../components/Editor.jsx";
import {diaryDispatchContext} from "../App.jsx";
import {useContext} from "react";

const New = () => {

    const nav = useNavigate();
    const {onCreate} = useContext(diaryDispatchContext);

    const onSubmit = (input) => {

        onCreate(
            input.createdDate.getTime()
            , input.emotionId,
            input.content);

        nav("/", {replace: true});
    }

    return (
        <div>
            <Header title={"새 일기 쓰기"} leftChild={<Button text={"뒤로 가기"} onClick={() => nav(-1)}/>}/>
            <Editor onSubmit={onSubmit}/>
        </div>
    );
}
export default New;