import React from 'react';
import { Avatar, Box, IconButton, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@material-ui/core';
import {Edit as EditIcon, Delete as DeleteIcon} from '@material-ui/icons'
import { useStyles } from './classes';
import { formatDate } from 'helpers/date';

export default function OwnMessage({
  message,  
  deleteMessage,
  handleEditMessage
}) {
  const classes = useStyles();
  return (  
    <Box display="flex" flexDirection="row-reverse">
      <Box display="flex" flexDirection="column" position="relative">
        <ListItem className={classes.body}>
          <ListItemText secondary={(
            <Box display="flex" gridGap={10}>
              <Typography variant="subtitle1">
                {message.text}
              </Typography>
              <Typography variant="subtitle2">
                {formatDate(message.createdAt, 'hh:mm')}
              </Typography>
            </Box>
          )} />        
        </ListItem>
        <Box position="absolute" top={43.5} right={15} display="flex">   
          <IconButton style={{ padding: 0 }} onClick={() => handleEditMessage(message.id)}>
            <EditIcon style={{ width: 20, height: 20 }} />
          </IconButton>    
          <IconButton style={{ padding: 0 }} onClick={() => deleteMessage(message.id)}>
            <DeleteIcon style={{ width: 20, height: 20 }} />
          </IconButton>      
        </Box>
      </Box>   
    </Box>     
  );
}