import { SandpackProvider, SandpackLayout, SandpackCodeEditor, SandpackPreview as SandpackReactPreview } from "@codesandbox/sandpack-react";

const SandpackPreview = ({ code, language }) => {
  const sandpackFiles = {
    "/App.js": {
      code,
      active: true,
    },
    "/index.html": {
      code: `<!DOCTYPE html>
<html>
  <head>
    <title>Preview</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>`,
    },
  };

  const sandpackTemplate = language === "html" ? "vanilla" : "react";

  return (
    <SandpackProvider template={sandpackTemplate} files={sandpackFiles}>
      <SandpackLayout>
        <SandpackCodeEditor />
        <SandpackReactPreview />
      </SandpackLayout>
    </SandpackProvider>
  );
};

export default SandpackPreview;
