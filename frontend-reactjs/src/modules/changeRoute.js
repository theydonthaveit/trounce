import { push } from 'connected-react-router'

export const PUSH_ROUTE_LOL =
    'route/PUSH_ROUTE_LOL'


const initialState = {
    route: null
}


export default (state = initialState, action) => {
    switch (action.type) {
        case PUSH_ROUTE_LOL:
            action.route
            return {
                ...state,
            }

        default:
            return state
    }
}


export const changeRoute = (route) => {
    // TODO set a disable button
    return dispatch => {
        console.log('we got here')
        dispatch({
            type: PUSH_ROUTE_LOL,
            route: () => push(route)
        })

        // dispatch({
        //     type: SET_GENDER,
        //     gender: gender
        // })
    }
}