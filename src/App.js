import "./App.css"
import Header from "./component/Header/Header"
import Menu from "./component/Menu/Menu"
import SideBar from "./component/SideBar/SideBar"
import StartAction from "./component/StartAction/StartAction"
import Article from './component/Article/Article'
import ArticleProps from "./component/ArticleProps/ArticleProps"

function App() {
  return (
    <div className="App">
    <Header/>
    <Menu/>
    <SideBar/>
   
    
      <ArticleProps/>
      
    
    </div>
  );
}

export default App;
