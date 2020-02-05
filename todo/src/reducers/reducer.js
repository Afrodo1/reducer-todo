const initialState = [
{
    item: 'Learn about reducers',
    completed: false,
    id: 1
}]

 const reducer = (state, action) => {
    switch(action.type){
        case 'Set_Task':
            return [
                ...state,
                {
                    item: action.payload,
                    completed: false,
                    id: new Date()
                }
            ];

        case 'Toggle_Completed' :
            return state.map(todo => {
                if(todo.id === action.payload){
                    return {...todo, completed: !todo.completed};
                }else {
                    return todo
                }
            });

        case 'Destroy_Completed' :
            return state.filter(todo => !todo.completed);

        default:
            return state;


    }
};

export {initialState, reducer}
