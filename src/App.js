import React, {useState, useEffect} from 'react';
import {Box} from '@material-ui/core';
import Chat from './components/Chat';
import Preloader from './components/Preloader';


function App() {
  const [loading, setLoading] = useState(false);

  return (
    <div className="App">
      {loading ? (
        <Preloader />
      ) : (
        <Chat 
          url="https://edikdolynskyi.github.io/react_sources/messages.json"
          onLoading={setLoading}
        />
      )}
    </div>
  );
}

export default App;