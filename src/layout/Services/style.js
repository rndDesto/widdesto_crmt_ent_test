const useStyle = (theme) => ({
    'root': {
        'background': theme.palette.background.smokegrey,
        'padding': '60px 0',
    },
    'mainContent':{
        'textAlign': 'center'
    },
    'mainTitle': {
        'fontSize': '30px',
        'marginBottom': theme.spacing(4)
    },
    'subTitle': {
        'marginBottom': theme.spacing(5)
    },
    'serviceContainer':{
        'padding': theme.spacing(5)
    },
    'serviceItem': {
        'padding': theme.spacing(4),
        'border':'2px solid #d4d4d4',
        'boxShadow': '0px 0px 0px 1px rgb(255 255 255 / 75%)',
        'minHeight': '100px'
    },
    'serviceTitle':{
        'fontSize': '18px',
        'fontWeight': 600
    },
    'serviceIcon':{
        'fontSize':'20px',
        'textAlign':'right',
        'color': '#a2a2a2',
    },
    'serviceDetail':{
        'fontSize': '12px',
        'marginTop': theme.spacing(4)
    }
});

export default useStyle;



