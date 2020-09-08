const useStyle = (theme) => ({
    'newsletterBg': {
        'width': '550px',
        'maxWidth': '600px',
        'background': 'rgb(0 108 158 / 0.8)',
        'color': theme.palette.background.white,
        'position': 'fixed',
        'left': 0,
        'bottom': 0,
        [theme.breakpoints.down('xs')]: {
            width: '100%',
        },
    },
    'newsLetterContent': {
        'padding': theme.spacing(5),
    },
    'newsLetterHead': {
        'fontSize': '22px',
        'fontWeight': 600,
        'marginBottom': theme.spacing(4)
    },
    'newsLetterDetail': {
        'leneHeight': '1.2',
        'marginBottom': theme.spacing(4)
    },
    'emailInput': {
        'background': theme.palette.background.white,
    },
    'input': {
        'height': '32px',
    },
    'newsLetterBtn': {
        'color': '#ffffff',
        'background': '#ff8000',
    },
    'newsLetterClose': {
        'position': 'absolute',
        'top': '4px',
        'right': '12px',
        'cursor': 'pointer',
    }
});

export default useStyle;



