import {Fragment, useEffect, useState} from "react";
import {NavLink, useNavigate} from "react-router-dom";
import {useParams} from "react-router";
import axios from "axios";
import {useSelector, useDispatch} from "react-redux";
import {FETCH_FOOD_DETAIL} from "../../actions/types";
import {fetchFoodDetail} from "../../actions/foodActions";

function FoodDetail(){

    // 전송된 데이터 받기
    const {fno}=useParams()
    const nav = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {

        dispatch(fetchFoodDetail(fno))

    }, {});

    const foodDetail = useSelector((state)=>state.foods.food_detail)

    let poster = String(foodDetail.poster)
    const img = poster.split("^")

    const html = img.map((m)=>
        <td><img src={m} style={{"width":"100%"}}/></td>
    )

    return (
        <div className={"row"}>
            <table className={"table"} style={{"marginBottom":"10px"}}>
                <tbody>
                    <tr>
                        {html}
                    </tr>
                </tbody>
            </table>

            <table className={"table"}>
                <tbody>
                    <tr>
                        <td colSpan={"2"}>
                            <h3>{foodDetail.name}&nbsp;<span style={{'color':'orange'}}>{foodDetail.score}</span></h3>
                        </td>
                    </tr>
                    <tr>
                        <th width={"15%"} className={"text-center"}>주소</th>
                        <td width={"85%"}>{foodDetail.address}</td>
                    </tr>
                    <tr>
                        <th width={"15%"} className={"text-center"}>전화</th>
                        <td width={"85%"}>{foodDetail.phone}</td>
                    </tr>
                    <tr>
                        <th width={"15%"} className={"text-center"}>음식 종류</th>
                        <td width={"85%"}>{foodDetail.type}</td>
                    </tr>
                    <tr>
                        <th width={"15%"} className={"text-center"}>가격대</th>
                        <td width={"85%"}>{foodDetail.price}</td>
                    </tr>
                    <tr>
                        <th width={"15%"} className={"text-center"}>영업시간</th>
                        <td width={"85%"}>{foodDetail.time}</td>
                    </tr>
                    <tr>
                        <th width={"15%"} className={"text-center"}>주차</th>
                        <td width={"85%"}>{foodDetail.parking}</td>
                    </tr>
                <tr>
                    <td colSpan={2} className={"text-right"}>
                        <button onClick={()=>nav(-1)} to={"/"} className={"btn btn-sm btn-default"}>목록</button>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}
export default FoodDetail