import {makeStyles, createStyles} from '@material-ui/core';

export const useStyles = makeStyles((theme) => createStyles({
  root: {
    flexGrow: 1,
    marginLeft: '0%',
    marginRight: '20%'
  },
  body: {
    minWidth: '20px',
    maxWidth: '400px',
    minHeight: '40px',
    backgroundColor: '#fff !important',
    borderRadius: '20px',
    marginTop: '10px',
    marginLeft: '20px',
    marginBottom: '10px',
    color: '#49BE90 !important',
    paddingBottom: 20
  }    
}));