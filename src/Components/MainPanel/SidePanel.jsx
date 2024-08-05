import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { spacexLogo } from '../../Images/Icons';
import './MainPanel.css';

const SidePanel = () => {
    const [active, setActive] = useState(true);

    useEffect(() => {
        if(window.location?.pathname?.includes('rockets')) {
            setActive(false)
        } else {
            setActive(true)
        }
    }, [])

    return (
        <Box
            sx={{
                width: 400,
                backgroundColor: '#fff',
                color: 'black',
                padding: 2,
                display: 'flex',
                flexDirection: 'column',
                borderTopLeftRadius: '15px',
                borderBottomLeftRadius: '10px',
                boxShadow: 'rgba(0, 0, 0, 0.1) 5px 5px 50px'
            }}
        >
            <a href="/" className='spacex-logo'>
                {spacexLogo}
            </a>
            <nav className='nav-buttons'>
                <ul className='nav-list'>
                    <li className='lists'>
                        <a href='/' className={`nav-options ${active ? 'active' : ''}`} sx={{ marginBottom: 2, width: '100%' }}>
                            Dashboard
                        </a>
                    </li>
                    <li className='lists'>
                        <a href='/rockets' className={`nav-options ${active ? '' : 'active'}`} sx={{ width: '100%' }}>
                            Rockets
                        </a>
                    </li>
                </ul>
            </nav>
        </Box>
    );
}

export default SidePanel;
