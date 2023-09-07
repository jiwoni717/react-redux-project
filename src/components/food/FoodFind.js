import {NavLink} from "react-router-dom";
import {useState, useEffect, Fragment} from "react";
import axios from "axios";

function FoodFind(){

    // 변수 설정
    const [curpage, setCurpage] = useState(1)
    const [totalpage, setTotalpage] = useState( 0)
    const [findList, setFindList] = useState([])
    const [startPage, setStartPage] = useState(0)
    const [endPage, setEndPage] = useState(0)
    const [address, setAddress] = useState('마포')

    // 데이터 서버로부터 읽어옴
    useEffect(() => {
        axios.get('http://localhost/food/food_find_react', {
            params:{
                address:address,
                page:curpage
            }
        }).then(response=>{
            console.log(response.data)
            setFindList(response.data)
        }).catch(error=>{
            console.log(error.response)
        })

        axios.get('http://localhost/food/food_page_react', {
            params:{
                address:address,
                page:curpage
            }
        }).then(response=>{
            console.log(response.data)
            setCurpage(response.data.curpage)
            setTotalpage(response.data.totalpage)
            setStartPage(response.data.startPage)
            setEndPage(response.data.endPage)
        }).catch(error=>{
            console.log(error.response)
        })

    }, []);

    // 이벤트 처리
    // 검색값으로 변환
    const findChange=(e)=>{
        setAddress(e.target.value)
    }

    // 검색 버튼 클릭시 처리
    const findBtn=()=>{
        setCurpage(1)
        pages(curpage);
    }

    // 검색 리스트 띄움
    const html = findList.map((c,key)=>
        <div className="col-md-3" key={c.cno}>
            <div className="thumbnail">
                <NavLink to={"/food/food_list/"+c.cno}>
                    <img src={c.poster} alt="Lights" style={{"width":"100%"}}/>
                    <div className="caption">
                        <p>{c.name}</p>
                    </div>
                </NavLink>
            </div>
        </div>
    )

    // 페이지
    const pages=(page)=>{

        axios.get('http://localhost/food/food_find_react', {
            params:{
                address:address,
                page:page
            }
        }).then(response=>{
            console.log(response.data)
            setFindList(response.data)
        }).catch(error=>{
            console.log(error.response)
        })

        axios.get('http://localhost/food/food_page_react', {
            params:{
                address:address,
                page:page
            }
        }).then(response=>{
            console.log(response.data)
            setCurpage(response.data.curpage)
            setTotalpage(response.data.totalpage)
            setStartPage(response.data.startPage)
            setEndPage(response.data.endPage)
        }).catch(error=>{
            console.log(error.response)
        })
    }

    // 페이지 클릭시 변경
    const pageChange=(page)=>{
        pages(page);
    }
    const pagePrev=()=>{
        pages(startPage-1)
    }
    const pageNext=()=>{
        pages(endPage+1)
    }

    let row=[]
    if(startPage>1)
    {
        row.push(<li><a href={"#"} onClick={()=>pagePrev(startPage>1?startPage-1:startPage)}>&lt;</a></li>)
    }
    for(let i=startPage;i<=endPage;i++)
    {
        if(i===curpage)
        {
            row.push(<li className={"active"}><a href={"#"} onClick={()=>pageChange(i)}>{i}</a> </li>)
        }
        else
        {
            row.push(<li><a href={"#"} onClick={()=>pageChange(i)}>{i}</a> </li>)
        }
    }
    if(endPage<totalpage)
    {
        row.push(<li><a href={"#"} onClick={()=>pageNext(endPage<totalpage?endPage+1:endPage)}>&gt;</a></li>)
    }

    return (
        <Fragment>
            <div className={"row"} style={{"marginBottom":"20px"}}>
                <table className={"table"}>
                    <tr>
                        <td>
                            <input type={"text"} className={"input-sm"} size={"25"} value={address} style={{"marginRight":"5px"}} onChange={findChange}/>
                            <input type={"button"} className={"btn btn-sm btn-default"} value={"검색"} onClick={()=>findBtn()}/>
                        </td>
                    </tr>
                </table>
            </div>

            <div className={"row"} style={{"marginBottom":"20px"}}>
                {html}
            </div>

            <div className={"row"} style={{"marginBottom":"100px"}}>
                <div className={"text-center"}>
                    <ul className="pagination">
                        {row}
                    </ul>
                </div>
            </div>
        </Fragment>
    )
}
export default FoodFind