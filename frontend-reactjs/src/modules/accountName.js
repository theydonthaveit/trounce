export const ACCOUNTNAME_VALIDATE_IN_PROGRESS =
    'accountName/ACCOUNTNAME_VALIDATE_IN_PROGRESS'
export const ACCOUNTNAME_VALIDATE_REQUESTED =
    'accountName/ACCOUNTNAME_VALIDATE_REQUESTED'
export const ACCOUNTNAME_CHANGE_REQUESTED =
    'accountName/ACCOUNTNAME_CHANGE_REQUESTED'
export const ACCOUNTNAME_CHANGED =
    'accountName/ACCOUNTNAME_CHANGED'


const initialState = {
    accountName: null,
    validAccountName: null,
    invalidAccountName: null,
    requestAccountNameValidation: false,
    changingAccountNameField: false,
    accountNameFeedbackValid: 'Account name is all good',
    accountNameFeedbackInvalid: 'Invalid account name' 
}


export default (state = initialState, action) => {
    switch (action.type) {
        case ACCOUNTNAME_CHANGE_REQUESTED:
            return {
                ...state,
                changingAccountNameField: true
            }
  
        case ACCOUNTNAME_CHANGED:
            return {
                ...state,
                accountName: action.text
            }

        case ACCOUNTNAME_VALIDATE_REQUESTED:
            return {
                ...state,
                requestAccountNameValidation: !state.requestAccountNameValidation
            }

        case ACCOUNTNAME_VALIDATE_IN_PROGRESS:
            // TODO log the status and additional useful info 
            return {
                ...state,
                validAccountName:
                    action.request.status === 200
                    ? true
                    : null,
                invalidAccountName:
                    action.request.status !== 200
                    ? true
                    : null,
                requestAccountNameValidation:
                    !state.requestAccountNameValidation
            }
  
        default:
            return state
    }
}


export const setAccountName = (e) => {
    return dispatch => {
        dispatch({
            type: ACCOUNTNAME_CHANGE_REQUESTED
        })

        dispatch({
            type: ACCOUNTNAME_CHANGED,
            text: e.target.value
        })
    }
}


export const validateAccountName = (e) => {
    // TODO log the accountName used
    const { key, target } = e

    return dispatch => {
        dispatch({
            type: ACCOUNTNAME_VALIDATE_REQUESTED,
            keyPress: key
        })

        // slow down the request for a better UX
        // a user can see that a request is in progress
        setTimeout(() => {
            fetch(
                'http://localhost:5000/verify-summoner', {
                    method: 'POST',
                    body: target.value,
                    mode: 'cors'
                })
            .then(res => res.text())
            .then(data => console.log(data)) 
                // dispatch({
                //     type: ACCOUNTNAME_VALIDATE_IN_PROGRESS,
                //     request: data }))
            .catch((err) => {
                // TODO - log result
                console.log(err)
            })
        }, 500)
    }
}