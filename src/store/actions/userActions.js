export const signIn = (userCredentials) => {
    return (dispatch, getState) => {
        localStorage.setItem('userCredentials', JSON.stringify(userCredentials))
        setTimeout(() => {
            return dispatch({ type: 'LOGIN', userCredentials: userCredentials})
        }, 3000)
    }
} 