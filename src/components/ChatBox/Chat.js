import { useState } from 'react';
import { processMessage } from '../services/langchainService';

function Chat() {
  const [message, setMessage] = useState('');

  const handleInputChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    processMessage(message);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={message} onChange={handleInputChange} />
      <input type="submit" value="Submit" />
    </form>
  );
}

export default Chat;
