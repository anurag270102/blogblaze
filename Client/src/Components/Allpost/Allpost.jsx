import { useParams } from "react-router-dom";

const Allpost=()=>{
    const params=useParams();
    console.log(params.search);
    return(
        <>
        <h1>Allpost</h1>
        </>
    )
}
export default Allpost;