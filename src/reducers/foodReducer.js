import {
    FETCH_CATE_INFO, FETCH_FOOD_LOCATION, FETCH_CATE_LIST,
    FETCH_FOOD_DETAIL, FETCH_CATEGORY, FETCH_NEWS, FETCH_PAGE, FETCH_COUNT
} from "../actions/types";

// 데이터를 저장  => useState
// useSelector((state)=> cate_food)
const initialState={
    category:[],
    cate_food:[],
    food_detail:{},
    cate_info:{},
    page_info:{},
    food_data:[],
    news_data:[],
    totalpage:0,
    count:0
}
/*
       react = JSP
       store = DispatcherServlet
       action = @RequestMapping(types) , DAO
       reducer = Model(데이터 관리)
       request = state
       JSP => DispatcherSerlet => @RequestMapping => DAO => request
       React => store => action => reducer => state
       React => 이벤트 발생 => action({type,payload}) => reducer => store
       => reducer에서 state갱신 ==> re-rendering => 화면 변경
       const 객체는 처음 선언한 값
       그대로를 프로그램 실행 내내 변함없이 가지고 있을 것이라고 예상할 것이다.
 */
export default function (state=initialState,action){
    console.log("reducer function call...action(전송된 값)")
    switch (action.type)
    {
        case FETCH_CATEGORY:
            return {
                ...state,
                category: action.payload
            }
        case FETCH_CATE_LIST:
            return {
                ...state,
                cate_food: action.payload
            }
        case FETCH_CATE_INFO:
            return {
                ...state,
                cate_info: action.payload
            }
        case FETCH_FOOD_DETAIL:
            return {
                ...state,
                food_detail: action.payload
            }
        case FETCH_NEWS:
            return {
                ...state,
                news_data: action.payload
            }
        case FETCH_FOOD_LOCATION:
            return {
                ...state,
                food_data: action.payload
            }
        case FETCH_PAGE:
            return {
                ...state,
                totalpage: action.payload
            }
        case FETCH_COUNT:
            return {
                ...state,
                count:action.payload
            }
        default:
            return state;
    }
}