import axios from "axios";
import { LANGUAGE_VERSIONS } from "../../constants";
import { NextRequest, NextResponse } from 'next/server';

const API = axios.create({
  baseURL: "https://emkc.org/api/v2/piston",
});

export const executeCode = async (
  language: keyof typeof LANGUAGE_VERSIONS,
  sourceCode: string
): Promise<{
  run: {
    stdout: string;
    stderr: string;
    output: string;
    code: number;
    signal: string | null;
  };
}> => {
  const response = await API.post("/execute", {
    language,
    version: LANGUAGE_VERSIONS[language],
    files: [
      {
        content: sourceCode,
      },
    ],
  });

  return response.data;
};

export async function POST(request: NextRequest) {
  try {
    const { code, language } = await request.json();

    if (!code || !language) {
      return NextResponse.json({ error: 'Code and language are required' }, { status: 400 });
    }

    const result = await executeCode(language, code);
    const output = result.run.output || result.run.stdout || result.run.stderr || 'No output';

    return NextResponse.json({ output });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Execution failed' }, { status: 500 });
  }
}
