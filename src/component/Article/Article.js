import StartAction from "../StartAction/StartAction"
import { useState } from 'react'
import "./Article.css"
const Array = [];


const Article = (props) => {
    const dataItems = {salesRate:props.salesRate,firstSales:props.firstSales,perWeek:props.perWeek,returnRate:props.returnRate,price:props.price,tshirtNummer:props.tshirtNummer}
    const [visibleMenu, setvisibleMenu] = useState(true)
    const [articleSelection,setarticleSelection] = useState(true)
    const [articleValue, setArticleValue] = useState([])
    const [checkbox, setCheckbox] = useState(true)
    
    
    const showMenu = () => {
        setvisibleMenu(false) 
    }
    
    const closeMenu = () => {
        setvisibleMenu(true) 
    }
    const articleSelect = () => {
        setarticleSelection(true)
     
    }
    

const checkBox = () =>{
    const checking = document.getElementById("checking")
    
    setCheckbox(!checkbox)
    if(checkbox){
    Array.push(dataItems)
    setArticleValue(Array)
}
    else if(!checkbox){
        Array.filter(item =>{
        if(item.tshirtNummer === props.tshirtNummer){
        const indexArray =Array.indexOf(item)
        Array.splice(indexArray,1)
        }
    
        })
        
    }
console.log(Array);
console.log(dataItems);

}



return (
<section className="articleSection">
    {visibleMenu ?(
    <section>
        
    <div>
            <img src="./img/pause-circle.png" alt="" />
        <div>
            <h2>T-Shirt</h2>
            <p>Season - 1 - Spring/Summer</p>
        </div>
            <img  src={`./img/${props.allStatus}.png`} alt="" />
    </div>
    
    <article>

    
        <div>
            <img onClick={showMenu} className="tshirtImg" src="./img/tshirt.png" alt="" />
            <h3>T-Shirt - #{props.tshirtNummer}</h3>
        </div>
        <div className="articleDiv">
        <div>
            <h3>WE:3CW / 2021-01-22</h3>
            <h3>Actions: 3</h3>
        </div>
        <div>
            <p>Sales Rate</p>
            <p>{props.salesRate}<img src={`./img/${props.salesStatus}.png`} alt="" /> </p>
        </div>
        <div>
            <p>1st Sales</p>
            <p>{props.firstSales}<img src={`./img/${props.stStatus}.png`} alt="" /> </p>
        </div>
        <div>
            <p>Items per week</p>
            <p>{props.perWeek} <img src={`./img/${props.perWeekStatus}.png`} alt="" /> </p>
        </div>
        <div>
            <p>Return rate</p>
            <p>{props.returnRate} <img src={`./img/${props.ReturnRateStatus}.png`} alt="" /> </p>
        </div>
        <div>
            <p>Sale Price</p>
            <p>{props.price}</p>
        </div>
        </div>
    </article>
   
    <footer>

        <section>
            <h3>Preorder</h3>
            <p>32</p>
        </section>
        <section>
            <h3>Recorder</h3>
            <p>25</p>
        </section>
        <section>
            <h3>Rearrangmt</h3>
            <p>2</p>
        </section>
        <section>
            <h3>Delivered</h3>
            <p>61</p>
        </section>
        <section>
            <h3>Returned</h3>
            <p>1</p>
        </section>
        <section>
            <h3>Sold</h3>
            <p>26</p>
        </section>
        <section>
            <h3>Correction</h3>
            <p>1</p>
        </section>
        <section>
            <h3>Stock</h3>
            <p>62</p>
        </section>
    </footer>
    </section>
) :(
    <section className="unvisibleMenu">

        <button>Show</button>
        <button>Select</button>
        <button>Define a Target</button>
        <button onClick={closeMenu}>Cancel</button>
    </section>
)}
{articleSelection &&(
<section className="articleSelection">
<label htmlFor="Select Item"></label>
<input onChange={checkBox} type="checkbox"   className="checking" value ={props.tshirtNummer}  
  />

</section>
    )}
    {/* <StartAction articleSelect={articleSelect}/> */}
    </section>
);
}
export {Array}
export default Article;
