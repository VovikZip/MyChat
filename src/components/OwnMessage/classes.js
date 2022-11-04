import {makeStyles, createStyles} from '@material-ui/core';

export const useStyles = makeStyles((theme) => createStyles({
    root: {
      flexGrow: 1,
      marginLeft: '0%',
      marginRight: '20%'
    },
    body: {
      minHeight: '40px',
      minWidth: '20px',
      maxWidth: '400px',
      backgroundColor: '#C89741 !important',
      borderRadius: '20px',
      marginTop: '10px',    
      marginBottom: '10px',
      color: 'rgba(0, 0, 0, 0.54) !important',
      paddingBottom: 20,
      '&>div>p': {
        wordBreak: 'break-all'
      }
    }
    
  }));