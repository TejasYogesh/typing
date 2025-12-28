// constants.ts

export const languages = [
  { value: "javascript", label: "JavaScript" },
  { value: "typescript", label: "TypeScript" },
  { value: "python", label: "Python" },
  { value: "java", label: "Java" },
  { value: "csharp", label: "C#" },
  { value: "php", label: "PHP" },
  { value: "cpp", label: "C++" },
];

export const LANGUAGE_VERSIONS = {
  javascript: "18.15.0",
  typescript: "5.0.3",
  python: "3.10.0",
  java: "15.0.2",
  csharp: "6.12.0",
  php: "8.2.3",
  cpp: "10.2.0",
  go: "1.16.2",
  rust: "1.68.2",
};

export const codeSnippets: Record<string, string> = {
  cpp: `#include <iostream>\nusing namespace std;\n\nint main() {\n\tcout << "Hello, Alex!" << endl;\n\treturn 0;\n}\n`,

  python: `def greet(name):\n\tprint("Hello, " + name + "!")\n\ngreet("Alex")\n`,

  javascript: `function greet(name) {\n\tconsole.log("Hello, " + name + "!");\n}\ngreet("Alex");\n`,

  java: `public class HelloWorld {\n\tpublic static void main(String[] args) {\n\t\tSystem.out.println("Hello, Alex!");\n\t}\n}\n`,

  go: `package main\n\nimport "fmt"\n\nfunc main() {\n\tname := "Alex"\n\tfmt.Println("Hello, " + name + "!")\n}\n`,

  rust: `fn main() {\n\tlet name = "Alex";\n\tprintln!("Hello, {}!", name);\n}\n`,

  typescript: `type Params = {\n\tname: string;\n}\nfunction greet(data: Params) {\n\tconsole.log("Hello, " + data.name + "!");\n}\ngreet({ name: "Alex" });\n`,

  csharp: `using System;\n\nnamespace HelloWorld\n{\n\tclass Hello {\n\t\tstatic void Main(string[] args) {\n\t\t\tConsole.WriteLine("Hello, Alex!");\n\t\t}\n\t}\n}\n`,

  php: `<?php\n\n$name = 'Alex';\necho "Hello, " . $name . "!";\n`,
};
