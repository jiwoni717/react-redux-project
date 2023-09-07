import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"; // ==RequestMapping
import Header from "./components/main/Header";
import Home from "./components/main/Home";
import {Provider} from "react-redux";
import store from './store/store'
import FoodList from "./components/food/FoodList";
import FoodDetail from "./components/food/FoodDetail";
import News from "./components/news/News";
import FoodFind from "./components/food/FoodFind";

function App() {
  return (
      <Provider store={store}>
          <Router>
            <Header/>
            <div className={"container"}>
              <Routes>
                  <Route exact path={"/"} element={<Home/>}/>
                  <Route exact path={"/food/food_list/:cno"} element={<FoodList/>}/>
                  <Route exact path={"/food/food_detail/:fno"} element={<FoodDetail/>}/>
                  <Route exact path={"/news/news_find"} element={<News/>}/>
                  <Route exact path={"/food/food_find"} element={<FoodFind/>}/>
                  {/*<Route exact path={"/seoul/location"} element={<Location/>}/>
                  <Route exact path={"/seoul/nature"} element={<Nature/>}/>
                  <Route exact path={"/seoul/shop"} element={<Shop/>}/>
                  */}
              </Routes>
            </div>
          </Router>
      </Provider>
  );
}

export default App;
