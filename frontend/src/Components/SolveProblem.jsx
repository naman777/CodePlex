import React, { useState } from "react";
import Editor from "@monaco-editor/react";
import { Code } from "lucide-react";

const SolveProblem = () => {
  const [code, setCode] = useState(
    "#include <bits/stdc++.h>\nusing namespace std;\nint main(){\n}"
  );

  return (
    <div className="flex h-screen">
      <div className="w-[50%] h-full bg-black text-white p-6">
        <div className="text-2xl mb-4">TITLE</div>
        <div>
            <p>
                Tags:
            </p>
          <p className="text-lg">
            Problem Description
          </p>
          <p>

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
