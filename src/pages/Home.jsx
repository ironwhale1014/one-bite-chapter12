import Header from "../components/Header.jsx";
import Button from "../components/Button.jsx";
import DiaryList from "../components/DiaryList.jsx";
import {useContext, useState} from "react";
import {diaryContext} from "../App.jsx";

function monthlyData(pivotDate, data) {

    const beginDate = new Date(pivotDate.getFullYear(), pivotDate.getMonth(), 1, 0, 0, 0);

    const endDate = new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1, 0, 23, 59, 59, 59);


    return data.filter((item) => {
        return item.createdDate >= beginDate && item.createdDate <= endDate;
    });
}


const Home = () => {


    const [pivotDate, setPivotDate] = useState(new Date());
    const data = useContext(diaryContext);

    let filteredData = monthlyData(pivotDate, data);


    //날짜 변환
    const year = pivotDate.getFullYear();
    const month = pivotDate.getMonth() + 1;
    // -----------//


    const onPrevious = () => {
        setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth()-1, 1,0,0,0,0));
    }

    const onNext = () => {
        setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1, 1,0,0,0,0));
    }


    return (
        <div>
            <Header title={`${year}년 ${month}월`}
                    leftChild={<Button text={"<"} type={""} onClick={onPrevious}/>}
                    rightChild={<Button text={">"} onClick={onNext}/>}
            />
            <DiaryList data={filteredData}/>
        </div>
    );
}

export default Home;