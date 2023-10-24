import { useLocation } from "react-router-dom";

export const Search = () => {
    const location = useLocation();
    const keyword = new URLSearchParams(location.search).get("keyword");
    console.log('keyword : ', keyword)
    
    return (
        <div>Search</div>
    );
}