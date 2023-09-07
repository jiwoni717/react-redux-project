// 외부 데이터 읽기
import {FETCH_CATE_INFO,FETCH_FOOD_LOCATION,FETCH_CATE_LIST,
FETCH_FOOD_DETAIL,FETCH_CATEGORY,FETCH_NEWS,FETCH_PAGE,FETCH_COUNT} from "./types";
import axios from "axios";
// dispatch(fetchCategory(1))
// 자바스크립트 매개변수 => 함수 전송
/*
     function a(){ let aa=10}
     function b(a){

     }
                            dispatch       dispatch
     Component (React = View) => action(함수) => Reducer(처리,갱신) => store(최종 결과값)
                                                                       |
                                                                      React
 */
export function fetchCategory(no){
    if(no===1)
    {
        return function (dispatch){
            axios.get('http://localhost/food/category1')
                .then(response=>dispatch({
                    type:FETCH_CATEGORY,
                    payload:response.data
                }))
        }
    }
    else if(no===2)
    {
        return function (dispatch){
            axios.get('http://localhost/food/category2')
                .then(response=>dispatch({
                    type:FETCH_CATEGORY,
                    payload:response.data
                }))
        }
    }
    else if(no===3)
    {
        return function (dispatch){
            axios.get('http://localhost/food/category3')
                .then(response=>dispatch({
                    type:FETCH_CATEGORY,
                    payload:response.data
                }))
        }
    }
}
// 카테고리별 맛집 목록
export const fetchCategoryFoodList=(cno)=>dispatch=>{
    axios.get("http://localhost/food/food_list_react",{
        params:{
            cno:cno
        }
    }).then((response)=>dispatch({
        type:FETCH_CATE_LIST,
        payload:response.data
    }))
}
export const fetchCategoryInfo=(cno)=>dispatch=>{
    axios.get("http://localhost/food/category_info_react",{
        params:{
            cno:cno
        }
    }).then((response)=>dispatch({
        type:FETCH_CATE_INFO,
        payload:response.data
    }))
}
// 맛집 상세보기
export const fetchFoodDetail=(fno)=>dispatch=>{
    axios.get("http://localhost/food/food_detail_react",{
        params:{
            fno:fno
        }
    }).then(response=>dispatch({
        type:FETCH_FOOD_DETAIL,
        payload:response.data
        // reducer로 전송 => store
    }))
}

export const fetchLocation=(page,address)=>dispatch=>{
    axios.get("http://localhost/food/food_find_react",{
        params:{
            page:page,
            address:address
        }
    }).then(response=>dispatch({
        type:FETCH_FOOD_LOCATION,
        payload:response.data
        // reducer로 전송 => store
    }))
}
export const fetchPage=(address)=>dispatch=>{
    axios.get("http://localhost/food/food_page_react",{
        params:{
            address:address
        }
    }).then(response=>dispatch({
        type:FETCH_PAGE,
        payload:response.data
        // reducer로 전송 => store
    }))
}
export const fetchCount=(address)=>dispatch=>{
    axios.get("http://localhost/food/food_count_react",{
        params:{
            address:address
        }
    }).then(response=>dispatch({
        type:FETCH_COUNT,
        payload:response.data
        // reducer로 전송 => store
    }))
}
export const fetchNews=(fd)=>dispatch=>{
    axios.get("http://localhost/news/news_find_react",{
        params:{
            fd:fd
        }
    }).then(response=>dispatch({
        type:FETCH_NEWS,
        payload:response.data
        // reducer로 전송 => store
    }))
}