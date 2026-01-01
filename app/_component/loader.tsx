"use client";

import { useEffect, useState } from "react";

const lines = [
    "> Initializing developer workspace...",
    "> Loading production-grade modules...",
    "> Optimizing performance pipeline...",
    "> Deploying user experience...",
    "> System online."
  ];
  

export default function TerminalLoader() {
  const [text, setText] = useState("");
  const [line, setLine] = useState(0);
  const [char, setChar] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (line < lines.length) {
      if (char < lines[line].length) {
        const timeout = setTimeout(() => {
          setText(prev => prev + lines[line][char]);
          setChar(char + 1);
        }, 40);
        return () => clearTimeout(timeout);
      } else {
        setText(prev => prev + "\n");
        setLine(line + 1);
        setChar(0);
      }
    } else {
      setTimeout(() => setDone(true), 500);
    }
  }, [char, line]);

  if (done) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
      <pre className="text-green-400 font-mono text-md sm:text-base">
        {text}
        <span className="animate-pulse">▋</span>
      </pre>
    </div>
  );
}
