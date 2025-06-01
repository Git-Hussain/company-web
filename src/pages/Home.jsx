import React, { useState, useEffect } from "react";
import mobiledev from '../assets/mobiledev.jpg';
import styles from "./Home.module.css";

function Home() {
  const [showTerminal, setShowTerminal] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowTerminal(true), 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Desktop & tablet (md and up) */}
      <div
        className="relative hidden md:flex w-full min-h-screen bg-center bg-cover justify-between px-70 py-80"
        style={{ backgroundImage: `url(${mobiledev})`, overflow:"hidden" }}
      >
        <OverlayContent />
        {showTerminal && <TerminalAnimation />}
      </div>

      {/* Mobile (below md) */}
      <div
        className="relative md:hidden w-full min-h-screen bg-center bg-cover bg-no-repeat overflow-hidden px-6 py-20 flex flex-col items-start"
        style={{ backgroundImage: `url(${mobiledev})` }}
      >
        <OverlayContent />
        {showTerminal && (
          <div className="mt-12 w-full max-w-full">
            <TerminalAnimation mobile />
          </div>
        )}
      </div>
    </>
  );
}

function OverlayContent() {
  return (
    <div className="">
      <h1 className={`${styles.borderedText}  ${styles.slideInLeft} text-white text-3xl sm:text-4xl md:text-6xl font-extrabold max-w-xl mb-4`}>
        Professional Web & Mobile Development
      </h1>
      <p className={`  ${styles.slideInLeft} text-white max-w-md text-base sm:text-lg md:text-xl mb-6`}>
        Transform Your Vision Into High-Performance Digital Experiences
      </p>
      <button
        className={` ${styles.slideInLeft} bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-semibold shadow-lg transition`}
      >
        Get Started
      </button>
    </div>
  );
}

function TerminalAnimation({ mobile = false }) {
 const codeLines = [
  "npx create-react-app my-app",
  "cd my-app",
  "npm install tailwindcss postcss autoprefixer",
  "npx tailwindcss init -p",
  "Importing components and styles...",
  "Compiling modules...",
  "Starting development server on http://localhost:3000",
  "You can now view my-app in the browser.",
  "Press Ctrl+C to stop the server.",
  "Happy coding! 🚀",
];


  const [displayedText, setDisplayedText] = useState("");
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (lineIndex >= codeLines.length) return;

    if (charIndex < codeLines[lineIndex].length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + codeLines[lineIndex][charIndex]);
        setCharIndex(charIndex + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + "\n");
        setLineIndex(lineIndex + 1);
        setCharIndex(0);
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, lineIndex]);

  return (
    <pre
      className={`${styles.scaleInCenter} ${styles.terminal} ${
        mobile ? "w-full max-w-full text-sm" : "w-[500px]"
      }`}
    >
      {displayedText}
      <span className="animate-pulse">|</span>
    </pre>
  );
}

export default Home;
