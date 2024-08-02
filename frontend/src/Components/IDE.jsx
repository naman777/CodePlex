// src/Components/IDE.jsx
import React, { useState } from 'react';
import Editor from '@monaco-editor/react';
import axios from 'axios'
const IDE = () => {
    const [code, setCode] = useState(`#include <bits/stdc++.h>\n using namespace std;\n\nint main() { cout<<"hello";\n}`);
    const [output, setOutput] = useState("");
    const sendData = async () => {
      try {
        const response = await axios.post("http://localhost:7777/api/ide", {
          "code":code,
          "languageId":"54",
          "input":null,
        });
                
        setOutput(response.data.stdout);
        
      } catch (error) {
        console.error("Error sending data:", error);
      }
    };


  return (
      <div className="container mx-auto px-14 py-8">
        <h1 className="text-2xl font-bold mb-4">Online  IDE</h1>
        <div className="border rounded-lg overflow-hidden mb-4">
          <Editor
            height="70vh"
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
            className="bg-green-500 text-white px-4 py-2 rounded"
          onClick={sendData}>
            Run
          </button>
        </div>
        <div className="border rounded-lg p-4 bg-white">
          <h2 className="text-xl font-bold mb-2">Output:{output}</h2>
        </div>
      </div>
 
  );
};

export default IDE;
