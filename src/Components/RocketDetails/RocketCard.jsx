import React, { useState, useEffect } from 'react';
import RocketDialog from './RocketDialog';
import './RocketCard.css';

const RocketCard = ({ rocketData }) => {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        console.log('rocketData:', rocketData);
    }, [rocketData]);

    const backgroundImageUrl = rocketData.flickr_images?.[1] || 'dummyImage.jpg';

    return (
        <div className="rocket-card" onClick={handleClickOpen}>
            <p className='rocket-title'>{rocketData.name}</p>
            <div
                className="rocket-background"
                style={{ backgroundImage: `url(${backgroundImageUrl})` }}
            >
                <div className={`rocket-details ${rocketData.active ? 'status-active' : 'status-development'}`}>
                    <h4 className='status'>STATUS</h4>
                    <p className='status-type'>{rocketData.active ? "Active" : "In development"}</p>
                </div>
            </div>
            <RocketDialog open={open} handleClose={handleClose} rocketData={rocketData} />
        </div>
    );
}

export default RocketCard;
