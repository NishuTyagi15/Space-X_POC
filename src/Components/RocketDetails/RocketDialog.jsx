import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, Tabs, Tab, IconButton } from '@mui/material';
import { connect } from 'react-redux';
import { dialogState } from '../Actions/action';
import { closeIcon } from '../../Images/Icons';
import ImageStack from './ImageStack';

function RocketDialog(props) {
    const [value, setValue] = useState(0);

    const handleOverview = () => {
        setValue(0);
    };

    const handlePhotos = () => {
        setValue(1);
    }

    const handleClose = () => {
        props.dialogState(false);
        props.onClose();
        setValue(0)
    };

    const styles = {
        dialogPaper: {
            width: '100vw',
            height: '80vh'
        },
        dialogTitle: {
            display: 'flex',
            alignItems: 'center',
            margin: '0px 0px -36px 24px',
        },
        dialogTitleData: {
            flexFlow: 'row',
            placeContent: 'normal',
            alignItems: 'center',
            display: 'flex',
            marginRight: '14px',
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
            display: 'flex',
            placeContent: 'center',
            borderRadius: '10px',
            overflow: 'hidden',
            boxShadow: 'rgba(0, 0, 0, 0.2) 5px 5px 45px 5px',
            width: '67%',
        },
        image: {
            width: '308px',
            height: '430px',
            objectFit: 'cover',
        },
        textSection: {
            marginTop: 'unset',
            marginLeft: '2rem',
            height: '430px',
            boxShadow: 'rgba(0, 0, 0, 0.2) 5px 5px 45px 5px',
            borderRadius: '10px',
            display: 'flex',
            flexFlow: 'column',
            minHeight: '366px',
        },
        description: {
            color: 'rgb(155, 155, 155)',
            fontWeight: '200',
            fontSize: '0.74rem',
            margin: '0px',
            padding: '0px',
            fontFamily: 'HelveticaNeue, sans-serif !important',
            padding: '2rem 0rem 0rem 2rem'
        },
        descDetails: {
            color: 'rgb(53, 53, 53)',
            margin: '0px',
            fontSize: '0.9rem',
            fontWeight: '100',
            lineHeight: '1.7',
            fontFamily: 'HelveticaNeue, sans-serif !important',
            padding: '0rem 2rem 0rem 2rem'
        },
        photosSection: {
            width: '100%',
        },
        tab: {
            textTransform: 'none',
            transition: 'background 0.2s ease-out 0s',
            fontWeight: '300',
            color: 'rgb(101, 101, 101)',
            cursor: 'pointer',
            borderRadius: '10px',
            margin: '0px',
            padding: '0.25rem 0.8rem',
            fontSize: '1.5rem',
        },
        tabActive: {
            textTransform: 'none',
            transition: 'background 0.2s ease-out 0s',
            fontWeight: '600',
            color: 'rgb(53, 53, 53)',
            cursor: 'pointer',
            borderRadius: '10px',
            margin: '0px',
            padding: '0.25rem 0.8rem',
            fontSize: '1.5rem',
        },
        stackImages: {
            height: '480px',
            width: '774px'
        }
    };

    return (
        <Dialog
            open={props.open}
            onClose={handleClose}
            maxWidth="md"
            fullWidth
            PaperProps={{ style: styles.dialogPaper }}
        >
            <DialogTitle style={styles.dialogTitle}>
                <h2 style={styles.dialogTitleData}>{props.rocketData.name}</h2>
                <div className='flex-row'>
                    {value === 0 ?  <div onClick={handleOverview} style={styles.tabActive}>Overview</div> : <div onClick={handleOverview} style={styles.tab}>Overview</div>}
                    {value === 1 ?  <div onClick={handlePhotos} style={styles.tabActive}>Photos</div> : <div onClick={handlePhotos} style={styles.tab}>Photos</div>}
                </div>
                <IconButton onClick={handleClose} style={styles.closeButton}>
                    {closeIcon}
                </IconButton>
            </DialogTitle>
            <DialogContent>
                {value === 0 && (
                    <div style={styles.dialogContent}>
                        <div style={styles.imageSection}>
                            <img src={props.rocketData.flickr_images[1]} alt={props.rocketData.name} style={styles.image} />
                        </div>
                        <div style={styles.textSection}>
                            <h3 style={styles.description}>DESCRIPTION</h3>
                            <p style={styles.descDetails}>{props.rocketData.description}</p>
                        </div>
                    </div>
                )}
                {value === 1 && (
                    <div style={styles.photosSection}>
                        <ImageStack images={props.rocketData.flickr_images} />
                    </div>
                )}
            </DialogContent>
        </Dialog>
    );
}

const mapDispatchToProps = {
    dialogState,
};

export default connect(null, mapDispatchToProps)(RocketDialog);
