import "./SelectedTishirts.css";
import { Array } from "../Article/Article";
import Article from "../Article/Article";
import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { CheckBoxesValue, allCheckBoxes } from "../../App";
import SideBar from "../SideBar/SideBar";
import Header from "../Header/Header";
const SelectedTshirts = () => {
	const { checkBoxValue, setCheckBoxValue } = useContext(CheckBoxesValue);
	/*########## Variable to show all checkboxes ##########*/
	const { articleSelection, setarticleSelection } = useContext(allCheckBoxes);
	/*########## Function to reset the Array*/
	const resetArray = () => {
		Array.length = 0;
		setCheckBoxValue(0);
	};

	useEffect(() => {
		setarticleSelection(false);
	});

	return (
		<div className='selectedTshirtsMain'>
			<Header />
			<Link to='/'>
				<button onClick={resetArray}>Back to Home</button>
			</Link>
			<SideBar />
			<section className='selectedTshirts'>
				{Array.map((e, index) => (
					<Article
						key={index}
						salesRate={e.salesRate}
						firstSales={e.firstSales}
						perWeek={e.perWeek}
						returnRate={e.returnRate}
						price={e.price}
						tshirtNummer={e.tshirtNummer}
						allStatus={e.allStatus}
						salesStatus={e.salesRate}
						stStatus={e.stStatus}
						perWeekStatus={e.perWeek}
						ReturnRateStatus={e.ReturnRateStatus}
						allStatus={e.allStatus}
						salesStatus={e.salesStatus}
						stStatus={e.stStatus}
						perWeekStatus={e.perWeekStatus}
						ReturnRateStatus={e.ReturnRateStatus}
					/>
				))}
			</section>
		</div>
	);
};

export default SelectedTshirts;
