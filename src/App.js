import "./App.css";
import Header from "./component/Header/Header";
import Menu from "./component/Menu/Menu";
import SideBar from "./component/SideBar/SideBar";
import ArticleProps from "./component/ArticleProps/ArticleProps";
import SelectedTshirts from "./component/SelectedTshirts/SelectedTshirts";
import { createContext, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const allCheckBoxes = createContext({});
const allCheckBoxesValue = createContext({});
const CheckBoxesValue = createContext({});

function App() {
	/*########## Variable to select all checkboxes with one click ##########*/
	const [checkBoxAll, setcheckBoxAll] = useState(false);
	/*########## Variable to show all checkboxes ##########*/
	const [articleSelection, setarticleSelection] = useState(false);
	/*########## Variable for the number how much tshirts are selectet ##########*/
	const [checkBoxValue, setCheckBoxValue] = useState(0);
	return (
		<div className='App'>
			<Router>
				<CheckBoxesValue.Provider
					value={{
						checkBoxValue,
						setCheckBoxValue,
					}}>
					<allCheckBoxesValue.Provider
						value={{
							checkBoxAll,
							setcheckBoxAll,
						}}>
						<allCheckBoxes.Provider
							value={{
								articleSelection,
								setarticleSelection,
							}}>
							<Routes>
								<Route
									path='/'
									element={[
										<Header />,
										<Menu />,
										<SideBar />,
										<ArticleProps />,
									]}
								/>
								<Route path='/selectedTshirts' element={<SelectedTshirts />} />
							</Routes>
						</allCheckBoxes.Provider>
					</allCheckBoxesValue.Provider>
				</CheckBoxesValue.Provider>
			</Router>
		</div>
	);
}
export { allCheckBoxes, allCheckBoxesValue, CheckBoxesValue };
export default App;
