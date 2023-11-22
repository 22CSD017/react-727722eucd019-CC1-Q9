// File: src/TwoWayBindingExample.js
import React, { useState } from 'react';

const TwoWayBindingExample = () => {
  const [text, setText] = useState('');

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div style={{ margin: '20px' }}>
      <textarea
        value={text}
        onChange={handleInputChange}
        placeholder="Type something here..."
        style={{ marginBottom: '10px' }}
      />
      <p style={{ marginTop: '10px' }}>Current Value: {text}</p>
    </div>
  );
};

export default TwoWayBindingExample;
