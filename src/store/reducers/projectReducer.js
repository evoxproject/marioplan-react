const initState = {
    projects : [
        {id : 1, title: 'help', content: 'test 1234'},
        {id : 2, title: 'me', content: 'test 4321'},
        {id : 3, title: 'pls', content: 'test 1122'},
    ],
    initialValue : {
        title: 'initial', content: 'value'
    }
};

const projectReducer = (state = initState, action) => {
    switch( action.type ){
        case "CREATE_PROJECT":
            console.log('Created Project', action.project);
            return action.project
            break;
    }
    return state;
}

export default projectReducer;