import "./Editor.css"
import Button from "./Button.jsx";
import {emotionData} from "../constants/emtionData.jsx";
import EmotionItem from "./EmotionItem.jsx";
import {useState} from "react";
import moment from "moment-timezone";
import dateToString from "../util/dateToString.jsx";

const Editor = () => {

    const [input, setInput] = useState({
        createDate: new Date(), emotionId: 3, content: ""
    });

    const onInputChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setInput(
            {
                ...input,
                [name]: value
            }
        )
    }


    return (<div className="editor">
        <section className="date">
            <h4>오늘의 날짜</h4>
            <input type="date" onChange={onInputChange} name="createDate" value={dateToString(input.createDate)}/>
        </section>
        <section className="emotion">
            <h4>오늘의 감정</h4>
            <div className="emotion_list_wrapper">
                {emotionData.map((emotion, index) => {
                    return < EmotionItem key={index} {...emotion} isSelected={emotion.emotionId === input.emotionId}
                                         onChange={() => {
                                             console.log(emotion.emotionId);
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
            <Button text={"취소 하기"} type={"NEGATIVE"}/>
            <Button text={"작성 완료"} type={"POSITIVE"}/>
        </section>
    </div>);
}

export default Editor;