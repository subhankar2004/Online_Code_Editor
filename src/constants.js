export const LANGUAGE_VERSIONS = {
  javascript: "18.15.0",
  typescript: "5.0.3",
  python: "3.10.0",
  java: "15.0.2",
  csharp: "6.12.0",
  php: "8.2.3",
  html: "N/A",
  jsx: "N/A",
};

export const CODE_SNIPPETS = {
  javascript: `function greet(name) {\n\tconsole.log("Hello, " + name + "!");\n}\n\ngreet("Alex");\n`,
  typescript: `type Params = {\n\tname: string;\n};\n\nfunction greet(data: Params) {\n\tconsole.log("Hello, " + data.name + "!");\n}\n\ngreet({ name: "Alex" });\n`,
  python: `def greet(name):\n\tprint("Hello, " + name + "!")\n\ngreet("Alex")\n`,
  java: `public class HelloWorld {\n\tpublic static void main(String[] args) {\n\t\tSystem.out.println("Hello World");\n\t}\n}\n`,
  csharp: `using System;\n\nnamespace HelloWorld\n{\n\tclass Hello {\n\t\tstatic void Main(string[] args) {\n\t\t\tConsole.WriteLine("Hello World in C#");\n\t\t}\n\t}\n}\n`,
  php: `<?php\n\n$name = 'Alex';\necho $name;\n`,
};

export const HTML_CSS_JS_SNIPPET = {
  html: `<!DOCTYPE html>\n<html lang="en">\n<head>\n\t<meta charset="UTF-8">\n\t<meta name="viewport" content="width=device-width, initial-scale=1.0">\n\t<title>HTML Example</title>\n</head>\n<body>\n\t<h1>Hello, World!</h1>\n</body>\n</html>\n`,
  jsx: `import React from "react";\n\nconst App = () => {\n\treturn (\n\t\t<div>\n\t\t\t<h1>Hello, JSX!</h1>\n\t\t</div>\n\t);\n};\n\nexport default App;\n`,
};
