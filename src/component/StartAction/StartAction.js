import "./StartAction.css"
import { useState , useContext} from "react"
import {Array} from "../Article/Article"
import {allCheckBoxes,allCheckBoxesValue,CheckBoxesValue} from "../../App"

const  itemsLength = [];
const StartAction = () => {
    const [countItems, setCountItems] = useState("223 Items")
    const {articleSelection,setarticleSelection} = useContext(allCheckBoxes)
    const {checkBoxAll, setcheckBoxAll} = useContext(allCheckBoxesValue)
    const {checkBoxAllValue, setcheckBoxAllValue} = useContext(allCheckBoxesValue)
    const {checkBoxValue, setCheckBoxValue} = useContext(CheckBoxesValue)



/*Function  to select all Checkboxes with one click and to push the values from all tshirst*/
const inputSelectAllCheckbox = () => {
        
        let boxes = document.querySelectorAll(".checkBox")
            setcheckBoxAll(!checkBoxAll)
        if(!checkBoxAll){
            boxes.forEach(checkbox =>{
            checkbox.checked = true
            Array.push(checkbox.value)
 /*for loop for text 0 of 6 items*/
            for(var i=0; i<boxes.length; i++){
            setCountItems(`${i + 1} of ${i + 1} items selected`)
            }
            console.log(Array);
            })
            }else{
            boxes.forEach(checkbox =>{
            checkbox.checked = false
            Array.filter(item =>{
            if(item === checkbox.value){
            const indexArray =Array.indexOf(item)
            Array.splice(indexArray,1)
            console.log(Array);
            }
                
            })
            })
            for(var i=0; i<boxes.length; i++){
                setCountItems(` ${i + 1} items selected`)
            }    
        }
    }


/*Function to toggle the background color of the START ACTION button, and to change the text from 223 Items to (0 of tshirt.length)*/
const StartActionButton = () => {
    
    let boxes = document.querySelectorAll(".articleSection")
    console.log(boxes);
    setarticleSelection(!articleSelection)
    
    if(!articleSelection){
        
       
    for (let i = 0; i < boxes.length; i++) {
    setCountItems(` of ${i + 1}  items selected`)    
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
            <img className="playImg" src="./img/play-circle.png" alt="" />
        </section>
      );
}
 
export default StartAction;