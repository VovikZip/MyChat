import React, {useState, useEffect} from 'react';
import {useStyles} from './classes'
import {AppBar, Toolbar, Typography, Box} from '@material-ui/core';
import {formatDate} from '../../helpers/date';


export default function Header({
  headerTitle,
  headerUsersCount,
  headerMessagesCount,
  headerLastMessageDate
}) {
  const classes = useStyles();

  const toString = (count, characteristic) => 
    `${count} ${characteristic}` + (count > 1 ? 's' : '');

  return (
    <div style={{flexGrow: 1}} className="header" >
      <AppBar position="static" className={classes.appBar}>
        <Toolbar className={classes.toolBar}>
          <Box display="flex" gridGap={15} className="header-title">
            <Typography variant="h6" className="header-users-count">
                {headerTitle}
            </Typography>
            <Typography variant="h6" className="header-users-count">
                {toString(headerUsersCount +1, 'person')}
            </Typography>
            <Typography variant="h6" className="header-messages-count">
                {toString(headerMessagesCount, 'message')}
            </Typography>
            </Box>
          <Typography variant="h6" className="header-last-message -date">
            {formatDate(headerLastMessageDate, 'DD.MM.YYYY hh:mm:ss')}
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
