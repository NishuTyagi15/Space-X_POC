import React, { useEffect } from 'react';
import { Paper } from '@mui/material';
import './Rockets.css';
import RocketCard from '../RocketDetails/RocketCard';
import { connect } from 'react-redux';
import { fetchRocketsDetails } from '../Actions/action';

const Rockets = (props) => {

  useEffect(() => {
    props.fetchRocketsDetails()
  }, [])

  return (
    <div className='rocket-main-content'>
      <div className='paper-item rocket-stack'>
        <div className='flex-row'>
          {props.rocketsDetails?.length > 0 && props.rocketsDetails.map((rocket) => (
            <RocketCard rocketData={rocket} />
          ))}
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    rocketsDetails: state.rocketsDetails,
  };
}

const mapDispatchToProps = {
  fetchRocketsDetails: fetchRocketsDetails
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Rockets);
