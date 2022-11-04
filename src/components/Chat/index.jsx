import React, { useEffect, useState }  from 'react';
import Header from '../Header';
import { useStyles } from './classes';
import MessageInput from '../MessageInput';
import MessageList from '../MessageList';
import {myUser} from '../../resourses/user';

export default function Chat({
  url,
  onLoading
}) {
  const classes = useStyles();
  const [messages, setMessages] = useState([]);
  const [userCount, setUserCount] = useState(1);
  const [lastMessageTime, setLastMessageTime] = useState('');
  const [editingMessage, setEditingMessage] = useState('');

  useEffect(() => {
    onLoading(true);
    (async () => {
      const receivedMessages = await getMessages(url);
      const correctMessages = receivedMessages.map(message => !message.likeCount && message.likeCount !== 0 ? { ...message,  likeCount: 0 } : message); 
      setMessages(correctMessages);
      changeCountUsers(messages);
      findLastTimeMessage(messages);     
    })();
    onLoading(false);
  }, [url]);

  const getMessages = async (url)  => {
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}` +
        `, received ${res.status}`);
    }
    return res.json();  
  }

  const findLastTimeMessage = messages => {
    const sortedMessages = [...messages].sort((c1, c2) => c1.createdAt - c2.createdAt);
    const lastMessage = sortedMessages.pop();
    setLastMessageTime(lastMessage.createdAt);    
  }

  const findEditingMessage = () =>  messages.find(({ id }) => id === editingMessage);

  const changeCountUsers = messages => {
    const uniqueUsers = messages.reduce((acc, cur) => {
      if (!acc.includes(cur.user)) {
        acc.push(cur.user);
      }
      return acc;
    }, []);
    setUserCount(uniqueUsers.length);
  };

  const handleNewMessage = (newMessage, type) => {
    let newMessages;
    if (type === 'create') {
      newMessages = [...messages, newMessage];
    } else {
      newMessages = messages.map(message => message.id === newMessage.id ? newMessage : message);
      setEditingMessage('');
    }
    setMessages(newMessages);
    findLastTimeMessage(newMessages);
  }

  const likeMessage = id => {
    const thisMessageIndex = messages.findIndex(message => message.id === id);
    const thisMessage = messages[thisMessageIndex];
    if (thisMessage?.action) {
      thisMessage.action = '';
      thisMessage.likeCount -= 1;
    } else {
      thisMessage.action = 'like';
      thisMessage.likeCount += 1;
    }
    const newMessages = messages.map(message => (message.id === thisMessage.id ? thisMessage : message));    
    setMessages(newMessages);
  }

  const deleteMessage = id => {
    const newMessages = messages.filter(message => message.id !== id);
    setMessages(newMessages);
    findLastTimeMessage(newMessages);
  }

  const changeMessage = newMesssage => {    
    const newMessages = messages.map(message => (message.id === newMesssage.id ? newMesssage : message));
    setMessages(newMessages);
  }
  console.log('lastMessageTime', lastMessageTime);
  return (
    <>
      <Header 
        headerTitle="myChat"
        headerUsersCount={userCount} 
        headerMessagesCount={messages.length}
        headerLastMessageDate={lastMessageTime}
      />
      <MessageList
        myUser={myUser}
        editingMessage={editingMessage}
        messages={messages}
        likeMessage={likeMessage}
        deleteMessage={deleteMessage} 
        setEditingMessage={setEditingMessage}
        handleChangeMessage={changeMessage}
      />
      <MessageInput 
        myUser={myUser}
        editingMessage={findEditingMessage()}
        handleMessageAction={handleNewMessage}
      />
    </>    
  );
}