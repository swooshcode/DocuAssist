import React, { useState, useEffect } from 'react';
import ChatBox from '../components/ChatBox';
import DisplayResult from '../components/DisplayResult';
import { embedText } from '../lib/langchain';
import staticText from '../public/static.txt';

const Home = () => {
  const [result, setResult] = useState('');

  useEffect(() => {
    // Embed the static text file on component mount
    embedText(staticText);
  }, []);

  const handleQuestionSubmit = async (question) => {
    const response = await fetch('/api/langchain', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ question }),
    });
    const data = await response.json();
    setResult(data.result);
  };

  return (
    <>
      <ChatBox onQuestionSubmit={handleQuestionSubmit} />
      <DisplayResult result={result} />
    </>
  );
};

export default Home;