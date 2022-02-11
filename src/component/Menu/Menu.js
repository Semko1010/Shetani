import "./Menu.css"
const Menu = () => {
    return ( 

            <section className="menuSection">
                <div>
                <img src="" alt="" />
                <h2>Dashboard</h2>
                <img src="./img/right.png" alt="" />
                <h2>Articles</h2>
                </div>
                <div>
                    <h2>{new Date().toLocaleString()}</h2>
                </div>
            </section>
    )
}
 
export default Menu;