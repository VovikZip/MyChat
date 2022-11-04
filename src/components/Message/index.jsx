import React from 'react';
import { Avatar, IconButton, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core';
import { Typography, Box} from '@material-ui/core'
import { formatDate } from 'helpers/date';
import { ThumbUp as ThumbUpIcon } from '@material-ui/icons';
import { useStyles } from './class';

export default function Message({
  message,  
  likeMessage
}) {
  const classes = useStyles();
  return (
    <Box display="flex" flexDirection="column" position="relative">
      <ListItem className={classes.body}>
        <ListItemAvatar>
          <Avatar src={message.avatar} /> 
        </ListItemAvatar>
        <ListItemText primary={(
          <Box display="flex" justifyContent="space-between">
            <Typography variant="caption">{message.user}</Typography>
            <Typography variant="subtitle2">{formatDate(message.createdAt, 'hh:mm')}</Typography>
          </Box>
        )} secondary={message.text} />        
      </ListItem>
      <Box position="absolute" top={68.5} left={45} display="flex">
        {Boolean(message.likeCount) && (
          <Typography variant="subtitle1" style={{ marginRight: 5}}>
            {message.likeCount}
          </Typography>
        )}        
        <IconButton style={{ padding: 0 }} onClick={() => likeMessage(message.id)}>
          <ThumbUpIcon style={{ width: 20, height: 20 }} />
        </IconButton>      
      </Box>
    </Box>    
  );
}