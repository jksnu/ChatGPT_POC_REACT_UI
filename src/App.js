

import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [query, setQuery] = useState('');
  const [reply, setReply] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:3001/api/query', { query });

      setReply(response.data.reply);
    } catch (error) {
      console.error('Error:', error.response.data);
    }
  };

  return (
    <div>
      <h1>My Chatbot</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
        <button type="submit">Send</button>
      </form>
      {reply && <p>{reply}</p>}
    </div>
  );
};

export default App;