import "./StartAction.css"
import { useState , useContext} from "react"
import {Array} from "../Article/Article"
import {allCheckBoxes,allCheckBoxesValue,CheckBoxesValue} from "../../App"
import { Link } from "react-router-dom";

const StartAction = () => {
    const [countItems, setCountItems] = useState("223 Items")
    /*########## Variable to show all checkboxes ##########*/
    const {articleSelection,setarticleSelection} = useContext(allCheckBoxes)
    /*########## Variable  to select all checkboxes with one click ##########*/
    const {checkBoxAll, setcheckBoxAll} = useContext(allCheckBoxesValue)
    /*########## Variable to count the tshirts when selected ##########*/
    const {checkBoxValue, setCheckBoxValue} = useContext(CheckBoxesValue)



/*########## Function  to select all Checkboxes with one click and to push the values from all tshirst ##########*/

const inputSelectAllCheckbox = (e) => {
            const chekingBox = e.target.checked;
            Array.length = 0;
            let boxes = document.querySelectorAll(".checkBox")
            setcheckBoxAll(!checkBoxAll)
            if(chekingBox){
            boxes.forEach(checkbox =>{
            checkbox.checked = true
            Array.push(JSON.parse(checkbox.value) )
            
            for(var i=0; i<boxes.length; i++){
            setCountItems(` 6 of ${i + 1} items selected`)
            setCheckBoxValue("")
            }
            })
            }else{
                setCheckBoxValue(0)
            boxes.forEach(checkbox =>{
            checkbox.checked = false
            
        })
            for(var i=0; i<boxes.length; i++){
            setCountItems(`  of ${i + 1} items selected`)
        } 
        }
        console.log(Array);
        }

/*### Function to toggle the background color of the START ACTION button, and to change the text from 223 Items to (0 of tshirt.length) ###*/

const StartActionButton = () => {
    Array.length = 0;
    let boxes = document.querySelectorAll(".articleSection")
    setarticleSelection(!articleSelection)
    if(!articleSelection){
    for (let i = 0; i < boxes.length; i++) {
    setCountItems(`  of ${i + 1}  items selected`)    
}
}
    else{
    setCountItems("223 Items")
}
    setarticleSelection(!articleSelection)
}

    return (
        <section className="startSection">
            <div>
            <button id="test" onClick={StartActionButton} style={{backgroundColor: articleSelection ? "#FF5252" : "#247BFF"}}> <img src="./img/start.png" alt="" /> Start Action</button>
            {articleSelection &&(
            <input onChange={inputSelectAllCheckbox} type="checkbox" />
            ) }
            </div>
            <p>{`${articleSelection ? checkBoxValue : ""} ${countItems} `}</p>
            {/* <Link to="/selectedTshirts"> <button onClick={()=>{setarticleSelection(!articleSelection)}}></button> </Link> */}
            <img className="playImg" src="./img/play-circle.png" alt="" />
        </section>
      );
}
 
export default StartAction;