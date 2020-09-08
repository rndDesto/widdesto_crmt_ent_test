import React, { Fragment } from 'react'
import Heroshot from '../../layout/Heroshot'
import TopNotif from '../../layout/TopNotif'
import Services from '../../layout/Services'
import Footer from '../../layout/Footer'
import Newsletter from '../../layout/Newsletter'
import PropTypes from 'prop-types'
import { CssBaseline, Toolbar, useScrollTrigger } from '@material-ui/core'

const LandingPage = (props) => {
    return (
        <Fragment>

            <CssBaseline />
            <ElevationScroll {...props}>
                        <TopNotif />
            </ElevationScroll>
            <Toolbar id="back-to-top-anchor"/>

            <Heroshot />
            <Services />
            <Footer />
            <Newsletter />
        </Fragment>
    )
}

export default LandingPage


function ElevationScroll(props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window ? window() : undefined,
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}

ElevationScroll.propTypes = {
    children: PropTypes.element.isRequired,
    window: PropTypes.func,
};
