import {useParams} from "react-router-dom";

const Edit = () => {
   const params =  useParams();
    return (
        <div>
            {`${params.id} 번째 수정 하기`}
        </div>
    );
}

export default Edit