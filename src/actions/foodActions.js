/*
    actions : 기능 담당 → 외부 데이터 읽기 => Model
      foodActions : 기능 만들기 → axios
      types : 기능 선언 => @Controller

    components => JSP

    reducers : action과 component 연결 => viewResolver
      foodReducer => DisPatcherServlet
      index : 최종적으로 변경된 내용 저장


 */
// 외부 데이터 읽기
import {FETCH_CATEGORY, FETCH_CATE_LIST,FETCH_CATE_INFO, FETCH_FOOD_LOCATION, FETCH_FOOD_DETAIL, FETCH_NEWS} from "./types";
import axios from "axios";
import {type} from "@testing-library/user-event/dist/type";

export function fetchCategory(no){

    /*
            자바스크립트 매개변수 => 함수 전송
            dispatch(fetchCategory(1))
            function a(){}
            function b(a){}

            Component => action(함수 이용) => Reducer(처리, 갱신) => store(최종 결과값 저장) => Component
                    dispatch           dispatch
     */
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
    else if(no===2) {
        return function (dispatch) {
            axios.get('http://localhost/food/category2')
                .then(response => dispatch({
                    type: FETCH_CATEGORY,
                    payload: response.data
                }))
        }
    }
    else if(no===3) {
        return function (dispatch) {
            axios.get('http://localhost/food/category3')
                .then(response => dispatch({
                    type: FETCH_CATEGORY,
                    payload: response.data
                }))
        }
    }
}

// 카테고리별 맛집 목록
export const fetchCategoryFoodList=(cno)=>dispatch=>{
    axios.get('http://localhost/food/food_list_react', {
        params:{
            cno:cno
        }
    }).then((response)=>dispatch({
        type:FETCH_CATE_LIST,
        payload:response.data
    }))
}

// 맛집 상세보기
export const fetchCategoryInfo=(cno)=>dispatch=>{
    axios.get('http://localhost/food/category_info_react', {
        params:{
            cno:cno
        }
    }).then((response)=>dispatch({
        type:FETCH_CATE_INFO,
        payload:response.data
    }))
}

export const fetchFoodDetail=(fno)=>dispatch=>{
    axios.get('http://localhost/food/food_detail_react', {
        params:{
            fno:fno
        }
    }).then((response)=>dispatch({
        type:FETCH_FOOD_DETAIL,
        payload:response.data
    }))
}

// 검색 데이터 읽기

// 페이지 읽기

// 뉴스
export const fetchNewsData=(fd)=>dispatch=>{
    axios.get('http://localhost/news/news_find_react', {
        params:{
            fd:fd
        }
    }).then((response)=>dispatch({
        type:FETCH_NEWS,
        payload:response.data
    }))
}