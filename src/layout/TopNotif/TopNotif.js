import React, { useState } from 'react'
import PropTypes from 'prop-types';
import { Slide, Grid, Button, Link, Typography } from '@material-ui/core';


const TopNotif = ({ classes }) => {
    const [checked, setChecked] = useState(true);
    const handleChange = (event) => {
        setChecked((checked) => !checked);
        const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');

    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
      anchor.remove();
    }
    };
    return (
        <Slide direction="down" in={checked}>
            <div className={classes.panelNotif}>
                <div className={classes.panelContent} onClick={(e) => handleChange(e)}>
                    <Grid container spacing={3} alignItems="center">
                        <Grid item xs={12} sm={10}>
                            <Typography>
                            By accessing and using this website, you acknowledge that you have read and
understand our <Link className={classes.panelTerm} href="#">Cookie Policy</Link>, <Link className={classes.panelTerm} href="#">Privacy Policy</Link>, and our <Link className={classes.panelTerm} href="#">Terms of Service</Link>.
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={2}>
                            <Button className={classes.panelBtn} variant="contained" disableElevation>Got it!</Button>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </Slide>
    )
}


TopNotif.defaultProps = {
    classes: {},
};

TopNotif.propTypes = {
    classes: PropTypes.object,
};

export default TopNotif
