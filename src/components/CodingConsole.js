import React, { useState } from 'react';
import MonacoEditor from 'react-monaco-editor';
import Interpreter from 'js-interpreter';
import './CodingConsole.css';

function CodingConsole() {
  const [code, setCode] = useState('');
  const [error, setError] = useState(null);

  const runCode = () => {
    try {
      const interpreter = new Interpreter(code);
      interpreter.run();
      setError(null);
    } catch (error) {
      setError(error.toString());
    }
  };

  return (
    <div className="coding-console-container">
      <h2>Coding Console</h2>
      <div className="editor-container">
        <MonacoEditor
          width="100%"
          height="100%"
          language="javascript"
          theme="vs-dark"
          value={code}
          options={{ selectOnLineNumbers: true }}
          onChange={setCode}
        />
      </div>
      <button className="run-button" onClick={runCode}>Run Code</button>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
}

export default CodingConsole;
