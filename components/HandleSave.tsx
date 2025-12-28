import { Button } from "./ui/button";

interface HandleSaveProps {
    language: string;
    code: string;
}

const HandleSave: React.FC<HandleSaveProps> = ({ language, code }) => {
    const handleSave = () => {
        // Utility function
        function downloadFile(filename: string, content: string) {
            const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
            const url = URL.createObjectURL(blob);

            const a = document.createElement("a");
            a.href = url;
            a.download = filename;
            a.click();

            URL.revokeObjectURL(url);
        }

        // pick extension based on language
        const extensionMap: Record<string, string> = {
            cpp: "cpp",
            javascript: "js",
            typescript: "ts",
            python: "py",
            java: "java",
            go: "go",
            rust: "rs",
            csharp: "cs",
            php: "php",
        };

        const ext = extensionMap[language] || "txt";
        downloadFile(`simpleprogram.${ext}`, code);
    };

    return (
        <Button onClick={handleSave}>Download Snippet</Button>
    );
};

export default HandleSave;
