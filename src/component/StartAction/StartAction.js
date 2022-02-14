import { useState } from "react"
import {Array} from "../Article/Article"
import "./StartAction.css"
const  itemsLength = [];
const StartAction = (props) => {
    const [checkBoxAll, setcheckBoxAll] = useState(false)
    const [startActionBtn, setstartActionBtn] = useState(false)
    const [countItems, setCountItems] = useState("223 Items")
    
    const selectAll = () => {
        let boxes = document.querySelectorAll(".checking")
        setcheckBoxAll(!checkBoxAll)
        if(!checkBoxAll){
            boxes.forEach(checkbox =>{
            checkbox.checked = true
            Array.push(checkbox.value)
            itemsLength.push(checkbox.length)
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
                
        }
        
        
}


    const selectArticles = () => {
        setstartActionBtn(!startActionBtn)
        if(!startActionBtn){
        let boxes = document.querySelectorAll(".checking")
        for (let i = 0; i < boxes.length; i++) {
        setCountItems(`0 of ${i + 1} items selected`)    
        
    }
}
    else{
        setCountItems("223 Items")
    }
    

    setstartActionBtn(!startActionBtn)
    const btttn = document.getElementById("test")
    
    
}


    return (
        <section className="startSection">
            <div>
            <button id="test" onClick={selectArticles} style={{backgroundColor: startActionBtn ? "#FF5252" : "#247BFF"}}> <img src="./img/start.png" alt="" /> Start Action</button>
            {startActionBtn &&(
            <input onChange={selectAll} type="checkbox" />
            ) }
            </div>
            <p>{countItems}</p>
            <img className="playImg" src="./img/play-circle.png" alt="" />
        </section>
      );
}
 
export default StartAction;