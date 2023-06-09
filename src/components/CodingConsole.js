import React, { useState } from 'react';
import MonacoEditor from 'react-monaco-editor';
import Interpreter from 'js-interpreter';

function CodingConsole() {
  const [code, setCode] = useState('');

  const runCode = () => {
    try {
      const interpreter = new Interpreter(code);
      interpreter.run();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Coding Console</h2>
      <MonacoEditor
        width="800"
        height="600"
        language="javascript"
        theme="vs-dark"
        value={code}
        options={{ selectOnLineNumbers: true }}
        onChange={setCode}
      />
      <button onClick={runCode}>Run Code</button>
    </div>
  );
}

export default CodingConsole;