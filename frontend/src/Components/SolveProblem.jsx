import React, { useEffect, useState } from "react";
import Editor from "@monaco-editor/react";
import { Code } from "lucide-react";
import axios from "axios";
import { useParams } from "react-router-dom";

const SolveProblem = () => {
  const [code, setCode] = useState(`#include <iostream>\nusing namespace std;\n\nint main() { \n  cout<<"Hello";\n}`);
  const [problem, setProblem] = useState({});
  const [language, setLanguage] = useState("cpp");
  const { id } = useParams(); // Assuming you're using React Router to get the id

  const boilerplateCodes = {
    cpp: `#include <iostream>\nusing namespace std;\n\nint main() { \n  cout<<"Hello";\n}`,
    c: `#include <stdio.h>\n\nint main() { \n  printf("Hello");\n  return 0;\n}`,
    python: `print("Hello")`,
    java: `public class Main {\n  public static void main(String[] args) {\n    System.out.println("Hello");\n  }\n}`,
    javascript: `console.log("Hello");`,
  };

  useEffect(() => {
    const fetchProblem = async () => {
      try {
        const response = await axios.post(`https://codeplex.onrender.com/api/problems/problemId`, {
          id: id
        });
        setProblem(response.data);
      } catch (error) {
        console.error("Error fetching problem data", error);
      }
    };

    fetchProblem();
  }, [id]);

  return (
    <div className="flex h-screen">
      <div className="w-[50%] h-full bg-slate- text-black p-6">
        <div className="text-2xl mb-4">
          {problem.id}{". "}<span className="font-bold">{problem.title}</span>
        </div>
        <div>
          <p className="mb-2 text-black font-bold"> 
            Tags: {problem.tags} {" "}
          </p>
          <p className="text-lg mb-2 font-bold">Problem Description:</p>
          <p>{problem.description}</p>
          <p className="text-lg mb-2 font-bold mt-2">Sample Test Case:</p>
          <p>{problem.sampleTestCase}</p>
          <p className="text-lg mb-2 font-bold">Sample Test Case Answer:</p>
          <p>{problem.sampleTestCaseAns}</p>
        </div>
      </div>
      <div className="w-[50%] h-full bg-gray-800 text-white p-6">
        <div className="flex items-center text-2xl mb-4 mx-5">
          <Code className="mr-2" /> Code
          <select
            className="mx-3 border rounded-lg px-2 py-2 bg-white text-black"
            value={language}
            onChange={(event) => {
              const selectedLanguage = event.target.value;
              setLanguage(selectedLanguage);
              setCode(boilerplateCodes[selectedLanguage]);
            }}
          >
            <option value="c">C</option>
            <option value="cpp">C++</option>
            <option value="python">Python</option>
            <option value="java">Java</option>
            <option value="javascript">JavaScript</option>
          </select>
          <button className="mx-5 rounded bg-green-500 px-4 py-2">Run</button>
        </div>
        <div className="border rounded-lg overflow-hidden">
          <Editor
            height="calc(100vh - 128px)"
            language={language}
            theme="vs-dark"
            value={code}
            onChange={(value) => setCode(value)}
            options={{
              fontSize: 20,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default SolveProblem;
