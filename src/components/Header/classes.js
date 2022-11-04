import {makeStyles, createStyles} from '@material-ui/core';

export const useStyles = makeStyles((theme) => createStyles({
    
    appBar: {
        backgroundColor: '#1C4B8F !important',
        marginLeft: '20%',
        marginRight: '20%',
        width: '60% !important',
        borderRadius: '10px'
    },
    toolBar: {
        justifyContent: 'space-between',
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    
  }));