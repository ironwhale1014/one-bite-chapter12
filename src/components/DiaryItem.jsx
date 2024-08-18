import "./DiaryItem.css";
import Button from "./Button.jsx";
import {getEmotionImg} from "../util/get-emotion-img.jsx";

const DiaryItem = ({id, createdDate, emotionId, content}) => {

    console.log(id, createdDate, emotionId, content);


    return (
        <div className="DiaryItem">
            <section className={`img_section img_section_${emotionId}`}>
                <img src={getEmotionImg(emotionId)} alt=""/>
            </section>
            <section className="info_section">
                <div className="date">{new Date(createdDate).toLocaleDateString()}</div>
                <div className="content">{content}</div>
            </section>
            <section className="button">
                <Button text={"수정하기"}/>
            </section>

        </div>
    );
}

export default DiaryItem;