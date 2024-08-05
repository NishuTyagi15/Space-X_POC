import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Paper } from '@mui/material';
import LaunchInfo from '../LaunchDetails/LaunchInfo';
import LaunchFacilities from '../LaunchFacilities/LaunchFacilities';
import "../../App.css";
import Starlink from '../Starlink/Starlink';
import { previousLaunch, upcomingLaunch } from '../Actions/action';

const Dashboard = (props) => {
    useEffect(() => {
        props.upcomingLaunch();
        props.previousLaunch();
    }, []);

    // console.log("props.upcomingLaunchDetails", props.upcomingLaunchDetails)
    console.log("props.previousLaunchDetails", props.previousLaunchDetails)

    return (
        <div className='dashboard-items'>
            <div className='flex gap item-1'>
                <Paper className='paper-item upcoming-rocket' elevation={3} sx={{ padding: 2 }}>
                    <LaunchInfo
                        title="Upcoming launch"
                        missionName={props.upcomingLaunchDetails?.mission_name || 'mission name'}
                        rocket={props.upcomingLaunchDetails?.rocket?.rocket_name || 'rocket_name'}
                        flightNumber={props.upcomingLaunchDetails?.flight_number || "23245575"}
                        launchDate={props.upcomingLaunchDetails?.launch_date_utc || "Nov 15, 05:05 PM"}
                        links={props.upcomingLaunchDetails?.links || null}
                        launchpad={props.upcomingLaunchDetails?.launch_site?.site_name || "sitename"}
                    />
                </Paper>
                <Paper className='paper-item previous-rocket' elevation={3} sx={{ padding: 2 }}>
                    <LaunchInfo
                        title="Previous launch"
                        missionName={props.previousLaunchDetails?.mission_name || 'mission name'}
                        rocket={props.previousLaunchDetails?.rocket?.rocket_name || 'rocket_name'}
                        flightNumber={props.previousLaunchDetails?.flight_number || "23245575"}
                        launchDate={props.previousLaunchDetails?.launch_date_utc || "Nov 01, 01:41 PM"}
                        links={props.previousLaunchDetails?.links || null}
                        launchpad={props.previousLaunchDetails?.crew || "none"}
                    />
                </Paper>
            </div>
            <div className='flex gap item-2'>
                <Paper className='paper-item' elevation={3} sx={{ padding: 2 }}>
                    <LaunchFacilities />
                </Paper>
                <Paper className='paper-item' elevation={3} sx={{ padding: 2 }}>
                    <Starlink />
                </Paper>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        upcomingLaunchDetails: state.upcomingLaunchDetails,
        previousLaunchDetails: state.previousLaunchDetails,
    };
}

const mapDispatchToProps = {
    upcomingLaunch,
    previousLaunch,
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Dashboard);
