export const layoutStyles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        width: '100%'
    },
    header: {
        width: '100%',
        position: 'relative',
        height: '100px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerTitle: {
        position: 'absolute',
        left: '50%',
        transform: 'translateX(-50%)',
        width: 'auto'
    },
    mainContainer: {
        p: 3,
        flexGrow: 1,
        width: '100%'
    }
};

export const listStyles = {
    listContent: {
        display: 'flex',
        width: '100%'
    },
    numberBadge: {
        minWidth: '30px',
        height: '30px',
        borderRadius: '50%',
        backgroundColor: 'primary.main',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        mr: 2,
        fontSize: '0.875rem',
        fontWeight: 'medium'
    },
    listText: {
        flex: 1
    },
    listItemTitle: {
        mb: 0.5
    },
    listItemSecondary: {
        mb: 0.5,
        color: 'text.secondary'
    }
};

export const formStyles = {
    form: {
        width: '100%',
        mt: 2
    },
    submitButton: {
        mt: 3
    }
};

export const cardStyles = {
    card: {
        height: '100%'
    },
    cardContent: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
    }
};