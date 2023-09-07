import {configureStore} from "@reduxjs/toolkit"; //createStore 사라짐
import thunk from "redux-thunk"; //비동기 = 미들웨어
import rootReducer from "../reducers/index";
import {createLogger} from "redux-logger/src" // 에러났을 때 처리

const logger = createLogger()
const middleware = [thunk,logger]
const store = configureStore({
    reducer:rootReducer,
    middleware:middleware,
    devTools:window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // 크롬에 모니터링
})

export default store
