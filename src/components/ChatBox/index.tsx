import React, { useState } from 'react';

const ChatBox = ({ onQuestionSubmit }) => {
  const [question, setQuestion] = useState('');

  const handleChange = (e) => {
    setQuestion(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onQuestionSubmit(question);
  };

  return (
    <form onSubmit={handleSubmit} className="flex space-x-4">
      <input
        type="text"
        value={question}
        onChange={handleChange}
        className="w-full p-2 border border-gray-300 rounded"
      />
      <button
        type="submit"
        className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700"
      >
        Submit
      </button>
    </form>
  );
};

export default ChatBox;