import Header from "../components/Header.jsx";
import Button from "../components/Button.jsx";

const Home = ()=>{

    //날짜 변환
    const date = new Date("2024-02-19").getTime();
    const createdDate = new Date(date);
    const year = createdDate.getFullYear();
    const month = createdDate.getMonth()+1;
    // -----------//

    return(
        <div>
            <Header title={`${year}년 ${month}월`}
                leftChild={<Button text={"<"}/>}
                rightChild={<Button text={">"}/>}
            />
        </div>
    );
}

export default Home;