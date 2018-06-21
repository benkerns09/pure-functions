let initialState = {
	counterValue: 0
};

// This reducer isn't pure! It updates the "counterValue" key of the original 
//     state object
const reducer = (state = initialState, action) => {
	let stateCopy = Object.assign({}, state);//...state will do the exact same thing
	if (action.type == "INCREMENT") {
			stateCopy.counterValue++;//doing the mutation on the copy that we made
			return stateCopy;
	} else {
		return state;
	}
}


//in this case, we copy first and then choose mutations
