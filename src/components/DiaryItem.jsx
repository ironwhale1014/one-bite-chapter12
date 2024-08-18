import "./DiaryItem.css";
import Button from "./Button.jsx";
import {getEmotionImg} from "../util/get-emotion-img.jsx";
import {useNavigate} from "react-router-dom";

const DiaryItem = ({id, createdDate, emotionId, content}) => {


    const nav = useNavigate();

    return (
        <div className="DiaryItem">
            <section className={`img_section img_section_${emotionId}`} onClick={()=>nav(`/diary/${id}`)}>
                <img src={getEmotionImg(emotionId)} alt=""/>
            </section>
            <section className="info_section" onClick={()=>nav(`/diary/${id}`)}>
                <div className="date">{new Date(createdDate).toLocaleDateString()}</div>
                <div className="content">{content}</div>
            </section>
            <section className="button">
                <Button text={"수정하기"} onClick={()=>{nav(`/edit/${id}`)}}/>
            </section>

        </div>
    );
}

export default DiaryItem;