import { useState } from "react"
import "./StartAction.css"
const StartAction = (props) => {
    const [startActionBtn, setstartActionBtn] = useState(false)

const selectArticles = () => {
    setstartActionBtn(!startActionBtn)
}

    return (
        <section className="startSection">
            <div>
            <button onClick={selectArticles} style={{backgroundColor: startActionBtn ? "#FF5252" : "#247BFF"}}> <img src="./img/start.png" alt="" /> Start Action</button>
            {startActionBtn &&(
            <input type="checkbox" />
            ) }
            </div>
            <p>223 Items</p>
            <img className="playImg" src="./img/play-circle.png" alt="" />
        </section>
      );
}
 
export default StartAction;