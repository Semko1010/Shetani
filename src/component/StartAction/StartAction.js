import "./StartAction.css";
import { useState, useContext, useEffect } from "react";
import { Array } from "../Article/Article";
import { allCheckBoxes, allCheckBoxesValue, CheckBoxesValue } from "../../App";
import { Link } from "react-router-dom";

const StartAction = () => {
	/*########## Variable to show all checkboxes ##########*/
	const { articleSelection, setarticleSelection } = useContext(allCheckBoxes);
	/*########## Variable  to select all checkboxes with one click ##########*/
	const { checkBoxAll, setcheckBoxAll } = useContext(allCheckBoxesValue);
	/*########## Variable to count the tshirts when selected ##########*/
	const { checkBoxValue, setCheckBoxValue } = useContext(CheckBoxesValue);
	const [checkBoxValueNew, setCheckBoxValueNew] = useState(0);

	/*########## Function  to select all Checkboxes with one click and to push the values from all tshirst ##########*/

	const inputSelectAllCheckbox = e => {
		const chekingBox = e.target.checked;
		Array.length = 0;
		let boxes = document.querySelectorAll(".checkBox");
		setcheckBoxAll(!checkBoxAll);
		if (chekingBox) {
			boxes.forEach(checkbox => {
				checkbox.checked = true;
				Array.push(JSON.parse(checkbox.value));
				setCheckBoxValue(boxes.length);
			});
		} else {
			setCheckBoxValue(0);
			boxes.forEach(checkbox => {
				checkbox.checked = false;
			});
		}
		console.log(Array);
	};

	/*### Function to toggle the background color of the START ACTION button, and to change the text from 223 Items to (0 of tshirt.length) ###*/
	const StartActionButton = () => {
		setCheckBoxValue(0);
		Array.length = 0;
		setarticleSelection(!articleSelection);
		// let boxes = document.querySelectorAll(".checkBox")
		// boxes.forEach(e =>{
		//     setCheckBoxValueNew(boxes.length)
		// })
	};

	useEffect(() => {
		let boxes = document.querySelectorAll(".checkBox");
		for (let i = 0; i < boxes.length; i++) {
			setCheckBoxValueNew(i + 1);
		}
	});

	return (
		<section className='startSection'>
			<div>
				<button
					id='test'
					onClick={StartActionButton}
					style={{
						backgroundColor: articleSelection ? "#FF5252" : "#247BFF",
					}}>
					<img src='./img/start.png' alt='' /> Start Action
				</button>
				{articleSelection && (
					<input onChange={inputSelectAllCheckbox} type='checkbox' />
				)}
			</div>
			<p>{`${
				articleSelection
					? `${checkBoxValue} of ${checkBoxValueNew} items selected`
					: "223 items selected"
			} `}</p>
			<Link to='/selectedTshirts'>
				<img
					onClick={() => {
						setarticleSelection(false);
					}}
					className='playImg'
					src='./img/play-circle.png'
					alt=''
				/>
			</Link>
		</section>
	);
};

export default StartAction;
