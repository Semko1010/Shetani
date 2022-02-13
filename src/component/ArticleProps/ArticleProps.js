import "./ArticleProps.css"

import { useState } from "react"
import Article from "../Article/Article"
import StartAction from "../StartAction/StartAction"
import {Array} from "../Article/Article"
const  itemsLength = [];
const ArticleProps = () => {
const [checkBoxAll, setcheckBoxAll] = useState(false)
   
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
    return (
        <div>
        <StartAction selectAll={selectAll}/>

       
        <section className="articleSectionGrid">
        
        <Article
        salesRate = {"80%"}
        firstSales = {"12"}
        perWeek = {"1.2"}
        returnRate = {"2%"}
        price = {"69,50€"}
        tshirtNummer = {"21455"}
        allStatus = {"green"}
        salesStatus = {"green"}
        stStatus = {"green"}
        perWeekStatus = {"green"}
        ReturnRateStatus = {"green"}
        
        />
        <Article
        salesRate = {"3%"}
        firstSales = {"10"}
        perWeek = {"1.1"}
        returnRate = {"2%"}
        price = {"62,50€"}
        tshirtNummer = {"25335"}
        allStatus = {"red"}
        salesStatus = {"orange"}
        stStatus = {"red"}
        perWeekStatus = {"orange"}
        ReturnRateStatus = {"red"}
        
        />
        <Article
        salesRate = {"2%"}
        firstSales = {"10"}
        perWeek = {"1.1"}
        returnRate = {"2%"}
        price = {"65,50€"}
        tshirtNummer = {"24355"}
        allStatus = {"red"}
        salesStatus = {"red"}
        stStatus = {"red"}
        perWeekStatus = {"red"}
        ReturnRateStatus = {"red"}
        
        />
        <Article
        salesRate = {"4%"}
        firstSales = {"14"}
        perWeek = {"1.1"}
        returnRate = {"5%"}
        price = {"65,50€"}
        tshirtNummer = {"12355"}
        allStatus = {"red"}
        salesStatus = {"red"}
        stStatus = {"orange"}
        perWeekStatus = {"red"}
        ReturnRateStatus = {"orange"}
       
        />
        <Article
        salesRate = {"1%"}
        firstSales = {"5"}
        perWeek = {"1.5"}
        returnRate = {"2%"}
        price = {"67,50€"}
        tshirtNummer = {"21255"}
        allStatus = {"red"}
        salesStatus = {"red"}
        stStatus = {"orange"}
        perWeekStatus = {"red"}
        ReturnRateStatus = {"red"}
        
        />
        <Article
        salesRate = {"1%"}
        firstSales = {"12"}
        perWeek = {"1.4"}
        returnRate = {"1%"}
        price = {"64,50€"}
        tshirtNummer = {"25435"}
        allStatus = {"green"}
        salesStatus = {"green"}
        stStatus = {"green"}
        perWeekStatus = {"green"}
        ReturnRateStatus = {"green"}
       
        />
        </section>
        </div>
     );
}
 
export default ArticleProps;