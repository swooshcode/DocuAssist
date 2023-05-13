import { useState, useEffect } from 'react';
import { getMessageResponse } from '../services/databaseService';

function Display() {
  const [response, setResponse] = useState('');

  useEffect(() => {
    const fetchResponse = async () => {
      const data = await getMessageResponse();
      setResponse(data);
    };

    fetchResponse();
  }, []);

  return (
    <div>
      <p>{response}</p>
    </div>
  );
}

export default Display;
