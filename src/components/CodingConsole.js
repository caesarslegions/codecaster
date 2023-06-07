import React from 'react';
import MonacoEditor from 'react-monaco-editor';

function CodingConsole() {
  return (
    <div>
      <h2>This is the Coding Console</h2>
      <MonacoEditor
        width="800"
        height="600"
        language="javascript"
        theme="vs-dark"
      />
      <button>Run</button>
    </div>
  );
}

export default CodingConsole;