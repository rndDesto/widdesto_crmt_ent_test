import React from 'react'
import PropTypes from 'prop-types';

import logo from '../../assets/img/y-logo-white.png'
import { Grid, Button, Typography, withStyles } from '@material-ui/core';

const StyledButton = withStyles({
    root: {
      color: '#ffffff',
      borderColor:'#ffffff',
      borderRadius: 4,
      padding:'10px 20px',
      '&:hover': {
        background: '#ffffff',
        color:'#004a75'
      }
    },
  })(Button);

const Heroshot = ({ classes }) => {
    return (
        <div className={classes.root}>
            <div className={classes.heroContainer}>
                <img className={classes.logo} src={logo} alt="y-logo-white.png" />
                <Grid
                    alignItems="center"
                    className={classes.heroText}
                    container
                    direction="column"
                    justify="center"
                    spacing={0}
                >

                    <Grid item xs={6}>
                        <Typography className={classes.captionName}>Hello! I'm Widdesto Ari Yudistiro</Typography>
                        <Typography className={classes.captionService}>Consult, Design, and Develop Websites</Typography>
                        <Typography className={classes.captionOther}>
                            Have something great in mind? Feel free to contact me.<br></br>
                            I'll help you to make it happen.
                        </Typography>

                        <StyledButton variant="outlined">Let's Make Contact</StyledButton>
                    </Grid>

                </Grid>
            </div>
        </div>
    )
}


Heroshot.defaultProps = {
    classes: {},
};

Heroshot.propTypes = {
    classes: PropTypes.object,
};

export default Heroshot
