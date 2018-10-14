export const SET_ACCOUNT_NAME =
    'accountName/SET_ACCOUNT_NAME'


const initialState = {
    accountName: null
}


export default (state = initialState, action) => {
    switch (action.type) {
        case SET_ACCOUNT_NAME:
            return {
                ...state,
                accountName: action.accountName
            }

        default:
            return state
    }
}


export const captureAccountName = (e) => {
    return dispatch => {
        dispatch({
            type: SET_ACCOUNT_NAME,
            accountName: e.target.value
        })
    }
}