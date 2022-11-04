import {makeStyles, createStyles} from '@material-ui/core';

export const useStyles = makeStyles((theme) => createStyles({
    root: {
      flexGrow: 1,
      marginLeft: '20%',
    },
    textField: {
        width: '65%'
    },
    button: {
        marginTop: '10px !important',
        backgroundColor: '#1C4B8F !important',
        borderRadius: '20px !important',
        width: '10%',
        color: '#FDFFFC !important'
    }
    
  }));