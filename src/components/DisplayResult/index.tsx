import React from 'react';

const DisplayResult = ({ result }) => {
  return (
    <div className="p-4 mt-4 border border-gray-300 rounded">
      {result && <p className="text-gray-800">{result}</p>}
    </div>
  );
};

export default DisplayResult;