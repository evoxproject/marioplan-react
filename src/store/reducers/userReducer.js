const initState = {
    isAuthenticated: false,
    userCredentials: null
};

const userReducer = (state = initState, action) => {
    switch( action.type ){
        case "LOGIN":
            console.log('User Successfully Logged in.', action.user);
            return {
                ...state, 
                user: action.user
            }
            break;
    }
    return state;
}



export default userReducer;