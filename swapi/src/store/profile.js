// constants
const LOOK_UP = "profile/LOOK_UP"

// action creators
const getInfo = (character) => ({
    type: LOOK_UP,
    payload: character
})

// thunks

export const luke = () => async (dispatch) => {
    console.log('############ IN THUNK')
    const response = await fetch('/api/character/luke-skywalker');
    const data = await response.json();

    console.log('$$$$$$$$$$$$$$$$ RETURNED: ', data)
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
