const useStyle = (theme) => ({
    'panelNotif': {
        'position': 'fixed',
        'zIndex': '1020',
        'background': theme.palette.background.smokegrey,
        'width': '100%',
        'display': 'flex',
        'justifyContent': 'center'
    },
    'panelContent': {
        'width': '660px',
        'padding': '12px 20px'
    },
    'panelBtn':{
        'background': theme.palette.background.blue,
        'color': theme.palette.background.white,
        '&:hover':{
            'background': theme.palette.background.blue,
        }
    },
    'panelTerm':{
        'color':'#0012EC'
    }
});

export default useStyle;



