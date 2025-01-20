import { useRef, useState } from "react";
import { Editor } from "@monaco-editor/react";
import LanguageSelector from "./LanguageSelector";
import { CODE_SNIPPETS, HTML_CSS_JS_SNIPPET } from "./constants";
import Output from "./Output";
import SandpackPreview from "./SandpackPreview";

const CodeEditor = () => {
  const editorRef = useRef();
  const [value, setValue] = useState("");
  const [language, setLanguage] = useState("javascript");

  const onMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  };

  const onSelect = (language) => {
    setLanguage(language);
    if (language === "html" || language === "jsx") {
      setValue(HTML_CSS_JS_SNIPPET[language]);
    } else {
      setValue(CODE_SNIPPETS[language]);
    }
  };

  return (
    <div className="flex space-x-4">
      <div className="w-1/2">
        <LanguageSelector language={language} onSelect={onSelect} />
        {language === "html" || language === "jsx" ? (
          <SandpackPreview code={value} language={language} />
        ) : (
          <Editor
            options={{
              minimap: {
                enabled: false,
              },
            }}
            height="75vh"
            theme="vs-dark"
            language={language}
            defaultValue={CODE_SNIPPETS[language]}
            onMount={onMount}
            value={value}
            onChange={(value) => setValue(value)}
          />
        )}
      </div>
      {language !== "html" && language !== "jsx" && (
        <Output editorRef={editorRef} language={language} />
      )}
    </div>
  );
};

export default CodeEditor;
