import { Button } from "./ui/button"
import { useState } from "react"
import { OnMount } from "@monaco-editor/react"

interface OutputProps {
    editorRef: React.RefObject<Parameters<OnMount>[0] | null>;
    language: string;
}

export default function Output({ editorRef, language }: OutputProps) {
    const [output, setOutput] = useState('');
    const [loading, setLoading] = useState(false);

    const runCode = async () => {
        const sourceCode = editorRef.current?.getValue();
        if (!sourceCode) {
            setOutput('No code to run');
            return;
        }
        setLoading(true);
        try {
            const response = await fetch('/api/output', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ code: sourceCode, language }),
            });
            const data = await response.json();
            setOutput(data.output || 'No output');
        } catch (err) {
            setOutput('Error running code: ' + (err as Error).message);
        } finally {
            setLoading(false);
        }
    }

    return (
        <>
            <div>
                <div className="m-2">
                    Output
                </div>
                <div className="m-2">
                    <Button variant='outline' onClick={runCode} disabled={loading}>
                        {loading ? 'Running...' : 'Run Code'}
                    </Button>
                </div>
                <div className="m-2 p-2 border rounded bg-gray-100 dark:bg-gray-800">
                    <pre>{output}</pre>
                </div>
            </div>
        </>
    )
}