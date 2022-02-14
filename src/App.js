import "./App.css"
import Header from "./component/Header/Header"
import Menu from "./component/Menu/Menu"
import SideBar from "./component/SideBar/SideBar"
import StartAction from "./component/StartAction/StartAction"
import SelectAll from "./component/SelectAll/SelectAll"
import Article from './component/Article/Article'
import ArticleProps from "./component/ArticleProps/ArticleProps"
import {createContext, useState} from "react"
const  allCheckBoxes = createContext({})
function App() {
  
  const [articleSelection,setarticleSelection] = useState(false)
  
  return (
    
    <div className="App">
      <allCheckBoxes.Provider value={{articleSelection,setarticleSelection}}>
    <Header/>
    
    <Menu/>
    <SideBar/>
   
    
      <ArticleProps/>
      </allCheckBoxes.Provider>
    
    </div>
  );
}
export {allCheckBoxes}
export default App;
