import React, { useCallback, useState,useMemo } from "react"
import Child9 from "./Child9"
import Child9_2 from "./Child9_2";
import App_fct from "./App_fct";

function App9() {

	{/* Initial states */ }
	const [input, setInput] = useState(1);
	const [light, setLight] = useState(true);
	const [nbfor_props_child92,setNbfor_props_child92]=useState('')
	
    //const getItems = () => { //  in this example , it was incorrect to don't use usecallback and to use memo in child9
    const getItems = useCallback(() => {
		return [input + 10, input + 100];
	}, [input]);

	{/* style for changing the theme */ }
	const theme = {
		backgroundColor: light ? "White" : "grey",
		color: light ? "grey" : "white"
	}

	
	// const onchangeforchild9 = useCallback((e) => {
	// 	setNbfor_props_child92(e.target.value)
	// },[nbfor_props_child92])

	const onchangeforchild92 = (e) => {
		setNbfor_props_child92(e.target.value)
	}

	const valx = useMemo(() => App_fct(nbfor_props_child92), [nbfor_props_child92]);

	return <>
		{/* set the theme in the parent div */}
		<div style={theme}>
			<input type="number"
				value={input}

				onChange={event =>
					setInput(parseInt(event.target.value))
				} />

			{/* on click the button the theme is set to
			the opposite mode, light to dark and vice versa*/}
			<button onClick={() =>
				setLight(prevLight =>
					!prevLight)}>{light ? "dark mode" : "light mode"}
			</button>
			<Child9 getItems={getItems} />
			<br></br>
			<br></br>
			<br></br>
			<input onChange={onchangeforchild92}/>
			<br></br>
			<Child9_2 texta={nbfor_props_child92}/>
			<br></br>
			<br></br>
			<br></br>
			<p> app fct (valx) of nb92 : {valx}</p>

		</div>
	</>;
}

export default App9;
