import "./Editor.css"
import Button from "./Button.jsx";
import {emotionData} from "../constants/emtionData.jsx";
import EmotionItem from "./EmotionItem.jsx";
import {useState} from "react";
import dateToString from "../util/dateToString.jsx";
import {useNavigate} from "react-router-dom";

const Editor = ({onSubmit}) => {

    const [input, setInput] = useState({
        createdDate: new Date(), emotionId: 3, content: ""
    });

    const nav = useNavigate();

    const onInputChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        if (name === "createdDate") {
            value = new Date(value);
            console.log(value);
        }

        setInput(
            {
                ...input,
                [name]: value
            }
        )
    }

    const onSubmitButtonClick = () => {
        onSubmit(input);
    }


    return (<div className="editor">
        <section className="date">
            <h4>오늘의 날짜</h4>
            <input type="date" onChange={onInputChange} name="createdDate" value={dateToString(input.createdDate)}/>
        </section>
        <section className="emotion">
            <h4>오늘의 감정</h4>
            <div className="emotion_list_wrapper">
                {emotionData.map((emotion, index) => {
                    return < EmotionItem key={index} {...emotion} isSelected={emotion.emotionId === input.emotionId}
                                         onChange={() => {
                                             onInputChange({target: {name: "emotionId", value: emotion.emotionId}})
                                         }}/>
                })}
            </div>
        </section>
        <section className="content-input">
            <h4>오늘의 일기</h4>
            <textarea placeholder={"오늘은 어땠나요?"} name="content"
                      onChange={onInputChange}
                      value={input.content}/>
        </section>
        <section className="button">
            <Button text={"취소 하기"} type={"NEGATIVE"} onClick={() => nav(-1)}/>
            <Button text={"작성 완료"} type={"POSITIVE"} onClick={onSubmitButtonClick}/>
        </section>
    </div>);
}

export default Editor;