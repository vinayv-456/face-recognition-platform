import axiosInstance from "../../apis/client";
const userActions = {
    GET_USER_DATA_REQUEST : "SET_USER_DATA",
    GET_USER_DATA_SUCCESS : "SET_USER_DATA_SUCCESS",
    GET_USER_DATA_FAILURE : "SET_USER_DATA_FAILURE",
    
    signInUser : (params) => async(dispatch) => {
        dispatch({type: userActions.GET_USER_DATA_REQUEST})
        try{
            const result = await axiosInstance.post('/sign-in', params)
            console.log("store", result.data);
            if (result) {
                dispatch({type: userActions.GET_USER_DATA_SUCCESS, payload: result.data});
            }
        }
        catch(e){
            dispatch({type: userActions.GET_USER_DATA_FAILURE});
        }
    },

    registerUser: (params) => async(dispatch) => {
        dispatch({type: userActions.GET_USER_DATA_REQUEST})
        try{
            const result = await axiosInstance.post('/sign-up', params)
            // const result = await axiosInstance.post('/sign-up', { ...form })
            console.log("store", result.data);
            if (result) {
                dispatch({type: userActions.GET_USER_DATA_SUCCESS, payload: result.data});
            }
        }
        catch(e){
            dispatch({type: userActions.GET_USER_DATA_FAILURE});
        }
    },
    
    UPDATE_USER_SCORE_REQUEST : "UPDATE_USER_SCORE",
    UPDATE_USER_SCORE_SUCCESS : "UPDATE_USER_SCORE_SUCCESS",
    UPDATE_USER_SCORE_FAILURE : "UPDATE_USER_SCORE_SUCCESS",
    
    updateUserScore : (params) => async(dispatch) => {
        dispatch({type: userActions.UPDATE_USER_SCORE_REQUEST})
        try{
            const result = await axiosInstance.put(`/score-increment/${params.id}`)
            if(result)
            {
                dispatch({ type: userActions.UPDATE_USER_SCORE_SUCCESS ,payload: result.data.entries})
            }
        }
        catch(e){
            dispatch({type: userActions.UPDATE_USER_SCORE_FAILURE});
        }
    }
}

export default userActions;