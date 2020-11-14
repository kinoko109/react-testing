import React, { useState } from 'react';

const RenderInput = ({ onClickButton }) => {
  const [input, setInput] = useState('');

  const outputValue = () => {
    if (input) onClickButton(input);
  };

  const updateValue = (e) => setInput(e.target.value);

  return (
    <div>
      <input type="text" placeholder="Enter" value={input} onChange={updateValue} />
      <button onClick={outputValue}>console click</button>
    </div>
  );
};

export default RenderInput;
