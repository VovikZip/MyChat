import React, { useEffect, useState } from 'react';
import { useStyles } from './classes';
import{ TextField, Button } from '@material-ui/core';
import { v4 } from 'uuid';


export default function MessageInput({
  myUser,
  editingMessage,
  handleMessageAction
}) {
  const [inputMessage, setInputMessage] = useState('');
  const classes = useStyles();

  useEffect(() => {
    if (editingMessage) {
      setInputMessage(editingMessage.text)
    }
  }, [editingMessage]);

  const handleChange = (event) => setInputMessage(event.target.value);

  const createMessage = (messageText) => {
    const message = {
      id: v4(),
      userId: myUser.userId,
      user: myUser.user,
      avatar: myUser.avatar,
      text: messageText,
      createdAt: `${new Date()}`,
      editedAt: ''
    };    
    return message;
  };

  const sendMessage = () => {
    if (!inputMessage) return;
    let newMessage;
    if (editingMessage) {
      newMessage = { ...editingMessage, text: inputMessage };
    } else {
      newMessage = createMessage(inputMessage);
    }
    handleMessageAction(newMessage, editingMessage ? 'edit' : 'create');
    setInputMessage('');
  };  

  return (
    <div className={classes.root}>
      <TextField 
        id="outlined-basic" 
        label={editingMessage ? editingMessage.text : "Enter your message"}
        value={inputMessage}
        onChange={handleChange} 
        className={classes.textField} 
      />
      <Button variant="contained" className={classes.button} onClick={sendMessage}>Send &#128389;</Button>
    </div>
  );
}