let initialState = {
	counters: []
};

// This reducer isn't pure! It updates the nested "counters" array of the original 
//     state object
const reducer = (state = initialState, action) => {
	let stateCopy = {
		...state,//does shallow copy. Takes care of copying what might show up in top level stuff
		counters: [
				...state.counters
		]
	};
	let { type, counterIndex } = action;
	if (type == "INCREMENT") {
		stateCopy.counters[counterIndex]++;//REFERS TO THE COPY INSTEAD OF THE ORIGINAL STATE!
		return stateCopy;
	} else if (type == "ADD_COUNTER") {
		stateCopy.counters.push(0);
		return stateCopy;
	} else {
		return state;
	}
}


//Below is another way to do this
/* if (type = increment) {
	return {
		counters: [
			...state.counters.slice(0, counterIndex),
			state.counters[counterIndex],
			state.counter.slice(counterIndex + 1);
		]
	}
} else if (type = add_counter) {
	USE CONCAT!! can't use push
}




/*