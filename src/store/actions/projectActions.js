export const createProject = (project) => {
    return (dispatch, getState) => {
        console.log('Ajax Called')
        return dispatch({ type: 'CREATE_PROJECT', project: project})
    }
} 