import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, Tabs, Tab, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

function RocketDialog({ open, handleClose, rocketData }) {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleIconClick = () => {
        handleClose();
    };

    const styles = {
        dialogMain: {
            overflow: 'hidden',
            display: 'flex',
            position: 'fixed',
            top: '0px',
            left: '0px',
            width: '100vw',
            height: '100vh',
            zIndex: '30',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            alignItems: 'center',
            justifyContent: 'center',
            opacity: '1',
            transition: 'opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms'
        },
        dialogTitle: {
            display: 'flex',
            alignItems: 'center',
            padding: '16px 24px',
        },
        dialogTitleData: {
           
        },
        closeButton: {
            position: 'absolute',
            right: '16px',
            top: '16px',
        },
        dialogContent: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            padding: '24px',
        },
        imageSection: {
            width: '100%',
            textAlign: 'center',
        },
        image: {
            width: '100%',
            height: 'auto',
        },
        textSection: {
            marginTop: '20px',
            textAlign: 'center',
        },
        description: {
            fontWeight: 'bold',
        },
        descDetails: {
            textAlign: 'justify',
        },
        photosSection: {
            width: '100%',
        },
        tabs: {
        },
    };

    return (
        <Dialog style={styles.dialogMain} open={open} onClose={handleClose} maxWidth="md" fullWidth>
            <DialogTitle style={styles.dialogTitle}>
                <h2 style={styles.dialogTitleData}>{rocketData.name}</h2>
                <ul className='nav-list' style={styles.listOptions}>
                    <li style={styles.overview} onChange={handleChange}>
                        Overview
                    </li>
                    <li style={styles.photos} onChange={handleChange}>
                        Photos
                    </li>
                </ul>
                {/* <Tabs value={value} onChange={handleChange} style={styles.tabs}>
                    <Tab label="Overview" />
                    <Tab label="Photos" />
                </Tabs> */}
                <IconButton onClick={handleIconClick} style={styles.closeButton}>
                    <CloseIcon />
                </IconButton>
            </DialogTitle>
            <DialogContent>
                {value === 0 && (
                    <div style={styles.dialogContent}>
                        <div style={styles.imageSection}>
                            <img src={rocketData.flickr_images[1]} alt={rocketData.name} style={styles.image} />
                        </div>
                        <div style={styles.textSection}>
                            <h3 style={styles.description}>DESCRIPTION</h3>
                            <p style={styles.descDetails}>{rocketData.description}</p>
                        </div>
                    </div>
                )}
                {value === 1 && (
                    <div style={styles.photosSection}>
                        <AliceCarousel infinite>
                            {rocketData.flickr_images.map((image, index) => (
                                <img key={index} src={image} alt={`${rocketData.name} ${index + 1}`} style={styles.image} />
                            ))}
                        </AliceCarousel>
                    </div>
                )}
            </DialogContent>
        </Dialog>
    );
}

export default RocketDialog;
