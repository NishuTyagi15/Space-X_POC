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
            flexFlow: 'row',
            placeContent: 'normal',
            alignItems: 'center',
            display: 'flex',
            margin: '0px',
            padding: '0px',
            fontSize: '1.5rem',
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
        tab1: {
            textTransform: 'none',
            transition: 'background 0.2s ease-out 0s',
            fontWeight: '300',
            color: 'rgb(53, 53, 53)',
            cursor: 'pointer',
            borderRadius: '10px',
            margin: '0px',
            padding: '0.25rem 0.8rem',
            fontSize: '1.5rem'
        }
    };

    return (
        <Dialog style={styles.dialogMain} open={open} onClose={handleClose} maxWidth="md" fullWidth>
            <DialogTitle style={styles.dialogTitle}>
                <h2 style={styles.dialogTitleData}>{rocketData.name}</h2>
                <Tabs value={value} onChange={handleChange} style={styles.tabs}>
                    <Tab style={styles.tab1} label="Overview" />
                    <Tab style={styles.tab1} label="Photos" />
                </Tabs>
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
