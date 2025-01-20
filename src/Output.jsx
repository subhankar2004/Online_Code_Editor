import { useState } from "react";
import { SandpackProvider, SandpackLayout, SandpackCodeEditor, SandpackPreview } from "@codesandbox/sandpack-react";
import { executeCode } from "./api";

const Output = ({ editorRef, language }) => {
  const [output, setOutput] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const runCode = async () => {
    const sourceCode = editorRef.current.getValue();
    if (!sourceCode) return;

    if (language === "jsx" || language === "html") {
      setOutput(sourceCode);
      return;
    }

    try {
      setIsLoading(true);
      const { run: result } = await executeCode(language, sourceCode);
      setOutput(result.output.split("\n"));
      result.stderr ? setIsError(true) : setIsError(false);
    } catch (error) {
      console.error(error);
      alert("An error occurred: " + (error.message || "Unable to run code"));
    } finally {
      setIsLoading(false);
    }
  };

  if (language === "jsx" || language === "html") {
    return (
      <div className="w-1/2">
        <p className="mb-2 text-lg">Output</p>
        <button
          className={`border px-4 py-2 mb-4 rounded ${
            isLoading ? "bg-gray-500" : "bg-green-500 hover:bg-green-600"
          }`}
          disabled={isLoading}
          onClick={runCode}
        >
          {isLoading ? "Running..." : "Run Code"}
        </button>
        <SandpackProvider template={language === "jsx" ? "react" : "vanilla"} customSetup={{ files: { "App.js": output || "" } }}>
          <SandpackLayout>
            <SandpackCodeEditor />
            <SandpackPreview />
          </SandpackLayout>
        </SandpackProvider>
      </div>
    );
  }

  return (
    <div className="w-1/2">
      <p className="mb-2 text-lg">Output</p>
      <button
        className={`border px-4 py-2 mb-4 rounded ${
          isLoading ? "bg-gray-500" : "bg-green-500 hover:bg-green-600"
        }`}
        disabled={isLoading}
        onClick={runCode}
      >
        {isLoading ? "Running..." : "Run Code"}
      </button>
      <div
        className={`h-[75vh] p-2 border rounded ${
          isError ? "border-red-500 text-red-400" : "border-gray-300"
        }`}
      >
        {output
          ? output.map((line, i) => <p key={i}>{line}</p>)
          : 'Click "Run Code" to see the output here'}
      </div>
    </div>
  );
};

export default Output;
