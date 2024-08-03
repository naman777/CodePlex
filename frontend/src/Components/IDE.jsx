import React, { useState } from 'react';
import Editor from '@monaco-editor/react';
import axios from 'axios';
import { Base64 } from 'js-base64';

const IDE = () => {
  const [code, setCode] = useState(`#include <iostream>\nusing namespace std;\n\nint main() { \n  cout<<"Hello";\n}`);
  const [output, setOutput] = useState("");
  const [language, setLanguage] = useState("cpp");

  const boilerplateCodes = {
    cpp: `#include <iostream>\nusing namespace std;\n\nint main() { \n  cout<<"Hello";\n}`,
    c: `#include <stdio.h>\n\nint main() { \n  printf("Hello");\n  return 0;\n}`,
    python: `print("Hello")`,
    java: `public class Main {\n  public static void main(String[] args) {\n    System.out.println("Hello");\n  }\n}`,
    javascript: `console.log("Hello");`,
  };

  const sendData = async () => {
    try {
      const utf8Array = new TextEncoder().encode(code);
      const utf8String = String.fromCharCode.apply(null, utf8Array);
      const encodedCode = Base64.encode(utf8String);

      const response = await axios.post("http://localhost:7777/api/ide", {
        code: encodedCode,
        languageId: getLanguageId(language),
        input: null,
      });

      setOutput(response.data.stdout);
    } catch (error) {
      console.error("Error sending data:", error);
    }
  };

  const getLanguageId = (language) => {
    const languageMap = {
      c: 50,
      cpp: 54,
      python: 71,
      java: 62,
      javascript: 63,
    };
    return languageMap[language];
  };

  const handleLanguageChange = (event) => {
    const selectedLanguage = event.target.value;
    setLanguage(selectedLanguage);
    setCode(boilerplateCodes[selectedLanguage]);
  };

  return (
    <div className="container mx-auto px-14 py-8">
      <h1 className="text-2xl font-bold mb-4">Online IDE</h1>
      <div className="mb-4">
        <select
          className="border rounded-lg px-4 py-2"
          value={language}
          onChange={handleLanguageChange}
        >
          <option value="c">C</option>
          <option value="cpp">C++</option>
          <option value="python">Python</option>
          <option value="java">Java</option>
          <option value="javascript">JavaScript</option>
        </select>
      </div>
      <div className="border rounded-lg overflow-hidden mb-4">
        <Editor
          height="70vh"
          defaultLanguage={language}
          theme="vs-dark"
          value={code}
          onChange={(value) => setCode(value)}
          options={{ fontSize: 20 }}
        />
      </div>
      <div className="flex space-x-4 mb-4">
        <button
          className="bg-green-500 text-white px-4 py-2 rounded"
          onClick={sendData}
        >
          Run
        </button>
      </div>
      <div className="border rounded-lg p-4 bg-white">
        <h2 className="text-xl font-bold mb-2">Output: {" "}</h2>
        <p>{output}</p>
      </div>
    </div>
  );
};

export default IDE;
