export const todoItemsReducer = (currentState, action) => {
    let todoItems = currentState; // This line is unnecessary

    if (action.type === 'NEW_ITEM') {
        return [...currentState, { name: action.payload.itemname, dueDate: action.payload.duedate }];
    } else if (action.type === 'DELETE_ITEM') {
        return currentState.filter((obj) => obj.name !== action.payload.itemname);
    }

    return currentState; // If no action matches, return the current state
};