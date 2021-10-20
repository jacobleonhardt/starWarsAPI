// constants
const LOOK_UP = "profile/LOOK_UP"

// action creators
const getInfo = (character) => ({
    type: LOOK_UP,
    payload: character
})

// thunks

export const luke = () => async (dispatch) => {
    const response = await fetch('https://swapi.dev/api/people/1/');
    const data = await response.json();

    if (response.ok) {
        dispatch(getInfo(data))
        return data
    } else {
        throw response
    }
}

export const r2d2 = () => async (dispatch) => {
    const response = await fetch('https://swapi.dev/api/people/3/');
    const data = await response.json();

    if (response.ok) {
        dispatch(getInfo(data))
        return data
    } else {
        throw response
    }
}

// Reducer
const initialState = {profile: null}

export default function profileReducer(state = initialState, action) {
    switch (action.type) {
        case LOOK_UP:
            return {profile: action.payload}
        default:
            return state
    }
}
