import "./Article.css"

const Article = (props) => {
    return (
    <section className="articleSection">
    <div>
            <img src="./img/pause-circle.png" alt="" />
        <div>
            <h2>T-Shirt</h2>
            <p>Season - 1 - Spring/Summer</p>
        </div>
        <img src="./img/red.png" alt="" />
    </div>

    <article>
        <div>
            <img className="tshirtImg" src="./img/tshirt.png" alt="" />
            <h3>T-Shirt - #34224</h3>
        </div>
        <div className="articleDiv">
        <div>
            <h3>WE:3CW / 2021-01-22</h3>
            <h3>Actions: 3</h3>
        </div>
        <div>
            <p>Sales Rate</p>
            <p>{props.salesRate}<img src="./img/orange.png" alt="" /> </p>
        </div>
        <div>
            <p>1st Sales</p>
            <p>10<img src="./img/red.png" alt="" /> </p>
        </div>
        <div>
            <p>Items per week</p>
            <p>1,1 <img src="./img/orange.png" alt="" /> </p>
        </div>
        <div>
            <p>Return rate</p>
            <p>2% <img src="./img/red.png" alt="" /> </p>
        </div>
        <div>
            <p>Sale Price</p>
            <p>69,59€  </p>
        </div>
        </div>
    </article>
    </section>
      );
}
 
export default Article;
