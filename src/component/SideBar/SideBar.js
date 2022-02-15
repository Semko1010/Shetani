import "./SideBar.css";
import { useState } from "react"
const SideBar = () => {
   const [ width, setWidth ] = useState(true)
   
   const showSidebar = () => {
      setWidth(!width)
      
      
      console.log(width);
   }

    return ( 
        <sidebar className="sideBar" style={{width: width ? "44px" : "250px", cursor: "pointer"}} onClick={showSidebar}>
           <section>
            
           <div></div> 
           <div></div> 
           <div></div> 
           </section>

           <article >
            <ul style={{opacity: width  ? "0" : "1"}}>
               <li>Back to Home</li>
               <li>My Account</li>
               <li>About this Page</li>
               <li>Contact</li>
            
            </ul>

           </article>
        </sidebar>
           
     );
}
 
export default SideBar;