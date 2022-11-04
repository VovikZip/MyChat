import React, {useState, useRef, useEffect} from 'react';
import { useStyles } from './classes';
import Message from '../Message'
import OwnMessage from '../OwnMessage';
import {Box, Divider, List, Typography} from '@material-ui/core';
import { dateFromNow } from 'helpers/date';

export default function MessageList({
  myUser,
  editingMessage,
  messages,
  likeMessage,
  deleteMessage,
  setEditingMessage,
  handleChangeMessage
}) {
  const classes = useStyles();

  const messagesEnd = useRef(null);  
    
  useEffect(() => {
    messagesEnd.current && messagesEnd.current.scrollIntoView({ behavior: 'smooth' });
  });   
  
  const groupMessages = messages.filter(message => editingMessage !== message.id).reduce((acc, cur) => {
    const prevMessageGroup = acc[new Date(cur.createdAt).getDate()];
    if (prevMessageGroup) {
      prevMessageGroup.push(cur.id);
      return acc;
    } 
    return {
      ...acc,
      [new Date(cur.createdAt).getDate()]: [cur.id]
    };
    
  }, {})

  const displayMessages = () =>
    messages.length > 0 
    && messages.filter(message => editingMessage !== message.id).length 
    && Object.entries(groupMessages).map(group => (
      <Box position="relative">
        <Divider />
        <Box position="absolute" left="50%" top={-1} style={{ transform: "translate(-50%, -50%)", zIndex: 100 }}>
          <Typography variant="subtitle1">
            {dateFromNow(messages.find(({ id }) => id === group[1][0]).createdAt)}
          </Typography>
        </Box>
        
        {group[1].map(messageId => {
          const message = messages.find(({ id }) => id === messageId);
          return (
            message.userId !== myUser.userId ? (
              <Message
                key={messageId}
                message={message}
                likeMessage={likeMessage}
              />
            ) : message.userId === myUser.userId && (
              <OwnMessage
                key={messageId}
                message={message}
                deleteMessage={deleteMessage}
                handleEditMessage={setEditingMessage}
              />
            ));
          })}
      </Box>
    )); 

  return (
    <List className={classes.list}>            
      {displayMessages()}    
      <div ref={messagesEnd} />        
    </List>
  );
}