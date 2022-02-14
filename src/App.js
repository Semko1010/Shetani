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
const  allCheckBoxesValue = createContext({})
const  CheckBoxesValue = createContext({})
function App() {
  const [checkBoxAll, setcheckBoxAll] = useState(false)
  const [articleSelection,setarticleSelection] = useState(false)
  const [checkBoxValue, setCheckBoxValue] = useState(0)
  return (
    
    <div className="App">
      <CheckBoxesValue.Provider value = {{checkBoxValue, setCheckBoxValue}}>
      <allCheckBoxesValue.Provider value ={{checkBoxAll, setcheckBoxAll}}>
      <allCheckBoxes.Provider value={{articleSelection,setarticleSelection}}>
    <Header/>
    <Menu/>
    <SideBar/>
   
    
      <ArticleProps/>
      </allCheckBoxes.Provider>
      </allCheckBoxesValue.Provider>
      </CheckBoxesValue.Provider>
    </div>
  );
}
export {allCheckBoxes,allCheckBoxesValue,CheckBoxesValue}
export default App;
