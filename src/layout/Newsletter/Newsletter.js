import React, { useState, useLayoutEffect, useEffect } from 'react'
import PropTypes from 'prop-types';
import Cookies from 'js-cookie';
import { Typography, Slide, Grid, Button, withStyles, TextField, } from '@material-ui/core';


const StyledButton = withStyles({
    root: {
        color: '#ffffff',
        background: '#ff8000',
        '&:hover': {
            background: '#f99a3a',
            color: '#ffffff'
        }
    },
    label: {
        textTransform: 'capitalize',
    },
})(Button);


const Newsletter = ({ classes }) => {
    const [checked, setChecked] = useState(false);
    const [isClose, setIsClose] = useState(false);

    useEffect(() => {
        let cekNewsLetter = Cookies.get('newsletter'); 
        if(cekNewsLetter){
            setIsClose(true);
        }
        console.log("cekNewsLetter = ", cekNewsLetter)
    }, [])

    const handleChange = () => {
        setChecked(false);
        setIsClose(true);
        let expired = new Date(new Date().getTime() + 1 * 60 * 1000);
        Cookies.set('newsletter', 'iscloses', {
            expires: expired
        });
    };

    const [scrollPosition, setPosition] = useState(0);
    useLayoutEffect(() => {
        function updatePosition() {
            setPosition(window.pageYOffset);
            if (!isClose && scrollPosition >= 300) {
                setChecked(true)
            }
        }
        window.addEventListener('scroll', updatePosition);
        updatePosition();
        return () => window.removeEventListener('scroll', updatePosition);
    }, [checked, isClose, scrollPosition]);


    return (
        <Slide direction="up" in={checked}>
            <div className={classes.newsletterBg}>
                <span className={classes.newsLetterClose} onClick={() => handleChange()}>&times;</span>
                <div className={classes.newsLetterContent}>
                    <Typography className={classes.newsLetterHead}>Get latest updates in web technologies</Typography>
                    <Typography className={classes.newsLetterDetail}>I write articles related to web technologies, such as design trends, development tools, UI/UX case studies and reviews, and more. Sign up to my newsletter to get them all.</Typography>
                    <form>
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={9}>
                                <TextField className={classes.emailInput} placeholder="Email Address" fullWidth variant="outlined" size="small" InputProps={{ className: classes.input }} margin="none" />
                            </Grid>
                            <Grid item xs={12} sm={3}>
                                <StyledButton fullWidth variant="contained">Count me in!</StyledButton>
                            </Grid>
                        </Grid>
                    </form>

                </div>
            </div>
        </Slide>
    )
}

Newsletter.defaultProps = {
    classes: {},
};

Newsletter.propTypes = {
    classes: PropTypes.object,
};

export default Newsletter
