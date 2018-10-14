export const SET_REGION =
    'region/SET_REGION'


const initialState = {
    regions: ['euw', 'na', 'lck', 'lpl'],
    region: null
}


export default (state = initialState, action) => {
    switch (action.type) {
        case SET_REGION:
            return {
                ...state,
                region: action.region
            }

        default:
            return state
    }
}


export const setRegion = (e) => {
    return dispatch => {
        dispatch({
            type: SET_REGION,
            region: e.target.value
        })
    }
}