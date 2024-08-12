import { Editor } from '@monaco-editor/react';
import React, { useState } from 'react'

const Interview = () => {

  const [code, setCode] = useState("");

  return (
      <div className='p-5 pt-6 h-screen'>
          <div className="grid grid-cols-3 gap-4">
            <div className="border rounded-lg overflow-hidden col-span-2">
              <Editor
                height="70vh"
                defaultLanguage="54"
                theme="vs-dark"
                value={code}
                onChange={(value) => setCode(value)}
                options={{ fontSize: 20 }}
              />
            </div>
            <div className="flex flex-col space-y-4 col-span-1">
                <div>
                  video
                </div>
                <div>
                  video
                </div>
            </div>
          </div>
      </div>
  )
}

export default Interview
