import "./DiaryList.css"
import Button from "./Button.jsx";
import DiaryItem from "./DiaryItem.jsx";
import {useNavigate} from "react-router-dom";

const DiaryList = ({data}) => {

    const nav = useNavigate();

    return (
        <div className="DiaryList">
            <section className="menu_bar">
                <select>
                    <option value="latest">최신순</option>
                    <option value="oldest">오래된 순</option>
                </select>
                <Button type={"POSITIVE"} text={"새 일기 쓰기"} onClick={()=>{nav(`/new`)}}/>
            </section>
            <section className="items">
                {data.map((item) => <DiaryItem key={item.id} {...item}/>)}
            </section>
        </div>
    );
}

export default DiaryList;