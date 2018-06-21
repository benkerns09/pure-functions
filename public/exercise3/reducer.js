let initialState = {
	todos: [
		{
			text: "Take out the trash",
			isComplete: false
		}
	]
};


// This reducer isn't pure! Fix it plz
const reducer = (state = initialState, action) => {
	Object.freeze(state);//this will catch yourself if you actually type a mutating line
	let copy = {
		...state,
		todos: state.todos.map((currentItem)=> {
			return {...currentItem}//returning a copy of the object in .map
		})
	}
	if (action.type == "ADD_TODO") {
		copy.todos.push({
			text: action.todoText,
			isComplete: false
		});
		return copy;
	} else if (action.type == "TOGGLE_TODO") {
		let todoToToggle = copy.todos[action.todoIndex];
		todoToToggle.isComplete = !todoToToggle.isComplete;
		return copy;
	} else {
		return state;
	}
}
