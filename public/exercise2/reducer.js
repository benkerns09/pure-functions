let initialState = {
	counters: []
};

// This reducer isn't pure! It updates the nested "counters" array of the original 
//     state object
const reducer = (state = initialState, action) => {
	let stateCopy = {
		...state,
		counters: [
				...state.counters
		]
	};
	let { type, counterIndex } = action;
	if (type == "INCREMENT") {
		stateCopy.counters[counterIndex]++;
		return stateCopy;
	} else if (type == "ADD_COUNTER") {
		stateCopy.counters.push(0);
		return stateCopy;
	} else {
		return state;
	}
}
