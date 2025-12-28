import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    try {
        const { code, language } = await request.json();

        if (!code || !language) {
            return NextResponse.json({ error: 'Code and language are required' }, { status: 400 });
        }

        // Mock execution based on language
        let output = '';
        switch (language) {
            case 'javascript':
                // For demo, just return a message
                output = 'JavaScript code executed: Hello from JS!';
                break;
            case 'python':
                output = 'Python code executed: Hello from Python!';
                break;
            case 'cpp':
                output = 'C++ code executed: Hello from C++!';
                break;
            case 'java':
                output = 'Java code executed: Hello from Java!';
                break;
            default:
                output = `Code executed in ${language}: Hello from ${language}!`;
        }

        return NextResponse.json({ output });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}