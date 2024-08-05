import React, { useState } from 'react';
import './Launch.css'
import { moreIcon } from '../../Images/Icons';

const LaunchFacilities = () => {
    const [expand, setExpend] = useState(false)

    const handleExpandClick = () => {
        setExpend(!expand);
    };
    
    return (
        <div className='grid-content'>
            <h2 className='launch-facility'>Launch Facilities</h2>
            <div className='launch-content'>
                <div className="base-1 flex cape-canaveral">
                    <div className='flex-row justify-space'>
                        <div className='base-info normal-font'>Cape Canaveral
                            <span className='transparent-font'>LC-39A & SLC-40</span>
                        </div>
                        <div className='base-info normal-font align-end'>
                            <span className='transparent-font'>REGION</span>
                            Florida
                        </div>
                    </div>
                    <div className='flex-row justify-space'>
                        <div className='normal-font flex'>
                            <span className='transparent-font'>TEMP</span>
                            27°C
                        </div>
                        <div className='normal-font flex'>
                            <span className='transparent-font'>WEATHER</span>
                            Clear
                        </div>
                        <div className='normal-font flex align-end'>
                            <span className='transparent-font'>WIND</span>
                            0 m/s
                        </div>
                    </div>
                </div>
                <div className="base-1 base-2 flex">
                    <div className='flex-row justify-space'>
                        <div className='base-info normal-font'>Starbase Boca Chica
                            <span className='transparent-font'>Starship Launch Facility</span>
                        </div>
                        <div className='base-info normal-font align-end'>
                            <span className='transparent-font'>REGION</span>
                            Texas
                        </div>
                    </div>
                    <div className='flex-row justify-space'>
                        <div className='normal-font flex'>
                            <span className='transparent-font'>TEMP</span>
                            27°C
                        </div>
                        <div className='normal-font flex'>
                            <span className='transparent-font'>WEATHER</span>
                            Clear
                        </div>
                        <div className='normal-font flex align-end'>
                            <span className='transparent-font'>WIND</span>
                            3 m/s
                        </div>
                    </div>
                </div>
                {expand && <div className="base-1 base-3 flex">
                    <div className='flex-row justify-space'>
                        <div className='base-info normal-font'>Vandenerg Base
                            <span className='transparent-font'>USSF SLC-4E</span>
                        </div>
                        <div className='base-info normal-font align-end'>
                            <span className='transparent-font'>REGION</span>
                            California
                        </div>
                    </div>
                    <div className='flex-row justify-space'>
                        <div className='normal-font flex'>
                            <span className='transparent-font'>TEMP</span>
                            11°C
                        </div>
                        <div className='normal-font flex'>
                            <span className='transparent-font'>WEATHER</span>
                            Fog
                        </div>
                        <div className='normal-font flex align-end'>
                            <span className='transparent-font'>WIND</span>
                            2 m/s
                        </div>
                    </div>
                </div>}
                <div className="more-less" onClick={handleExpandClick} style={{ cursor: 'pointer' }}>
                    {expand ? <span className='less'>{moreIcon}</span> : <span className='more'>{moreIcon}</span>} {expand ? 'less' : 'more'}
                </div>
            </div>
        </div>
    );
}

export default LaunchFacilities;
