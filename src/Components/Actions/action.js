import axios from 'axios';
import { FETCH_ROCKETS_DETAILS, PREVIOUS_LAUNCH_DETAILS, UPCOMING_LAUNCH_DETAILS } from '../Constants/constants';

//function to fetch the upcoming launch details from the upcoming space-x api
export const upcomingLaunch = () => async(dispatch) => {
    try {
        const upcoming = await axios.get(`https://api.spacexdata.com/v3/launches/upcoming`, {
        });
        if(upcoming) {
            dispatch({
                type: UPCOMING_LAUNCH_DETAILS,
                payload: upcoming?.data[0]
            })
        }
    } catch(error) {
        console.error(`Error retriving upcoming launch details`);
    }
}

//function to fetch the upcoming launch details from the upcoming space-x api
export const previousLaunch = () => async(dispatch) => {
    try {
        const previous = await axios.get(`https://api.spacexdata.com/v3/launches/past`, {
        });
        if(previous) {
            dispatch(previousLaunchDetails(previous?.data[previous?.data?.length - 1]));
        }
    } catch(error) {
        console.error(`Error retriving previous launch details`);
    }
}

// function to dispatch the action to store previous launch details
export const previousLaunchDetails = (data) => (dispatch) => {
    dispatch({
        type: PREVIOUS_LAUNCH_DETAILS,
        payload: data
    })
}


//function to fetch the rockets page details from the api 
export const fetchRocketsDetails = () => async(dispatch) => {
    try {
        const response = await axios.get(`https://api.spacexdata.com/v4/rockets`, {
        });
        if(response) {
            dispatch(rocketsDetails(response.data.slice(1)));   
        }
    } catch(error) {
        console.error(`Error retriving rocktes details`);
    }
}

export const rocketsDetails = (data)  => (dispatch) => {
    dispatch({
        type: FETCH_ROCKETS_DETAILS,
        payload: data
    })
}
