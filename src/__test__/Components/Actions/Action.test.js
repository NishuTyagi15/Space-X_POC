import { previousLaunch, previousLaunchDetails, upcomingLaunch } from '../../../Components/Actions/action';
import axios from 'axios';
import { PREVIOUS_LAUNCH_DETAILS, UPCOMING_LAUNCH_DETAILS } from '../../../Components/Constants/constants';

// Mock axios
jest.mock('axios');

describe('SpaceX Launch Actions', () => {
    let dispatch;

    beforeEach(() => {
        dispatch = jest.fn();
    });

    it('should fetch upcoming launch details and dispatch UPCOMING_LAUNCH_DETAILS', async () => {
        const mockData = { data: [{ mission_name: 'Mission 1', launch_date_utc: '2024-09-15T14:00:00Z' }] };
        axios.get.mockResolvedValueOnce(mockData);

        await upcomingLaunch()(dispatch);

        expect(axios.get).toHaveBeenCalledWith('https://api.spacexdata.com/v3/launches/upcoming', {});
        expect(dispatch).toHaveBeenCalledWith({
            type: UPCOMING_LAUNCH_DETAILS,
            payload: mockData.data[0]
        });
    });

    it('should handle errors in fetching upcoming launch details', async () => {
        axios.get.mockRejectedValueOnce(new Error('Network Error'));

        await upcomingLaunch()(dispatch);

        expect(axios.get).toHaveBeenCalledWith('https://api.spacexdata.com/v3/launches/upcoming', {});
        expect(dispatch).not.toHaveBeenCalled();
        // Optionally, you can mock console.error to verify that the error message was logged
    });

    it('should fetch previous launch details and dispatch PREVIOUS_LAUNCH_DETAILS', async () => {
        const mockData = { data: [{ mission_name: 'Mission 1' }, { mission_name: 'Mission 2' }] };
        axios.get.mockResolvedValueOnce(mockData);

        await previousLaunch()(dispatch);

        expect(axios.get).toHaveBeenCalledWith('https://api.spacexdata.com/v3/launches/past', {});
        expect(dispatch).toHaveBeenCalledWith(previousLaunchDetails(mockData.data[mockData.data.length - 1]));
    });

    it('should handle errors in fetching previous launch details', async () => {
        axios.get.mockRejectedValueOnce(new Error('Network Error'));

        await previousLaunch()(dispatch);

        expect(axios.get).toHaveBeenCalledWith('https://api.spacexdata.com/v3/launches/past', {});
        expect(dispatch).not.toHaveBeenCalled();
        // Optionally, you can mock console.error to verify that the error message was logged
    });

    it('should dispatch previous launch details correctly', () => {
        const mockData = { mission_name: 'Mission 1', launch_date_utc: '2024-09-15T14:00:00Z' };

        previousLaunchDetails(mockData)(dispatch);

        expect(dispatch).toHaveBeenCalledWith({
            type: PREVIOUS_LAUNCH_DETAILS,
            payload: mockData
        });
    });
});
