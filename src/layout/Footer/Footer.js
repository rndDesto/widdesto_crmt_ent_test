import React from 'react'
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';

const Footer = ({classes}) => {
    return (
        <div className={classes.footerBg}>
            <Typography align="center">&copy; Widdesto Ari Yudistiro. All rights reserved.</Typography>
        </div>
    )
}

Footer.defaultProps = {
    classes: {},
};

Footer.propTypes = {
    classes: PropTypes.object,
};

export default Footer
