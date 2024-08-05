import React, { useState, useEffect } from 'react';
import RocketDialog from './RocketDialog';
import './RocketCard.css';
import { connect } from 'react-redux';
import { dialogState } from '../Actions/action';

const RocketCard = (props) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    props.dialogState(true);
    setOpen(true);
  };

  const handleClose = () => {
    props.dialogState(false);
    setOpen(false);
  };

  useEffect(() => {
    console.log('rocketData:', props.rocketData);
  }, [props.rocketData]);

  const backgroundImageUrl = props.rocketData.flickr_images?.[1] || 'dummyImage.jpg';

  return (
    <div className="rocket-card">
      <p className='rocket-title'>{props.rocketData.name}</p>
      <div
        className="rocket-background"
        style={{ backgroundImage: `url(${backgroundImageUrl})` }}
        onClick={handleClickOpen}
      >
        <div className={`rocket-details ${props.rocketData.active ? 'status-active' : 'status-development'}`}>
          <h4 className='status'>STATUS</h4>
          <p className='status-type'>{props.rocketData.active ? "Active" : "In development"}</p>
        </div>
      </div>
      <RocketDialog open={open} onClose={handleClose} rocketData={props.rocketData} />
    </div>
  );
}

const mapDispatchToProps = {
  dialogState,
};

export default connect(null, mapDispatchToProps)(RocketCard);
