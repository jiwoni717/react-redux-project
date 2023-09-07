import {Fragment, useState, useEffect} from "react";
import axios from "axios";
import {fetchNewsData} from "../../actions/foodActions";
import {useDispatch, useSelector} from "react-redux";

function News(){

    const [fd, setFd] = useState('마포')
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchNewsData(fd))
    }, []);

    const newsList = useSelector((state)=>state.foods.news_data)

    const newsChange=(e)=>{
        setFd(e.target.value)
    }

    const findBtn=()=>{
        dispatch(fetchNewsData(fd))
    }

    let html = newsList.map((news)=>
        <table className={"table"}>
            <tbody>
                <tr>
                    <td>
                        <a href={news.link} target={"_blank"}>
                            <h3 style={{"color":"orange"}} dangerouslySetInnerHTML={{__html:news.title}}></h3>
                        </a>
                    </td>
                </tr>
                <tr>
                    <td dangerouslySetInnerHTML={{__html:news.desc}}></td>
                </tr>
                <tr>
                    <td className={"text-right"}>{news.pubdate}</td>
                </tr>
            </tbody>
        </table>
    )

    return (
        <Fragment>
            <div className={"row"} style={{"marginBottom":"20px"}}>
                <table className={"table"}>
                    <tr>
                        <td>
                            <input type={"text"} className={"input-sm"} size={"25"} style={{"marginRight":"5px"}} onChange={newsChange}/>
                            <input type={"button"} className={"btn btn-sm btn-default"} value={"검색"} onClick={findBtn}/>
                        </td>
                    </tr>
                </table>
            </div>

            <div className={"row"}>
                <table className={"table"}>
                    <tr>
                        {html}
                    </tr>
                </table>
            </div>
        </Fragment>
    )
}
export default News