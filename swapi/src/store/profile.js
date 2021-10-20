// constants
const LOOK_UP = "profile/LOOK_UP"

// action creators
const getInfo = (character) => ({
    type: LOOK_UP,
    payload: character
})

// thunks

export const luke = () => async (dispatch) => {
    const response = await fetch('/luke-skywalker');
    const data = await response.json();
    if (data.errors) {
        return data;
    }
    dispatch(getInfo(data))
    return data
}

// Reducer
const initialState = {profile: null}

export default function profileReducer(state = initialState, action) {
    switch (action.type) {
        case LOOK_UP:
            return {profile: action.payload}
        default:
            return {profile: null}
    }
}
