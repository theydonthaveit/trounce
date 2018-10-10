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
            return {
                ...state,
                // TODO make the request work
                validPostcode: true,
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
    return dispatch => {
        dispatch({
            type: POSTCODE_VALIDATE_REQUESTED,
            keyPress: e.key
        })

        dispatch({
            type: POSTCODE_VALIDATE_IN_PROGRESS,
            request: fetch(
                        'https://api.postcodes.io/postcodes/'
                        + e.target.value)
                    .then(res => res.json())
        })
    }
}