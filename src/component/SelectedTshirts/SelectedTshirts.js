import "./SelectedTishirts.css"
import {Array} from "../Article/Article"
import Article from "../Article/Article"
import { Link } from "react-router-dom";
const SelectedTshirts = () => {
/*########## Function to reset the Array*/
const resetArray = () => {
    Array.length = 0;
}

    return ( 
        <div className ="selectedTshirtsMain">
            <Link to ="/" ><button onClick={resetArray}>Back to Home</button></Link>
            
        
        <section className="selectedTshirts">
        
        { Array.map(e =>
        
        <Article
        salesRate = {e.salesRate}
        firstSales = {e.firstSales}
        perWeek = {e.perWeek}
        returnRate = {e.returnRate}
        price = {e.price}
        tshirtNummer = {e.tshirtNummer}
        allStatus = {e.allStatus}
        salesStatus = {e.salesRate}
        stStatus = {e.stStatus}
        perWeekStatus = {e.perWeek}
        ReturnRateStatus = {e.ReturnRateStatus}   
        allStatus = {"green"}
        salesStatus = {"green"}
        stStatus = {"green"}
        perWeekStatus = {"green"}
        ReturnRateStatus = {"green"}

        />
        
        )
        }
        </section>
        </div>
     );
}
 
export default SelectedTshirts;