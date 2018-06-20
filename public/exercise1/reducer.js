let initialState = {
	counterValue: 0
};

// This reducer isn't pure! It updates the "counterValue" key of the original 
//     state object
const reducer = (state = initialState, action) => {
	let stateCopy = Object.assign({}, state);
	if (action.type == "INCREMENT") {
			stateCopy.counterValue++;
			return stateCopy;
	} else {
		return state;
	}
}
