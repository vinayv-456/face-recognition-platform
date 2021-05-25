
import actions from '../actions/user';

const userState = {
    id: '',
    name: '',
    email: '', 
    entries: 0,
    joined_on: '',
    isUserDataFetching: false,
    isUserScoreUpdating: false,
    errMsg: ''
}

export const userDetails = (state = userState, action) => {
    switch (action.type) {
        case actions.GET_USER_DATA_REQUEST:
            return{
                ...state,
                isUserDataFetching: true
            };
        case actions.GET_USER_DATA_SUCCESS:
            const {id, name, email, entries, joined_on } = action.payload
            return{
                ...state,
                id: id,
                name: name,
                email: email,
                entries: entries,
                joined_on: joined_on,
                isUserDataFetching: false
            };
        case actions.GET_USER_DATA_FAILURE:
            return{
                ...state,
                errMsg: 'error in fetching userData, Please try again later'
            };
        case actions.UPDATE_USER_SCORE_REQUEST:
            return{
                ...state,
                isUserScoreUpdating: true,
            };
        case actions.UPDATE_USER_SCORE_SUCCESS:
            return{
                ...state,
                entries: action.payload
            };
        case actions.UPDATE_USER_SCORE_FAILURE:
            return{
                ...state,
                errMsg: "error in udpating user scrore, Please try again later"
            };
        default:
            return{
                ...state
            }
    }
}