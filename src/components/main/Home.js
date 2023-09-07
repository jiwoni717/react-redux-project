import {Fragment, useState, useEffect} from "react";
import axios from "axios";
import {NavLink} from "react-router-dom";
import {FETCH_CATEGORY} from "../../actions/types";
import {fetchCategory} from "../../actions/foodActions";
import {useDispatch, useSelector} from "react-redux";

function Home(){

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(fetchCategory(1))
    }, [])
    const changeCategory =(no)=>{
        if(no===1)
        {
            dispatch(fetchCategory(1))
        }
        else if(no===2)
        {
            dispatch(fetchCategory(2))
        }
        else if(no===3)
        {
            dispatch(fetchCategory(3))
        }
    }

    const category = useSelector((state)=>state.foods.category)

    const html = category.map((c,key)=>
        <div className="col-md-4" key={c.cno}>
            <div className="thumbnail">
                <NavLink to={"/food/food_list/"+c.cno}>
                    <img src={c.poster} alt="Lights" style={{"width":"100%"}}/>
                    <div className="caption">
                        <p>{c.title}</p>
                    </div>
                </NavLink>
            </div>
        </div>
    )

    return (
        <Fragment>
            <div className={"row"} style={{"marginBottom":"50px"}}>
                <div className={"text-center"}>
                    <input type={"button"} className={"btn btn-sm btn-default"} value={"믿고 보는 맛집 리스트"} onClick={()=>changeCategory(1)} style={{"marginRight":"5px"}}/>
                    <input type={"button"} className={"btn btn-sm btn-default"} value={"지역별 맛집 리스트"} onClick={()=>changeCategory(2)}/>
                    <input type={"button"} className={"btn btn-sm btn-default"} value={"메뉴별 맛집 리스트"} onClick={()=>changeCategory(3)} style={{"marginLeft":"5px"}}/>
                </div>
            </div>

            <div className={"row"}>
                {html}
            </div>
        </Fragment>
    )
}
export default Home