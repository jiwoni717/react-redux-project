import {NavLink} from "react-router-dom";

function Header(){
    return (
        <nav className="navbar navbar-default">
            <div className="container-fluid">
                <div className="navbar-header">
                    <NavLink className="navbar-brand" to={"/"}>Redux</NavLink>
                </div>
                <ul className="nav navbar-nav">
                    <li><NavLink to={"/"}>Home</NavLink></li>
                    <li className="dropdown">
                        <NavLink className="dropdown-toggle" data-toggle="dropdown" to={"#"}>맛집
                            <span className="caret"></span></NavLink>
                        <ul className="dropdown-menu">
                            <li><NavLink to={"/food/food_find"}>지역별 맛집 찾기</NavLink></li>
                        </ul>
                    </li>
                    <li className="dropdown">
                        <NavLink className="dropdown-toggle" data-toggle="dropdown" to={"#"}>여행
                            <span className="caret"></span></NavLink>
                        <ul className="dropdown-menu">
                            <li><NavLink to={"/seoul/location"}>명소</NavLink></li>
                            <li><NavLink to={"/seoul/nature"}>자연</NavLink></li>
                            <li><NavLink to={"/seoul/shop"}>쇼핑</NavLink></li>
                        </ul>
                    </li>
                    <li><NavLink to={"#"}>자유게시판</NavLink></li>
                    <li><NavLink to={"/news/news_find"}>뉴스 검색</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}
export default Header