import React, { useEffect, useState } from "react";
import Editor from "@monaco-editor/react";
import { Code } from "lucide-react";
import axios from "axios";
import { useParams } from "react-router-dom";

const SolveProblem = () => {
  const [code, setCode] = useState("");
  const [problem, setProblem] = useState({});
  const { id } = useParams(); // Assuming you're using React Router to get the id

  useEffect(() => {
    const fetchProblem = async () => {
      try {
        const response = await axios.post(`http://localhost:7777/api/problems/problemId`, {
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
      <div className="w-[50%] h-full bg-black text-white p-6">
        <div className="text-2xl mb-4">{problem.title}</div>
        <div>
          <p>
            Tags:
          </p>
          <p className="text-lg">
            Problem Description:
            {problem.description}
          </p>
        </div>
      </div>
      <div className="w-[50%] h-full bg-gray-800 text-white p-6">
        <div className="flex items-center text-2xl mb-4 mx-5">
          <Code className="mr-2" /> Code 
          <button className="mx-20 rounded-full bg-green-500 px-4 py-2">Run</button>
        </div>
        <div className="border rounded-lg overflow-hidden">
          <Editor
            height="calc(100vh - 128px)" 
            defaultLanguage="cpp"
            theme="vs-dark"
            defaultValue={code}
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
