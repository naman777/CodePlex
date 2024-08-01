// src/Components/IDE.jsx
import React, { useState } from 'react';
import Editor from '@monaco-editor/react';

const IDE = () => {
    const [code, setCode] = useState(`#include <bits/stdc++.h>\nusing namespace std;\n\nint main() { \n}`);
  return (
      <div className="container mx-auto px-14 py-8">
        <h1 className="text-2xl font-bold mb-4">Simple IDE</h1>
        <div className="border rounded-lg overflow-hidden mb-4">
          <Editor
            height="80vh"
            defaultLanguage="cpp"
            theme="vs-dark"
            defaultValue={code}
            options={{
                fontSize:20
            }}

          />
        </div>
        <div className="flex space-x-4 mb-4">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Run
          </button>
        </div>
        <div className="border rounded-lg p-4 bg-white">
          <h2 className="text-xl font-bold mb-2">Output:</h2>
        </div>
      </div>
 
  );
};

export default IDE;
