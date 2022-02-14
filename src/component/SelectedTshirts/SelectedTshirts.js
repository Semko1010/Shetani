import "./SelectedTishirts.css"
import {Array} from "../Article/Article"
import Article from "../Article/Article"
import { Link } from "react-router-dom";
const SelectedTshirts = () => {
const reload = () => {
    window.location.reload();
}

    return ( 
        <div>
            <Link   to ="/" onClick ={reload}>Home</Link>
            <button onClick ={reload}>Back to Home</button>
        
        <section className="selectedTshirts">
        
        { Array.map(e =>
        
        <Article
        salesRate = {e.salesRate}
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
        
        )
        }
        </section>
        </div>
     );
}
 
export default SelectedTshirts;