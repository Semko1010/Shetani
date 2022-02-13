import StartAction  from "../StartAction/StartAction"
import { useState } from "react"
import {Array} from "../Article/Article"

const SelectAll = (props) => {
    const [checkBoxAll, setcheckBoxAll] = useState(false)
    const dataItems = {salesRate:props.salesRate,firstSales:props.firstSales,perWeek:props.perWeek,returnRate:props.returnRate,price:props.price,tshirtNummer:props.tshirtNummer}

    const selectAll = () => {
        
        let boxes = document.querySelectorAll(".checking")
        setcheckBoxAll(!checkBoxAll)
        if(!checkBoxAll){
            boxes.forEach(checkbox =>{
            checkbox.checked = true
            console.log(checkbox);
            Array.push(dataItems)
            console.log(Array);
            })
        }else{
            boxes.forEach(checkbox =>{
                checkbox.checked = false
                console.log(checkbox);

                Array.filter(item =>{
                    console.log(item);
                    if(item === checkbox.value){
                    const indexArray =Array.indexOf(item)
                    Array.splice(indexArray,1)
                    }
                
                    })
                })
                
        }
}


    return ( 
    <div>
        <StartAction selectAll= {selectAll}/>
    </div> );
}
 
export default SelectAll;