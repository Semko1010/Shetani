import { useState } from "react";
import "./Menu.css";
const Menu = () => {
	const [time, setTime] = useState();

	function date() {
		const newTime = new Date().toLocaleString();
		setTime(newTime);
	}
	setTimeout(date, 1000);
	return (
		<section className='menuSection'>
			<div>
				<img src='./img/Breadcrumb-Home.png' alt='' />
				<h2>Dashboard</h2>
				<img src='./img/right.png' alt='' />
				<h2>Articles</h2>
			</div>
			<div>
				<h2>{time}</h2>
			</div>
		</section>
	);
};

export default Menu;
