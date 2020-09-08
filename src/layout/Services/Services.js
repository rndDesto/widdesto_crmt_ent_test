import React from 'react'
import PropTypes from 'prop-types';
import { Grid, Typography } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBullhorn, faComments, faPaintBrush, faCubes, faTasks, faChartLine } from '@fortawesome/free-solid-svg-icons'

const Services = ({ classes }) => {

    let serviceList;
    let serviceObject = [{
        'title': 'Consult',
        'icon': faComments,
        'content': 'Co-create, design thinking; strengthen infrastructure resist granular. Revolution circular, movements or framework social impact low-hanging fruit. Save the world compelling revolutionary progress.'
    },
    {
        'title': 'Design',
        'icon': faPaintBrush,
        'content': 'Policymaker collaborates collective impact humanitarian shared value vocabulary inspire issue outcomes agile. Overcome injustice deep dive agile issue outcomes vibrant boots on the ground sustainable.'
    },
    {
        'title': 'Develop',
        'icon': faCubes,
        'content': 'Revolutionary circular, movements a or impact framework social impact low-hanging. Save the compelling revolutionary inspire progress. Collective impacts and challenges for opportunities of thought provoking.'
    },
    {
        'title': 'Marketing',
        'icon': faBullhorn,
        'content': 'Peaceful; vibrant paradigm, collaborative cities. Shared vocabulary agile, replicable, effective altruism youth. Mobilize commitment to overcome injustice resilient, uplift social transparent effective.'
    },
    {
        'title': 'Manage',
        'icon': faTasks,
        'content': 'Change-makers innovation or shared unit of analysis. Overcome injustice outcomes strategize vibrant boots on the ground sustainable. Optimism, effective altruism invest optimism corporate social.'
    },
    {
        'title': 'Evolve',
        'icon': faChartLine,
        'content': 'Activate catalyze and impact contextualize humanitarian. Unit of analysis overcome injustice storytelling altruism. Thought leadership mass incarceration. Outcomes big data, fairness, social game-changer.'
    }]

    serviceList = serviceObject.map(data => {
        return <Grid item xs={12} sm={6} md={4} key={data.title}>
            <div className={classes.serviceItem}>
                <Grid container justify="space-between">
                    <Grid item md={4} className={classes.serviceTitle}>{data.title}</Grid>
                    <Grid item md={4}>
                        <FontAwesomeIcon className={classes.serviceIcon} icon={data.icon} pull="right" />
                    </Grid>
                    <Typography className={classes.serviceDetail}>{data.content}</Typography>
                </Grid>
            </div>
        </Grid>
    })


    return (
        <div className={classes.root}>
            <Grid container
                direction="row"
                justify="center"
                alignItems="center"
                className={classes.mainContent}
            >
                <Grid item xs={12}>
                    <Typography className={classes.mainTitle}>
                        How Can I Help You?
                    </Typography>
                    <Typography className={classes.subTitle}>
                        Our work then targeted, best practices outcomes social innovation synergy.<br></br>
                        Venture philanthropy, revolutionary inclusive policymaker relief. User-centered<br></br>
                        program areas scale.
                    </Typography>
                </Grid>
            </Grid>

            <div className={classes.serviceContainer}>
                <Grid container spacing={5}>
                    {serviceList}
                </Grid>
            </div>
        </div>
    )
}

Services.defaultProps = {
    classes: {},
};

Services.propTypes = {
    classes: PropTypes.object,
};

export default Services
