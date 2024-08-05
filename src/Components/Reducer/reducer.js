import { FETCH_ROCKETS_DETAILS, PREVIOUS_LAUNCH_DETAILS, UPCOMING_LAUNCH_DETAILS } from "../Constants/constants"

const initialState = {
    upcomingLaunchDetails: [],
    previousLaunchDetails: []

}

/* eslint-disable-next-line */
export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case UPCOMING_LAUNCH_DETAILS:
            return {
                ...state,
                upcomingLaunchDetails: action.payload
            }
        case PREVIOUS_LAUNCH_DETAILS:
            return {
                ...state,
                previousLaunchDetails: action.payload
            }
        case FETCH_ROCKETS_DETAILS:
            return {
                ...state,
                rocketsDetails: action.payload
            }
        default:
            return state;
    }
}