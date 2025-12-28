// import dynamic from 'next/dynamic'
'use client'
// const Editor = dynamic(() => import('@monaco-editor/react'), { ssr: false })
import Editor, { OnMount } from "@monaco-editor/react"
import { useRef } from "react"
import { useState, useEffect } from "react";
import LanguageSelector from "../../components/LanguageSelector";
import SeriousModeButton from "../../components/SeriousMode";
import Output from "../../components/Output";
import HandleSave from "../../components/HandleSave";


export default function EditorPage() {
    const editorRef = useRef<Parameters<OnMount>[0] | null>(null);
    const monacoRef = useRef<Parameters<OnMount>[1] | null>(null);
    const onMount: OnMount = (editor, monaco) => {
        editorRef.current = editor;
        monacoRef.current = monaco;
        editor.focus()
    }
    const [language, setLanguage] = useState("javascript");
    const [code, setCode] = useState(`function greet(name) {\n\tconsole.log("Hello, " + name + "!");\n}\ngreet("Alex");\n`);

    useEffect(() => {
        if (editorRef.current && monacoRef.current) {
            const model = editorRef.current.getModel();
            if (model) {
                monacoRef.current.editor.setModelLanguage(model, language);
            }
        }
    }, [language]);

    const handleLanguageChange = (newLang: string, newCode: string) => {
        setLanguage(newLang);
        setCode(newCode);
    };


    return (
        <>
            <div>
                <div className="flex justify-end bg-blue-500 mb-4">
                    <div className="p-2">
                        {/* <Button className="m-4">Save in local</Button> */}
                        {/* <p className="m-4 text-white">Tejas is testing</p> */}
                        {/* <Button onClick={showValue} className="p-2 rounded-xl">Show Value</Button> */}
                    </div>
                    <div className="flex justify-between">
                        <div className="m-4">
                            <HandleSave language={language} code={code} />
                        </div>
                        <div className="m-4">
                            <SeriousModeButton />
                        </div>
                        <div className="m-4">
                            <LanguageSelector value={language} onValueChange={handleLanguageChange} />
                        </div>
                    </div>


                </div>

                <div className="flex">
                    <div className="w-50vw">
                        <Editor
                            height="100vh"
                            width="50vw"
                            // theme="vs-dark"
                            // defaultLanguage="python"
                            language={language}
                            onMount={onMount}
                            value={code}
                            onChange={(value) => setCode(value || "")}
                        />
                    </div>
                    {/* <hr /> */}
                    <div>
                        <Output editorRef={editorRef} language={language} />
                    </div>
                </div>

            </div>
        </>
    )
}
