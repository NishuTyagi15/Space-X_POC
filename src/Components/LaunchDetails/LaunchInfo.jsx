import React from 'react';
import { redditDisable, wikipediaDisable, wikipediaEnable, youtubeDisable, youtubeEnable } from '../../Images/Icons';
import './LaunchInfo.css'
import { formatDateTime } from '../Utility/utils';
import { Tooltip } from '@mui/material';

const LaunchInfo = ({ title, missionName, rocket, flightNumber, launchDate, links, launchpad }) => {
    return (
        <div className='grid-content'>
            <h3 className='launch-facility'>{title}</h3>
            <div className='flex-row'>
                <div className='mission-info'>
                    <p className='flex transparent-font'>MISSON NAME
                        <span className='normal-font'>{missionName}</span>
                    </p>
                    <p className='flex transparent-font'>ROCKET
                        <span className='normal-font'>{rocket}</span>
                    </p>
                    <p className='flex transparent-font'>FLIGHT NUMBER
                        <span className='normal-font'>{flightNumber}</span>
                    </p>
                    <p className='flex transparent-font'>TIME(UTC)
                        <span className='normal-font'>{formatDateTime(launchDate)}</span>
                    </p>
                    <p className='flex transparent-font'>LINKS
                        <div className='flex-row s-links'>
                            {links?.wikipedia ? <Tooltip classes={{ tooltip: 'linkstooltip' }} title="Wikipedia" arrow><a href={links?.wikipedia} target="_blank" rel="noopener noreferrer" className='social-links available'>{wikipediaEnable}</a></Tooltip>
                            : <Tooltip classes={{ tooltip: 'linkstooltip' }} title="Wikipedia Unavailable" arrow><span className='social-links not-available'>{wikipediaDisable}</span></Tooltip>}
                            {links?.video_link ? <Tooltip classes={{ tooltip: 'linkstooltip' }} title="Youtube" arrow><a href={links?.video_link} target="_blank" rel="noopener noreferrer" className='social-links available'>{youtubeEnable}</a></Tooltip>
                            : <Tooltip classes={{ tooltip: 'linkstooltip' }} title="Youtube Unavailable" arrow><span className='social-links not-available'>{youtubeDisable}</span></Tooltip>}
                            {links?.reddit_campaign ? <Tooltip classes={{ tooltip: 'linkstooltip' }} title="Reddit" arrow><a href={links?.reddit_campaign} target="_blank" rel="noopener noreferrer" className='available'>{redditDisable}</a></Tooltip>
                            : <Tooltip classes={{ tooltip: 'linkstooltip' }} title="Reddit Unavailable" arrow><span  className='not-available'>{redditDisable}</span></Tooltip>}
                        </div>
                    </p>
                </div>
                <div className='logo-info'>
                    <div className='rocket-logo-main'>
                        <h4 className='transparent-font'>ROCKET LOGO</h4>
                        <div className='rocket-logo'>
                            <img className='rocket-patch' src={links?.mission_patch_small} alt='logo'/>
                        </div>
                    </div>
                    {title === "Previous launch" ? <p className='flex transparent-font'>CREW
                        <span className='normal-font'>{launchpad}</span>
                    </p> : <p className='flex transparent-font'>LAUNCHPAD
                        <span className='normal-font'>{launchpad}</span>
                    </p>}
                </div>
            </div>
        </div>
    );
}

export default LaunchInfo;
