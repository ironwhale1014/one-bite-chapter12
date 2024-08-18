import "./DiaryList.css"
import Button from "./Button.jsx";

const DiaryList = ({data}) => {
    console.log(data);
    return (
        <div className="DiaryList">
            <section className="menu_bar">
                <select>
                    <option value="latest">최신순</option>
                    <option value="oldest">오래된 순</option>
                </select>
                <Button type={"POSITIVE"} text={"새 일기 쓰기"}/>
            </section>
        </div>
    );
}

export default DiaryList;