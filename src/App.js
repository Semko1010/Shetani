import "./App.css"
import Header from "./component/Header/Header"
import Menu from "./component/Menu/Menu"
import SideBar from "./component/SideBar/SideBar"
import Article from './component/Article/Artcle'

function App() {
  return (
    <div className="App">
    <Header/>
    <Menu/>
    <SideBar/>
    </div>
  );
}

export default App;
