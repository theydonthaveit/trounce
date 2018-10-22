export const SET_GENDER =
    'region/SET_GENDER'


const initialState = {
    gender: null
}


export default (state = initialState, action) => {
    switch (action.type) {
        case SET_GENDER:
            return {
                ...state,
                gender: action.gender
            }

        default:
            return state
    }
}


export const setGender = (gender) => {
    // TODO set a disable button
    return dispatch => {
        dispatch({
            type: SET_GENDER,
            gender: gender
        })
    }
}