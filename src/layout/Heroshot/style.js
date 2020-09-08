import bgHead from '../../assets/img/work-desk__dustin-lee.jpg'


const useStyle = (theme) => ({
    'root': {
        'height': '100vh',
        'position':'relative',
        'display': 'flex',
        'fontSize': 12,
        'color': theme.palette.background.grey90,
        'backgroundImage': `url(${bgHead})`,
        'backgroundSize': 'cover',
        'backgroundRepeat': 'no-repeat',
    },
    'logo':{
        'width': '90px',
        'height': '90px',
        'padding': theme.spacing(5)
    },
    'heroContainer':{
        'width':'100%',
        'height':'100vh',
        'position':'absolute',
        'background':'rgba(15, 51, 97, 0.7)'
    },
    'heroText':{
        'height':'60%',
        'color': theme.palette.background.white,
        'textAlign': 'center',
        'marginTop': '5%'
    },
    'captionName':{
        'fontSize': '30px',
        'marginBottom': theme.spacing(1),
    },
    'captionService':{
        'fontSize': '26px',
        'fontWeight': 600,
        'marginBottom': theme.spacing(1),
    },
    'captionOther':{
        'marginBottom': theme.spacing(5),
    }
});

export default useStyle;



