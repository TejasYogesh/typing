'use client';

import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-linear-to-b from-[#0d1117] via-[#0b1220] to-black text-white flex items-center justify-center">
      <div className="max-w-6xl w-full px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div>
          {/* <span className="inline-flex items-center gap-2 bg-[#161b22] border border-gray-700 text-sm px-4 py-2 rounded-full mb-6">
            Introducing AI Editor
          </span> */}

          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
            Let’s Code from here
          </h1>

          <p className="text-gray-400 text-lg mb-8">
            Harnessed for productivity. Designed for collaboration.
            Built with security in mind. Welcome to the platform of developers.
          </p>

          <div className="flex gap-4">
            <button
              onClick={() => router.push('/Editor')}
              className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
            >
              Open Editor
            </button>

            <button
              className="border border-gray-600 px-6 py-3 rounded-lg text-gray-300 hover:border-gray-400 transition"
            >
              Learn more
            </button>
          </div>
        </div>

        {/* RIGHT VISUAL */}
        <div className="relative hidden md:block">
          <div className="absolute -top-20 -left-20 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl" />

          <div className="relative bg-[#161b22] border border-gray-700 rounded-xl p-6 shadow-xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-3 h-3 bg-red-500 rounded-full" />
              <span className="w-3 h-3 bg-yellow-500 rounded-full" />
              <span className="w-3 h-3 bg-green-500 rounded-full" />
            </div>

            <pre className="text-sm text-gray-300">
              {`function buildSomethingCool() {
  return "Hello, world!";
}

export default buildSomethingCool;`}
            </pre>
          </div>
        </div>

      </div>
    </main>
  );
}
