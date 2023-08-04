import React, { useEffect, useState,memo } from "react"

//function Child9({ getItems }) {
function Child9(props) {

	/* Initial state of the items */
	const [items, setItems] = useState([]);

	/* This hook sets the value of items if
	getItems object changes */
	useEffect(() => {
		console.log("Fetching items");
		setItems(props.getItems());
	}, [props.getItems]);

	/* Maps the items to a list */
	return <div>
		{items.map(item => <div key={item}>{item}</div>)}
	</div>
}
export default Child9;
//export default memo(Child9); it was incorrect to use memo(..) in this example
