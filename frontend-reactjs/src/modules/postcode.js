export const POSTCODE_VALIDATE_IN_PROGRESS =
    'postcode/POSTCODE_VALIDATE_IN_PROGRESS'
export const POSTCODE_VALIDATE_REQUESTED =
    'postcode/POSTCODE_VALIDATE_REQUESTED'
export const POSTCODE_CHANGE_REQUESTED =
    'postcode/POSTCODE_CHANGE_REQUESTED'
export const POSTCODE_CHANGED =
    'postcode/POSTCODE_CHANGED'


const initialState = {
    postcode: null,
    validPostcode: null,
    requestPostcodeValidation: false,
    changingPostcodeField: false
}


export default (state = initialState, action) => {
    switch (action.type) {
        case POSTCODE_CHANGE_REQUESTED:
            return {
                ...state,
                changingPostcodeField: true
            }
  
        case POSTCODE_CHANGED:
            return {
                ...state,
                postcode: action.text
            }

        case POSTCODE_VALIDATE_REQUESTED:
            return {
                ...state,
                requestPostcodeValidation: !state.requestPostcodeValidation
            }

        case POSTCODE_VALIDATE_IN_PROGRESS:
            // TODO log the status and additional useful info 
            return {
                ...state,
                validPostcode: action.request.status,
                requestPostcodeValidation: !state.requestPostcodeValidation
            }
  
        default:
            return state
    }
}


export const setPostcode = (e) => {
    return dispatch => {
        dispatch({
            type: POSTCODE_CHANGE_REQUESTED
        })

        dispatch({
            type: POSTCODE_CHANGED,
            text: e.target.value
        })
    }
}


export const validatePostcode = (e) => {
    // TODO log the postcode used
    const { key, target } = e

    return dispatch => {
        dispatch({
            type: POSTCODE_VALIDATE_REQUESTED,
            keyPress: key
        })

        // slow down the request for a better UX
        // a user can see that a request is in progress
        setTimeout(() => {
            fetch(
                'https://api.postcodes.io/postcodes/'
                + target.value)
            .then(res => res.json())
            .then(data => dispatch({
                    type: POSTCODE_VALIDATE_IN_PROGRESS,
                    request: data }))
            .catch((err) => {
                // TODO - log result
                console.log(err)
            })
        }, 500)
    }
}