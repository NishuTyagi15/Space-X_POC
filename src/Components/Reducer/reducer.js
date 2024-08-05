import { DIALOG_STATE, FETCH_ROCKETS_DETAILS, PREVIOUS_LAUNCH_DETAILS, UPCOMING_LAUNCH_DETAILS } from "../Constants/constants"

const initialState = {
    upcomingLaunchDetails: [],
    previousLaunchDetails: [],
    rocketsDetails: [],
    closeDialogState: false
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
        case DIALOG_STATE:
            return {
                ...state,
                dialogOpenState: action.payload
            }
        default:
            return state;
    }
}