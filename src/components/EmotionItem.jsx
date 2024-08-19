import "./EmotionItem.css"
import {getEmotionImg} from "../util/get-emotion-img.jsx";

const EmotionItem = ({emotionId, emotionName, isSelected, onChange}) => {
    return (
        <div className={`EmotionItem ${isSelected ? `EmotionItem_${emotionId}` : ""}`} onClick={onChange}>
            <section>
                <img className="emotion_img" src={getEmotionImg(emotionId)} alt=""/>
            </section>
            <section>{emotionName}</section>
        </div>
    );
}

export default EmotionItem;