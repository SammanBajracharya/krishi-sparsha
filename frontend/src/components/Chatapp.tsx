import { useState } from 'react';
import axios from 'axios';

function ChatApp() {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');

  const handleSendMessage = async () => {
    try {
      const result = await axios.post('/api/chat', { message });
      setResponse(result.data.answer);
    } catch (error) {
      console.error("Error communicating with the backend", error);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Ask me anything"
      />
      <button onClick={handleSendMessage}>Send</button>
      {response && <div><strong>Response:</strong> {response}</div>}
    </div>
  );
}

export default ChatApp;
