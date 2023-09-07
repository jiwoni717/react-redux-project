import {NavLink} from "react-router-dom";
import {useState,useEffect,Fragment} from "react";
import axios from "axios";
import {FETCH_PAGE,FETCH_FOOD_LOCATION} from "../../actions/types";
import {fetchCount, fetchLocation, fetchPage} from "../../actions/foodActions";
import {useSelector,useDispatch} from "react-redux";
import Pagination from "react-js-pagination";

function Find(){

    // 변수 설정
    const [curpage,setCurpage]=useState(1)
    const [address,setAddress]=useState('마포')
    //const [findList,setFindList]=useState([])
    const dispatch=useDispatch()
    useEffect(() => {
        dispatch(fetchLocation(curpage,address))
        dispatch(fetchPage(address))
        dispatch(fetchCount(address))
    }, [address,curpage]);
    // 이벤트 처리
    const findList=useSelector((state)=>state.foods.food_data)
    const totalpage=useSelector((state)=>state.foods.totalpage)
    const count=useSelector((state)=>state.foods.count)
    console.log("count="+count)
    // 입력값으로 변환
    const findChange=(e)=>{
        setAddress(e.target.value)
    }
    // 버튼 클릭시 처리
    const findBtn=()=>{
        setCurpage(1)

    }

    const handlePageChange = (page) => {
        setCurpage(page);
        console.log("page=" + curpage)

    }


    const html=findList.map((c,key)=>

        <div className="col-md-3" key={c.cno}>
            <div className="thumbnail">
                <NavLink to={"/food/food_find/"+c.cno}>
                    <img src={c.poster} alt="Lights" style={{"width": "100%"}}/>
                    <div className="caption">
                        <p>{c.name}</p>
                    </div>
                </NavLink>
            </div>
        </div>

    )

    return (
        <Fragment>
            <div className={"row"}>
                <table className={"table"}>
                    <tr>
                        <td>
                            <input type={"text"} className={"input-sm"}
                                   size={"25"} value={address} onChange={findChange}/>
                            <input type={"button"} className={"btn btn-sm btn-primary"}
                                   value={"검색"} />
                        </td>
                    </tr>
                </table>
            </div>
            <div style={{"height":"20px"}}></div>
            <div className={"row"}>
                {html}
            </div>
            <div style={{"height":"10px"}}></div>
            <div className={"row"}>
                <div className={"text-center"}>
                    <Pagination
                        activePage={curpage}
                        itemsCountPerPage={20}
                        totalItemsCount={count}
                        pageRangeDisplayed={5}
                        prevPageText={"‹"}
                        nextPageText={"›"}
                        onChange={handlePageChange}
                    />
                </div>
            </div>
        </Fragment>
    )
}
export default Find;