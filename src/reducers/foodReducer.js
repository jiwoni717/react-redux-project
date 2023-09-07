import {FETCH_CATEGORY, FETCH_CATE_LIST,FETCH_CATE_INFO, FETCH_FOOD_LOCATION, FETCH_FOOD_DETAIL, FETCH_NEWS} from "../actions/types";

// 데이터 저장 => useState
// useSelector((state)=>cate_food)
/*
    react = JSP
    store = DispatcherServlet
    action = @RequestMapping(types), DAO
    reducer = Model(데이터 관리)
    state = request

    React => store => action => reducer => state
    React : 이벤트 발생 => action({type, payload}) => reducer =>store에서 데이터 읽어와서 출력
                                                    -------
                                               저장된 데이터가 갱신되면 re-rendering=>화면 변경
    const 객체는 처음 선언한 값

 */
// VueJS의 Data, 근데 안사라짐
const initialState= {
    category:[],
    cate_food:[],
    food_detail:{},
    cate_info:{},
    page_info:{},
    food_data:[],
    news_data:[]
}
export default function (state=initialState, action){
    console.log("reducer function call... action(전송된 값)")

    switch(action.type)
    {
        case FETCH_CATEGORY:
            return {
                ...state, // 그 전의 상태를 유지
                category:action.payload // 값 저장
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

        default:
            return state;
    }
}